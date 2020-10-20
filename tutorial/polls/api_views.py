from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework import generics  # 追加
from rest_framework.response import Response  # 追加
from rest_framework.request import Request

from .models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer


class QuestionViewSet(ReadOnlyModelViewSet):
    queryset = Question.objects.all()  # ここが対象となるレコードの指定．今回は全部
    serializer_class = QuestionSerializer  # 戻り値を定義したSerializer


class VoteView(generics.CreateAPIView):
    serializer_class = ChoiceSerializer

    def post(self, request: Request, choice_id, *args, **kwargs):
        obj = generics.get_object_or_404(queryset=Choice.objects.all(), id=choice_id)

        obj.votes += 1
        obj.save()

        s = ChoiceSerializer(instance=obj)
        return Response(s.data)
