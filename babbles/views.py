from django.http import HttpResponse,JsonResponse,Http404
from django.shortcuts import render

from .models import Tweet
from .forms import TweetForm
# Create your views here.

def tweet_create_view(request,*args,**kwargs):
    form = TweetForm(request.POST or None)
    if form.is_valid():
        obj = form.save(commit=False)
        obj.save()
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
    tweets_list = [{"id":x.id,"content":x.content, "likes":12} for x in qs]  #iterate on the database
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