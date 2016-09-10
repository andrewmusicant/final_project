from django.shortcuts import render, HttpResponse

from .models import Bank, State


def index(request):
    states = State.objects.all()
    context = {
        'states': states,
    }
    return render(request, 'index.html', context)


def state(request, pk):
    pk = int(pk)
    state = State.objects.get(pk=pk)
    banks = Bank.objects.filter(state=state)
    context = {
        'banks': banks
    }
    return render(request, 'state.html', context)
