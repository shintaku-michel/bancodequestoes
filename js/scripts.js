$(document).ready(function () {

    $(".form-check-input").change(function () {
        valueInput = $(this).val();
        //Incluir alteração do arquivo
        switch (valueInput) {
            case 'option1':
                urlJson = "./json/dir.administrativo.json";
                break;
            case 'option2':
                urlJson = "./json/dir.constitucional.00.json";
                break;
            case 'option3':
                urlJson = "./json/dir.constitucional.01.json";
                break;
            case 'option4':
                urlJson = "./json/dir.humanos.cidadania.json";
                break;
            case 'option5':
                urlJson = "./json/dir.processual.penal.00.json";
                break;
            case 'option6':
                urlJson = "./json/dir.processual.penal.01.json";
                break;
            case 'option7':
                urlJson = "./json/dir.processual.penal.02.json";
                break;
            case 'option8':
                urlJson = "./json/dir.processual.penal.03.json";
                break;
            case 'option9':
                urlJson = "./json/dir.penal.json";
                break;
            case 'option10':
                urlJson = "./json/etica.00.json";
                break;
            case 'option11':
                urlJson = "./json/etica.01.json";
                break;
            case 'option12':
                urlJson = "./json/etica.02.json";
                break;
            case 'option13':
                urlJson = "./json/etica.03.json";
                break;
            case 'option14':
                urlJson = "./json/fisica.json";
                break;
            case 'option15':
                urlJson = "./json/informatica.json";
                break;
            case 'option16':
                urlJson = "./json/legislacao.dprf.00.json";
                break;
            case 'option17':
                urlJson = "./json/legislacao.dprf.01.json";
                break;
            case 'option18':
                urlJson = "./json/legislacao.dprf.02.json";
                break;
            case 'option19':
                urlJson = "./json/legislacao.dprf.03.json";
                break;
            case 'option20':
                urlJson = "./json/legislacao.especial.json";
                break;
            case 'option21':
                urlJson = "./json/matematica.json";
                break;
            case 'option22':
                urlJson = "./json/portugues.json";
                break;
            case 'option23':
                urlJson = "./json/nocoes.administracao.json";
                break;
            case 'option24':
                urlJson = "./json/nocoes.estatistica.json";
                break;
            default:
                urlJson = "./json/simulado.pf.json";
        }
    });

    $('#altera-json').on('click', function (e) {
        //Atualiza a página
        e.preventDefault();
        sessionStorage.setItem('url', urlJson);
        location.reload();
    });

    var urlJson = sessionStorage['url'] || "./json/dir.processual.penal.00.json";

    $.get(urlJson, function (data) {
        $.each(data.questoes, function (index, value) {
            var html = '<div class="card" id="' + (index + 1) + '">';
            html += '<div class="card-body">';
            html += '<span class="disciplina">' + value.disciplina + '</span>';
            html += '<h5 class="card-banca">' + value.banca + '</h5>';
            html += '<span class="materia">' + value.materia + '</span>';
            html += '<h6 class="card-pergunta mb-2">' + value.pergunta + '</h6>';
            html += '<p class="card-text';
            value.resposta == 'E' ? html += ' item-errado' : html += ' item-certo';
            html += '">';
            html += '<span class="gab-resposta">';
            html += 'RESPOSTA: ' + value.resposta;
            html += '</span>';
            html += '<span class="desc-resposta">';
            html += value.comentario;
            html += '</span>';
            value.lei == 'sim' ? html += '<span class="desc-leis">' + value.desc_lei + '</span>' : html += '';
            html += '</p>';
            html += '<hr>';
            html += '<a href="#" class="btn btn-success btn-sm"><i class="far fa-check-circle"></i> CERTO</a>';
            html += '<a href="#" class="btn btn-danger btn-sm"><i class="far fa-times-circle"></i> ERRADO</a>';
            html += '<a href="#" class="btn btn-warning btn-sm"><i class="far fa-meh"></i> NÃO RESPONDER</a>';
            html += '<a href="#" class="ver-resposta card-link"><i class="far fa-eye"></i> RESPOSTA</a>';
            html += '<a href="#" class="voltar-pergunta card-link"><i class="fas fa-backward"></i> VOLTAR</a>';
            html += '<a href="#" class="proxima-pergunta card-link"><i class="fas fa-forward"></i> PRÓXIMA</a>';
            html += '<a href="#" class="gabarito card-link"><i class="fas fa-list-alt"></i> IMPRIMIR GABARITO</a>';
            html += '<span class="parabens">';
            html += '<i class="far fa-check-circle"></i> RESPOSTA CORRETA!';
            html += '</span>';
            html += '<span class="que-pena">';
            html += '<i class="far fa-times-circle"></i> RESPOSTA ERRADA!';
            html += '</span>';
            html += '<span class="nao-respondeu">';
            html += '<i class="fas fa-exclamation-triangle"></i> NÃO RESPONDEU!';
            html += '</span>';
            html += '</div>';
            html += '</div>';

            $("#questoes-wrapper").append(html);

        });

        var contRespErrada = $('#count-errado').val() + 0;
        var contRespCerta = $('#count-certo').val() + 0;
        var contNaoRespondeu = $('#count-nao-respondeu').val() + 0;
        var contPontos = $('#count-pontos').val() + 0;

        //Verifica se o botao CERTO
        $('.btn.btn-success.btn-sm').one('click', function () {
            var verificaBtnErrado = $(this).siblings('.card-text').hasClass('item-certo');
            if (verificaBtnErrado == true) {
                contRespCerta++;
                contPontos++;
                //Limpa o campo e adiciona o ultimo count
                $("#count-certo").empty().append(contRespCerta);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-certa-box");
                $(this).siblings(".parabens").css('display', 'block');
                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-danger.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
            } else {
                contRespErrada++;
                contPontos--;
                $("#count-errado").empty().append(contRespErrada);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-errada-box");
                $(this).siblings(".que-pena").css('display', 'block');
                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-danger.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
            }
        });

        //Verifica se o botao ERRADO
        $('.btn.btn-danger.btn-sm').one('click', function () {
            var verificaBtnErrado = $(this).siblings('.card-text').hasClass('item-errado');
            if (verificaBtnErrado == true) {
                contRespCerta++;
                contPontos++;
                //Limpa o campo e adiciona o ultimo count
                $("#count-certo").empty().append(contRespCerta);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-certa-box");
                $(this).siblings(".parabens").css('display', 'block');

                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-success.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
            } else {
                contRespErrada++;
                contPontos--;
                $("#count-errado").empty().append(contRespErrada);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-errada-box");
                $(this).siblings(".que-pena").css('display', 'block');
                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-success.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
            }
        });

        //Verifica se o botao NAO RESPONDER
        $('.btn.btn-warning.btn-sm').one('click', function () {
            contNaoRespondeu++;

            $(this).siblings('.btn-success, .btn-danger').addClass('disabled');
            $(this).parents(".card").addClass("resp-nao-respondeu-box");
            $(this).siblings(".nao-respondeu").css('display', 'block');
            //Limpa o campo e adiciona o ultimo count
            $("#count-nao-respondeu").empty().append(contNaoRespondeu);
        });

        //Verifica resposta e grava no sessionAtorage
        $('.btn.btn-danger.btn-sm, .btn.btn-warning.btn-sm, .btn.btn-success.btn-sm').click(function () {
            var itemQuestao = $(this).parents('.card').attr('id');
            var respC = $(this).parents('.card').hasClass('resp-certa-box');
            var respE = $(this).parents('.card').hasClass('resp-errada-box');

            if (respC == true) {
                sessionStorage.setItem(itemQuestao, 'C');
            } else if (respE == true) {
                sessionStorage.setItem(itemQuestao, 'E');
            } else {
                sessionStorage.setItem(itemQuestao, 'NR');
            }

            if (itemQuestao == qtdAtual) {
                $('.proxima-pergunta').hide();
                //Imprimir gabarito
                /* $('.gabarito').css('color', 'gray').show(); */
            }
        });

        //Imprime gabarito
        /* $('.gabarito').one('click', function () {
            var i;
            for (i = 1; i <= sessionStorage.length; i++) {
                $("#resultado-gab").append("<span class='list-gab'>" + i + " = " + sessionStorage[i] + "</span>");
            }
            sessionStorage.clear();
        }) */

        //Volta para questão anterior
        $('.voltar-pergunta').click(function () {
            if (itemQuestao <= 1) {
                $('.voltar-pergunta').addClass('disabled');
            } else {
                $(this).parents('.card').hide();
                $('#' + (itemQuestao - 1)).css("display", "block");
                itemQuestao--;
                console.log(itemQuestao);
                $('#ctQ').text('QUESTÃO : ' + itemQuestao + '/' + qtdAtual);
            }
        });

        //Altera contador de questões
        var itemQuestao = 1;
        var qtdAtual = $('.card').length;
        $('#ctQ').text('QUESTÃO : ' + itemQuestao + '/' + qtdAtual);

        //Passa para a proxima questão 
        $('.proxima-pergunta').click(function () {
            if (itemQuestao == qtdAtual) {
                $(this).addClass('disabled');
            } else {
                itemQuestao++;
                $(this).parents('.card').hide();
                $('#' + itemQuestao).css("display", "block");

                $('#ctQ').text('QUESTÕES: ' + itemQuestao + '/' + qtdAtual);
            }
        });

        //Mostra a resposta da questão
        //Pega o elemento irmão com a classe especificada
        /* $('.ver-resposta').on('click', function (e) {
            var elem = $(e.target).siblings('p');
            if (elem.is(":hidden")) {
                elem.show('slow');
            } else {
                elem.hide('slow');
            }
        }) */
        $('.ver-resposta').on('click', function () {
            $(this).siblings('p').slideToggle('slow');
        })

        //Adiciona estilo nos botões retitados pela inclusão do html dinâmico
        $('.btn.btn-success.btn-sm, .btn.btn-danger.btn-sm, .btn.btn-warning.btn-sm').css('margin-right', '4px');
    });

    $(".open-options").click(function () {
        let icone = $(this).find("i").hasClass("fas fa-chevron-circle-up");
        if (icone == true) {
            $(this).find("i").removeClass("fas fa-chevron-circle-up").addClass("fas fa-chevron-circle-down");
        } else {
            $(this).find("i").removeClass("fas fa-chevron-circle-down").addClass("fas fa-chevron-circle-up");
        }
        $(this).siblings(".form-check").slideToggle();
    });

});