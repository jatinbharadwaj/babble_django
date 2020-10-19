from django.http import HttpResponse,JsonResponse,Http404
from django.shortcuts import render,redirect
from django.utils.http import is_safe_url
from django.conf import settings
from .models import Tweet
from .forms import TweetForm
# Create your views here.
ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def tweet_create_view(request,*args,**kwargs):
    print("ajax",request.is_ajax())
    form = TweetForm(request.POST or None)
    next_url = request.POST.get("next") or None
    print('next_url',next_url)
    if form.is_valid():
        obj = form.save(commit=False)
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

def tweet_list_view(request,*args,**kwargs):
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

def tweet_detail_view(request,tweet_id,*args,**kwargs):
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