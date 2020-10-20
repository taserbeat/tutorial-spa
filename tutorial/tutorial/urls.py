from django.contrib import admin
from django.urls import path, include  # includeを追加

from polls.api_urls import question_router  # 定義したquestion_routerをimport
from polls import api_views as poll_views

api_urlpatterns = [  # apiのURL一覧 (まだquestionだけ)
    path('questions/', include(question_router.urls)),  # 慣例として複数形にする
    path('choices/<int:choice_id>/vote/', poll_views.VoteView.as_view()),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/1.0/', include(api_urlpatterns)),  # api/1.0/としてapi一覧を登録
]
