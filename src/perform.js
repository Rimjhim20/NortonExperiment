import React from 'react'

var count = 0;
var dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8;

export default function perform1() {
    var r1, r2, r3, v1, v2, rl1, s1, s2, tmp1, tmp2;
    r1 = parseFloat(document.getElementById('r1').value);
    r2 = parseFloat(document.getElementById('r2').value);
    r3 = parseFloat(document.getElementById('r3').value);
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    rl1 = parseFloat(document.getElementById('rl1').value);
    s1 = parseFloat(document.getElementById('s1').value);
    s2 = parseFloat(document.getElementById('s2').value);
    if (s1 === 1 && s2 === 2) {
        var i = (r2 * v1) / ((r1 * r3) + (r1 * rl1) + (r1 * r2) + (r3 * r2) + (rl1 * r2));
        if (i > 5 || isNaN(i)) {

            alert('Fuse burned due to over current.Click Ok to repair it and increase the resistance value.');
            document.f1.r2.value = 200;
        } else {
            document.f1.A.value = i;
            document.f1.V.value = document.f1.A.value * rl1;
            document.f1.A1.value = document.f1.A.value;
            document.f1.rl2.value = rl1;
            dr1 = document.f1.A.value;
            dr2 = document.f1.A.value * rl1;
            dr3 = rl1;

            document.getElementById("next1").disabled = false;

            //perform_meter1();
            //perform_meter2();
        }

    } else {
        alert("Please select S1 to Position-1 (Supply) and S2 to Position-2 (Load).")
    }
}

export function perform2() {



    var r1, r2, r3, v1, v2, rl1, s1, s2, tmp1, tmp2;
    r1 = parseFloat(document.getElementById('r1').value);
    r2 = parseFloat(document.getElementById('r2').value);
    r3 = parseFloat(document.getElementById('r3').value);
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    rl1 = parseFloat(document.getElementById('rl1').value);
    s1 = parseFloat(document.getElementById('s1').value);
    s2 = parseFloat(document.getElementById('s2').value);
    if (s1 === 1 && s2 === 3) {
        var i = ((((r2 * r3) / (r2 + r3)) * v1) / (r1 + ((r2 * r3) / (r2 + r3)))) / r3;
        if (i > 5 || isNaN(i)) {

            alert('Fuse burned.Click OK to repair it and increase the resistance value.');
            document.f1.r2.value = 200;
        } else {
            document.f1.A.value = i
            document.f1.V.value = 0;
            document.f1.vth1.value = document.f1.A.value
            document.f1.vth2.value = document.f1.vth1.value;
            dr4 = document.f1.vth1.value;

            document.getElementById("next2").disabled = false;

            //perform_meter1();
            //perform_meter2();
        }
    } else {
        alert("Please select S1 to Position-1 (Supply) and S2 to Position-2 (Short).")
    }
}

export function perform3() {
    var r1, r2, r3, v1, v2, rl1, s1, s2, tmp1, tmp2;
    r1 = parseFloat(document.getElementById('r1').value);
    r2 = parseFloat(document.getElementById('r2').value);
    r3 = parseFloat(document.getElementById('r3').value);
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    rl1 = parseFloat(document.getElementById('rl1').value);
    s1 = parseFloat(document.getElementById('s1').value);
    s2 = parseFloat(document.getElementById('s2').value);
    if (s1 === 2 && s2 === 1) {
        var i = (v2 * (r1 + r2)) / ((r1 * r2) + (r3 * r1) + (r3 * r2));
        if (i > 5 || isNaN(i)) {

            alert('Fuse burned.Click OK to repair it and increase the resistance value.');
            document.f1.r2.value = 200;
        } else {
            document.f1.A.value = i;
            document.f1.A12.value = document.f1.A.value;
            document.f1.v22.value = v2;
            document.f1.V.value = v2;
            document.f1.rth1.value = v2 / document.f1.A.value;
            document.f1.rth2.value = document.f1.rth1.value;
            dr5 = v2;
            dr6 = document.f1.A.value;
            dr7 = document.f1.rth1.value;
            document.getElementById("next3").disabled = false;

            //perform_meter1();
            //perform_meter2();
        }
    } else {
        alert("Please select S1 to Position-2 (Short) and S2 to Position-1 (Supply).")
    }
}

