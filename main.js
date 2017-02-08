/**
 * Created by wq1856225 on 17-2-5.
 */
require.config({
    baseURI:".",
    paths:{
        "jquery":["http://localhost/jquery/jquery.min"],
        "bootstrap":["http://localhost/bootstrap/js/bootstrap.min"],
        "number":"./number"
    },
    shim:{
        "underscore":{
            exports:"_"
        }
    }
})

require(["jquery","bootstrap","number"])