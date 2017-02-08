/**
 * Created by wq1856225 on 17-2-7.
 */
define(["jquery","bootstrap"],function () {

        $(" .aul li").click(function () {
            var index=$(".aul li").index(this);

            $(".carousel").carousel(index)



    })
    $(".carousel").on("slide.bs.carousel",function (event) {
        var p=$(event.relatedTarget).attr("progress");
        $("#progress").animate({width:p+"px"});

    })

})