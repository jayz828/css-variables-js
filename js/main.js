/**
 * Created by jasonnatividad on 4/3/17.
 */


(function(){



    var inputs = document.querySelectorAll("input");

    var image = document.querySelector("img");

    var hl = document.querySelector(".hl");

    console.log(hl);

    //console.log(images);

    //console.log(inputs);
    console.log(inputs[0]);

    inputs[0].addEventListener("input", function() {
        //console.log(this.value);

        image.style.padding = this.value + "px";
    })

    inputs[1].addEventListener("input", function() {
        image.style.filter = "blur("+ this.value + "px"+")";
    })

    inputs[2].addEventListener("input", function() {
        image.style.background = this.value;
        hl.style.color = this.value;
    })

})();