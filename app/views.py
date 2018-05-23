# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django import views
from django.http import JsonResponse
from django.template.loader import render_to_string
# Create your views here.


class Welcome(views.View):
	template_name = 'welcome.html'

	def get(self, request):
		return render(request, self.template_name)

class Ajax(views.View):
	template_name = 'ajax.html'
	def get(self, request):
		template = render_to_string(self.template_name)
		return JsonResponse({'template': template})

