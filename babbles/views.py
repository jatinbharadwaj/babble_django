from django.http import HttpResponse,JsonResponse,Http404
from django.shortcuts import render,redirect
from django.utils.http import is_safe_url
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Tweet
from .forms import TweetForm
from .serializers import TweetSerializer
# Create your views here.
ALLOWED_HOSTS = settings.ALLOWED_HOSTS


@api_view(['POST'])
@permission_classes([IsAuthenticated]) #REST_API
# @authentication_classes([SessionAuthentication])
def tweet_create_view(request,*args,**kwargs):
    serializer = TweetSerializer(data=request.POST or None)
    if serializer.is_valid(raise_exception=True):
       serializer.save(user=request.user)
       return Response(serializer.data,status=201)
    return Response({},status=400)

@api_view(['GET'])
def tweet_list_view(request,*args,**kwargs):
    qs = Tweet.objects.all() #model object grabs all the data
    # tweets_list = [{"id":x.id,"content":x.content, "likes":12} for x in qs]  #iterate on the database
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data,status=200)

@api_view(['GET'])
def tweet_detail_view(request,tweet_id,*args,**kwargs):
    qs = Tweet.objects.filter()
    if not qs.exists():
        return Response({},status=404)
    obj = qs.first
    serializer = TweetSerializer(obj)
    return Response(serializer.data,status=200)    


def tweet_create_view_pure_django(request,*args,**kwargs):
    user = request.user
    if not request.user.is_authenticated:
        user = None
        if request.is_ajax():
            return JsonResponse({},status=401)
        return redirect(settings.LOGIN_URL)
    # print("ajax",request.is_ajax())
    form = TweetForm(request.POST or None)
    next_url = request.POST.get("next") or None
    print('next_url',next_url)
    if form.is_valid():
        obj = form.save(commit=False)
        obj.user = user#request.user or None
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.serialize(),status=201)
        if next_url != None and is_safe_url(next_url,ALLOWED_HOSTS):
            return redirect(next_url)
        form = TweetForm()
    return render(request,'Components/form.html',context={"form":form})

def home_view(request,*args,**kwargs):
    # print(args,kwargs)
    # return HttpResponse("<h1>Hello World</h1>")
    return render(request,"pages/home.html",context={},status=200)

def tweet_list_view_pure_django(request,*args,**kwargs):
    """
        REST API VIEW
        Consume by JS
        return JSon Data
    """
    qs = Tweet.objects.all() #model object grabs all the data
    # tweets_list = [{"id":x.id,"content":x.content, "likes":12} for x in qs]  #iterate on the database
    tweets_list = [x.serialize() for x in qs]
    data = {
        "isUser":False,
        "response": tweets_list}
    return JsonResponse(data)

def tweet_detail_view_pure_django(request,tweet_id,*args,**kwargs):
    # print(args,kwargs)
    """
        REST API VIEW
        Consume by JS
        return JSon Data
    """
    data={
        "id":tweet_id,
    }
    status = 202
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content'] = obj.content
    except:
        status = 404
        raise Http404

    return JsonResponse(data,status=status)