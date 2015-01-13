'use strict';

define(['app'], function (app) {

    app.factory('enumFactory', function(){
        return {
            cargaArchivos: {
                URL : APP.DATA.CONFIG.URL_BASE+'carga/upload.ashx',
                //URL :'http://localhost/prDivisionTerritorial/carga/upload.ashx',
                EXT_DOC : /(\.|\/)(doc|docx|ppt|pptx|xls|xlsx|pdf|txt|rtf|jpe?g|png|bmp)$/i,
                EXT_MAP : /(\.|\/)(jpe?g|png|bmp)$/i,
                PESO_MAX : 26214400,
                CANT_MAX : 10
            },
            enumDocumento:{
                // NULL:0,
                NUMERO_CERTIFICADO:{id:1, descripcion:'N° Certificado (Cupón)'},
                NUMERO_DOCUMENTO_IDENTIDAD:{id:2, descripcion:'N° Documento de Identidad'}
            },
            enumTipoCita:{
                // NULL:0,
                NACIMIENTO:{id:1, descripcion:'Nacimiento'},
                MATRIMONIO:{id:2, descripcion:'Matrimonio'},
                DEFUNCION:{id:3, descripcion:'Defunción'},
                NATURALIZACION:{id:4, descripcion:'Naturalización'}
            },            
            enumTipoDocumento:{
            	// NULL:0,
            	NUMERO_CEDULA:{id:1, descripcion:'Número Cédula'},
            	NUMERO_CITA_INSCRIPCION:{id:2, descripcion:'Número Cita Inscripción'},
            	OTRO_TIPO_DOCUMENTO:{id:3, descripcion:'Otro Tipo Documento'}
            },
            enumTipoDocumentoNoAsiento:{
                // NULL:0,
                CEDULA:{id:1, descripcion:'Número Cédula'},
                PASAPORTE:{id:2, descripcion:'Pasaporte'},
                CARNET_DE_REFUGIADO:{id:3, descripcion:'Carnet de Refugiado'},
                CARNET_DE_EXTRANJERIA:{id:4, descripcion:'Carnet de Extranjería'},
                //OTRO:{id:5, descripcion:'Otro'}
            },
            enumTipoSolicitud:{
                SENTENCIA:{id:1, descripcion:'Sentencias', descripcorta:'sentencia'},
                OCURSO:{id:2, descripcion:'Ocursos', descripcorta:'ocurso'},
                RECONOCIMIENTO_Y_LEGITIMACION:{id:3, descripcion:'Reconomientos y Legitimaciones', descripcorta:'reconocimiento'},
                CAUSA_MUERTE:{id:4, descripcion:'Causas de Muerte', descripcorta:'causamuerte'},
            }

        };
    });    

});