export function perform4() {

    var r1, r2, r3, v1, v2, rl1, s1, s2, tmp1, tmp2;
    r1 = parseFloat(document.getElementById('r1').value);
    r2 = parseFloat(document.getElementById('r2').value);
    r3 = parseFloat(document.getElementById('r3').value);
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    rl1 = parseFloat(document.getElementById('rl1').value);
    s1 = parseFloat(document.getElementById('s1').value);
    s2 = parseFloat(document.getElementById('s2').value);
    if (document.f1.rth2.value != 0 && document.f1.vth1.value !== 0) {
        count = count + 1;
        tmp1 = parseFloat(document.f1.rth1.value);
        tmp2 = parseFloat(document.f1.vth1.value);
        document.f1.A13.value = (tmp2 * tmp1) / (tmp1 + rl1);
        dr8 = (tmp2 * tmp1) / (tmp1 + rl1);
        document.f1.v22.value = 0;
        document.f1.A12.value = 0;
        document.f1.rth1.value = 0;
        document.f1.vth1.value = 0;
        document.f1.A.value = 0;
        document.f1.V.value = 0;
        document.f1.A1.value = 0;
        alert("The observation table is updated. Change the resistance and voltage source values to take another observation.");
        document.f1.rth2.value = 0;
        document.f1.vth2.value = 0;
        document.f1.rl2.value = 0;
        document.f1.A13.value = 0;
        if (count === 1) {
            document.f1.tr1.value = dr1;
            document.f1.tr2.value = dr2;
            document.f1.tr3.value = dr3;
            document.f1.tr4.value = dr4;
            document.f1.tr5.value = dr5;
            document.f1.tr6.value = dr6;
            document.f1.tr7.value = dr7;
            document.f1.tr8.value = dr8;
        } else if (count === 2) {
            document.f1.tr10.value = dr1;
            document.f1.tr20.value = dr2;
            document.f1.tr30.value = dr3;
            document.f1.tr40.value = dr4;
            document.f1.tr50.value = dr5;
            document.f1.tr60.value = dr6;
            document.f1.tr70.value = dr7;
            document.f1.tr80.value = dr8;
        } else if (count === 3) {
            document.f1.tr11.value = dr1;
            document.f1.tr21.value = dr2;
            document.f1.tr31.value = dr3;
            document.f1.tr41.value = dr4;
            document.f1.tr51.value = dr5;
            document.f1.tr61.value = dr6;
            document.f1.tr71.value = dr7;
            document.f1.tr81.value = dr8;
        } else if (count === 4) {
            document.f1.tr12.value = dr1;
            document.f1.tr22.value = dr2;
            document.f1.tr32.value = dr3;
            document.f1.tr42.value = dr4;
            document.f1.tr52.value = dr5;
            document.f1.tr62.value = dr6;
            document.f1.tr72.value = dr7;
            document.f1.tr82.value = dr8;
        } else if (count === 5) {
            document.f1.tr13.value = dr1;
            document.f1.tr23.value = dr2;
            document.f1.tr33.value = dr3;
            document.f1.tr43.value = dr4;
            document.f1.tr53.value = dr5;
            document.f1.tr63.value = dr6;
            document.f1.tr73.value = dr7;
            document.f1.tr83.value = dr8;
        } else {
            alert("The observation table is full. Refresh the page to continue");

        }

        document.getElementById("next4").disabled = false;
        document.getElementById("per4").disabled = true;


    } else {
        alert("Please find INorton and RNorton first.")
    }
}

export function change_led1() {
    var fuse = document.getElementById('led1');
    fuse.src = "./images/led_on.png";
    document.f1.r2.value = 200;
}

export function change_led2() {
    var fuse = document.getElementById('led2');
    fuse.src = "./images/led_on.png";
    document.f1.r2.value = 200;
}


export function nextt() {


    var tabcc = document.getElementById('tab-content1');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('tab-content2');
    tabcc.style.display = "block";

}

export function nextt2() {

    var tabcc = document.getElementById('tab-content2');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('tab-content3');
    tabcc.style.display = "block";

}

export function nextt3() {


    var tabcc = document.getElementById('tab-content3');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('tab-content4');
    tabcc.style.display = "block";

    var tabcc = document.getElementById('main_circuit');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('thckt');
    tabcc.style.display = "block";


}

export function nextt4() {


    var tabcc = document.getElementById('tab-content4');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('tab-content1');
    tabcc.style.display = "block";

    var tabcc = document.getElementById('thckt');
    tabcc.style.display = "none";

    var tabcc = document.getElementById('main_circuit');
    tabcc.style.display = "block";

    document.getElementById("next1").disabled = true;
    document.getElementById("next2").disabled = true;
    document.getElementById("next3").disabled = true;
    document.getElementById("next4").disabled = true;
    document.getElementById("per4").disabled = false;

}
export function printpage(){
    window.print()
}


