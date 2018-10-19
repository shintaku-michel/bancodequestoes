$(document).ready(function () {

    $(".form-check-input").change(function () {
        valueInput = $(this).val();
        //Incluir alteração do arquivo
        switch (valueInput) {
            case 'option1':
                urlJson = "./json/dir.administrativo.00.json";
                break;
            case 'option2':
                urlJson = "./json/dir.administrativo.01.json";
                break;
            case 'option3':
                urlJson = "./json/dir.administrativo.02.json";
                break;
            case 'option4':
                urlJson = "./json/dir.administrativo.03.json";
                break;
            case 'option5':
                urlJson = "./json/dir.administrativo.04.json";
                break;
            case 'option6':
                urlJson = "./json/dir.administrativo.05.json";
                break;
            case 'option7':
                urlJson = "./json/dir.administrativo.06.json";
                break;
            case 'option8':
                urlJson = "./json/dir.administrativo.07.json";
                break;
            case 'option9':
                urlJson = "./json/dir.constitucional.00.json";
                break;
            case 'option10':
                urlJson = "./json/dir.constitucional.01.json";
                break;
            case 'option11':
                urlJson = "./json/dir.constitucional.02.json";
                break;
            case 'option12':
                urlJson = "./json/dir.constitucional.03.json";
                break;
            case 'option13':
                urlJson = "./json/dir.constitucional.04.json";
                break;
            case 'option14':
                urlJson = "./json/dir.constitucional.05.json";
                break;
            case 'option15':
                urlJson = "./json/dir.constitucional.06.json";
                break;
            case 'option16':
                urlJson = "./json/dir.constitucional.07.json";
                break;
            case 'option17':
                urlJson = "./json/dir.humanos.cidadania.00.json";
                break;
            case 'option18':
                urlJson = "./json/dir.humanos.cidadania.01.json";
                break;
            case 'option19':
                urlJson = "./json/dir.humanos.cidadania.02.json";
                break;
            case 'option20':
                urlJson = "./json/dir.humanos.cidadania.03.json";
                break;
            case 'option21':
                urlJson = "./json/dir.humanos.cidadania.04.json";
                break;
            case 'option22':
                urlJson = "./json/dir.processual.penal.00.json";
                break;
            case 'option23':
                urlJson = "./json/dir.processual.penal.01.json";
                break;
            case 'option24':
                urlJson = "./json/dir.processual.penal.02.json";
                break;
            case 'option25':
                urlJson = "./json/dir.processual.penal.03.json";
                break;
            case 'option26':
                urlJson = "./json/dir.processual.penal.04.json";
                break;
            case 'option27':
                urlJson = "./json/dir.processual.penal.05.json";
                break;
            case 'option28':
                urlJson = "./json/dir.processual.penal.06.json";
                break;
            case 'option29':
                urlJson = "./json/dir.processual.penal.07.json";
                break;
            case 'option30':
                urlJson = "./json/dir.processual.penal.08.json";
                break;
            case 'option31':
                urlJson = "./json/dir.processual.penal.09.json";
                break;
            case 'option32':
                urlJson = "./json/dir.penal.00.json";
                break;
            case 'option33':
                urlJson = "./json/dir.penal.01.json";
                break;
            case 'option34':
                urlJson = "./json/dir.penal.02.json";
                break;
            case 'option35':
                urlJson = "./json/dir.penal.03.json";
                break;
            case 'option36':
                urlJson = "./json/dir.penal.04.json";
                break;
            case 'option37':
                urlJson = "./json/dir.penal.05.json";
                break;
            case 'option38':
                urlJson = "./json/dir.penal.06.json";
                break;
            case 'option39':
                urlJson = "./json/dir.penal.07.json";
                break;
            case 'option40':
                urlJson = "./json/dir.penal.08.json";
                break;
            case 'option41':
                urlJson = "./json/dir.penal.09.json";
                break;
            case 'option42':
                urlJson = "./json/etica.00.json";
                break;
            case 'option43':
                urlJson = "./json/etica.01.json";
                break;
            case 'option44':
                urlJson = "./json/etica.02.json";
                break;
            case 'option45':
                urlJson = "./json/etica.03.json";
                break;
            case 'option46':
                urlJson = "./json/fisica.00.json";
                break;
            case 'option47':
                urlJson = "./json/fisica.01.json";
                break;
            case 'option48':
                urlJson = "./json/fisica.02.json";
                break;
            case 'option49':
                urlJson = "./json/informatica.00.json";
                break;
            case 'option50':
                urlJson = "./json/informatica.01.json";
                break;
            case 'option51':
                urlJson = "./json/informatica.02.json";
                break;
            case 'option52':
                urlJson = "./json/informatica.03.json";
                break;
            case 'option53':
                urlJson = "./json/informatica.04.json";
                break;
            case 'option54':
                urlJson = "./json/legislacao.dprf.00.json";
                break;
            case 'option55':
                urlJson = "./json/legislacao.dprf.01.json";
                break;
            case 'option56':
                urlJson = "./json/legislacao.dprf.02.json";
                break;
            case 'option57':
                urlJson = "./json/legislacao.dprf.03.json";
                break;
            case 'option58':
                urlJson = "./json/legislacao.dprf.04.json";
                break;
            case 'option59':
                urlJson = "./json/legislacao.especial.00.json";
                break;
            case 'option60':
                urlJson = "./json/legislacao.especial.01.json";
                break;
            case 'option61':
                urlJson = "./json/legislacao.especial.02.json";
                break;
            case 'option62':
                urlJson = "./json/legislacao.especial.03.json";
                break;
            case 'option63':
                urlJson = "./json/legislacao.especial.04.json";
                break;
            case 'option64':
                urlJson = "./json/legislacao.especial.05.json";
                break;
            case 'option65':
                urlJson = "./json/legislacao.especial.06.json";
                break;
            case 'option66':
                urlJson = "./json/legislacao.especial.07.json";
                break;
            case 'option67':
                urlJson = "./json/legislacao.especial.08.json";
                break;
            case 'option68':
                urlJson = "./json/legislacao.especial.09.json";
                break;
            case 'option69':
                urlJson = "./json/legislacao.especial.10.json";
                break;
            case 'option70':
                urlJson = "./json/legislacao.especial.11.json";
                break;
            case 'option71':
                urlJson = "./json/legislacao.especial.12.json";
                break;
            case 'option72':
                urlJson = "./json/matematica.00.json";
                break;
            case 'option73':
                urlJson = "./json/matematica.01.json";
                break;
            case 'option74':
                urlJson = "./json/matematica.02.json";
                break;
            case 'option75':
                urlJson = "./json/matematica.03.json";
                break;
            case 'option76':
                urlJson = "./json/matematica.04.json";
                break;
            case 'option77':
                urlJson = "./json/matematica.05.json";
                break;
            case 'option78':
                urlJson = "./json/portugues.00.json";
                break;
            case 'option79':
                urlJson = "./json/portugues.01.json";
                break;
            case 'option80':
                urlJson = "./json/portugues.02.json";
                break;
            case 'option81':
                urlJson = "./json/portugues.03.json";
                break;
            case 'option82':
                urlJson = "./json/portugues.04.json";
                break;
            case 'option83':
                urlJson = "./json/portugues.05.json";
                break;
            case 'option84':
                urlJson = "./json/nocoes.administracao.00.json";
                break;
            case 'option85':
                urlJson = "./json/nocoes.administracao.01.json";
                break;
            case 'option86':
                urlJson = "./json/nocoes.administracao.02.json";
                break;
            case 'option87':
                urlJson = "./json/nocoes.administracao.03.json";
                break;
            case 'option88':
                urlJson = "./json/nocoes.administracao.04.json";
                break;
            case 'option89':
                urlJson = "./json/nocoes.administracao.05.json";
                break;
            case 'option90':
                urlJson = "./json/nocoes.administracao.06.json";
                break;
            case 'option91':
                urlJson = "./json/nocoes.administracao.07.json";
                break;
            case 'option92':
                urlJson = "./json/nocoes.estatistica.00.json";
                break;
            case 'option93':
                urlJson = "./json/nocoes.estatistica.01.json";
                break;
            case 'option94':
                urlJson = "./json/nocoes.estatistica.02.json";
                break;
            case 'option95':
                urlJson = "./json/nocoes.estatistica.03.json";
                break;
            case 'option96':
                urlJson = "./json/nocoes.estatistica.04.json";
                break;
            case 'option97':
                urlJson = "./json/nocoes.estatistica.05.json";
                break;
            case 'option98':
                urlJson = "./json/simulado.00.json";
                break;
            case 'option99':
                urlJson = "./json/simulado.01.json";
                break;
            case 'option100':
                urlJson = "./json/simulado.02.json";
                break;
            case 'option101':
                urlJson = "./json/simulado.03.json";
                break;
            case 'option102':
                urlJson = "./json/simulado.04.json";
                break;
            case 'option103':
                urlJson = "./json/simulado.05.json";
                break;
            case 'option104':
                urlJson = "./json/simulado.06.json";
                break;
            default:
                urlJson = "./json/simulado.07.json";
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
                swal({
                    title: "Parabéns!!",
                    text: "Continue assim...",
                    icon: "success",
                    buttons: false,
                    timer: 3000
                });
            } else {
                contRespErrada++;
                contPontos--;
                $("#count-errado").empty().append(contRespErrada);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-errada-box");
                $(this).siblings(".que-pena").css('display', 'block');
                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-danger.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
                swal({
                    title: "Opppsssss!!",
                    text: "Acontece, tente novamente!",
                    icon: "error",
                    buttons: false,
                    timer: 3000
                });
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
                swal({
                    title: "Parabéns!!",
                    text: "Continue assim...",
                    icon: "success",
                    buttons: false,
                    timer: 3000
                });
            } else {
                contRespErrada++;
                contPontos--;
                $("#count-errado").empty().append(contRespErrada);
                $("#count-pontos").empty().append(contPontos);
                $(this).parents(".card").addClass("resp-errada-box");
                $(this).siblings(".que-pena").css('display', 'block');
                //Desabilitar os outros botoes de seleção
                $(this).siblings('.btn.btn-success.btn-sm, .btn.btn-warning.btn-sm').addClass('disabled');
                swal({
                    title: "Opppsssss!!",
                    text: "Acontece, tente novamente!",
                    icon: "error",
                    buttons: false,
                    timer: 3000
                });
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