from django.http import HttpResponse,JsonResponse,Http404
from django.shortcuts import render

from .models import Tweet
# Create your views here.

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
    qs = Tweet.objects.all()
    tweets_list = [{"id":x.id,"content":x.content} for x in qs]
    data = {"response": tweets_list}
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