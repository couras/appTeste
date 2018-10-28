angular.module("appSmartContas")
    .controller("indexCtrl", function ($scope) {
        var itemEditar;

        $scope.isEdit = false;
        $scope.title = "SmartContas";
        $scope.alunos = [
            { nome: "Denis", email: "a@a.com", nota: 65, nota2: 10, nota3: 5 },
            { nome: "Maria", email: "a@a.com", nota: 65, nota2: 10, nota3: 5 },
            { nome: "Eliana", email: "a@a.com", nota: 6, nota2: 10, nota3: 55 }
        ];

        var init = function () {
            $scope.alunos.forEach(function (aluno) {
                aluno.media = media(aluno);
            });
            clearForm();
        }

        var media = function (Aluno) {
            console.log(count++);
            var media = (parseFloat(Aluno.nota) +
                parseFloat(Aluno.nota2) +
                parseFloat(Aluno.nota3)) / 3;
            return media.toFixed(2);
        }

        var count = 0;

        $scope.addConta = function (Aluno) {
            $scope.alunos.push(Aluno);
            actionModal('close');
            clearForm();
        }

        $scope.adicionar = function () {
            $scope.isEdit = false;
            clearForm();
            actionModal('open');
        }

        $scope.salvar = function (Aluno) {
            itemEditar.nome = Aluno.nome;
            itemEditar.email = Aluno.email;
            itemEditar.nota = Aluno.nota;
            itemEditar.nota2 = Aluno.nota2;
            itemEditar.nota3 = Aluno.nota3;
            itemEditar.media = media(Aluno);
            actionModal('close');
        }

        $scope.editar = function (Aluno) {
            $scope.isEdit = true;
            angular.copy(Aluno, $scope.Aluno);
            itemEditar = Aluno;
            actionModal('open');
        };

        $scope.delete = function (Aluno) {
            if ($.inArray(Aluno, $scope.alunos) >= 0) {
                $scope.alunos.splice($.inArray(Aluno, $scope.alunos), 1);
            }
        }

        var clearForm = function () {
            $scope.Aluno = { nome: "", email: "", nota: "", nota2: "", nota: "", media: "" };
        }

        var actionModal = function (tipo) {
            $('.modal').modal(tipo);
        }

        init();
    });