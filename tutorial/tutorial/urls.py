from django.contrib import admin
from django.urls import path, include  # includeを追加

from polls.api_urls import question_router  # 定義したquestion_routerをimport
from polls import api_views as poll_views
from rest_framework_jwt.views import obtain_jwt_token

# APIのURLパターン
api_urlpatterns = [
    path('auth/', obtain_jwt_token),
    path('questions/', include(question_router.urls)),  # 慣例として複数形にする
    path('choices/<int:choice_id>/vote/', poll_views.VoteView.as_view()),
]

# アプリケーション全体のURLパターン
# http(s)://<hostname>:<port>/
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/1.0/', include(api_urlpatterns)),  # api/1.0/としてapi一覧を登録
]
