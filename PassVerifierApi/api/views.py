from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

@api_view(["POST","GET"])
def login_user(request):
    if request.method == "GET":
        print(request.GET)
        username = request.GET["username"]
        password = request.GET["password"]
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            validDict = {"isValid" : "True"}
            return Response(validDict)
        else:
            validDict = {"isValid" : "False"}
            return Response(validDict)
    elif request.method == "POST":
        print("\n\n\n\n\n\n")
        print(request.data)
        print("\n\n\n\n\n\n\n")
        username = request.data["username"]
        password = request.data["password"]
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            validDict = {"isValid" : "True"}
            print("######################################")
            print("LOGIN VALID")
            print("########################################")
            return Response(validDict)
        else:
            print("######################################")
            print("LOGIN INVALID")
            print("########################################")
            validDict = {"isValid" : "False"}
            return Response(validDict)
