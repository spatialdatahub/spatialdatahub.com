from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render, redirect

from accounts.models import Account
from accounts.forms import AccountForm

from datasets.models import Dataset

def account_list(request):
    """
    This view will need to be searchable by account name, account affiliation,
    and other account terms.
    """
    account_list = User.objects.all()
    context = {"account_list": account_list}
    template_name = "accounts/account_list.html"
    return render(request, template_name, context)


def account_update(request, account_slug=None):
    account = get_object_or_404(Account, account_slug=account_slug)
    template_name = "accounts/account_update.html"
    if request.method == "POST":
        form = AccountForm(request.POST, instance=account)
        if form.is_valid():
            form.save()
            return redirect("accounts:account_detail",
                            account_slug=account.account_slug)
        else:
            return HttpResponse("Error!")
    else:
        form = AccountForm(instance=account)
    return render(request, template_name, {"account": account, "form": form})

@login_required
def account_remove(request):
    # this view actually removes the user model, and everything associated with it
    user = request.user
    context = {"account": user}
    template_name = "accounts/account_remove.html"
    if request.method == 'POST':
        account.delete()
        return redirect('/')
    return render(request, template_name, context)


# account_detail and account_portal are the same... I want to have one view
# that doesn't have the leaflet logic though
def account_detail(request, account_slug=None):
    account = get_object_or_404(Account, account_slug=account_slug)
    dataset_list = Dataset.objects.filter(account=account)
    template_name = "accounts/account_detail.html"

    if "q" in request.GET:
        q = request.GET["q"]
        dataset_list = dataset_list.filter(
            title__icontains=q).order_by("title")

    return render(request, template_name,
                  context={"account": account, "dataset_list": dataset_list})


def account_portal(request, account_slug=None):
    account = get_object_or_404(Account, account_slug=account_slug)
    dataset_list = Dataset.objects.filter(account=account)
    template_name = "accounts/account_portal.html"

    if "q" in request.GET:
        q = request.GET["q"]
        dataset_list = dataset_list.filter(
            title__icontains=q).order_by("title")

    return render(request, template_name,
                  context={"account": account,
                           "dataset_list": dataset_list})
