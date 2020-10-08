from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Question
from .serializers import QuestionSerializer


class QuestionViewSet(ReadOnlyModelViewSet):
    queryset = Question.objects.all()  # ここが対象となるレコードの指定．今回は全部
    serializer_class = QuestionSerializer  # 戻り値を定義したSerializer
