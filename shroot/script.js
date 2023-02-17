function v87() {
  var x = `Steps:<br><br>

1) Downgrade to v87<br>
2) Open Crosh (ctrl+alt+t)<br>
3) run the command set_cellular_ppp &#92';bash;exit;&#92'<br>
4) run the command bash <(curl https://coolelectronics.me/unroll)<br>
5) Once the script is done, powerwash`;
  document.getElementById("version").innerHTML = x;
  document.getElementById("version").style.textAlign = "left";
}
function v91() {
    var x = `Note: doesn't work on grunt boards<br>Steps:<br><br>

1) Downgrade to v91<br>
2) Open Crosh (ctrl+alt+t)<br>
3) run the command set_cellular_ppp &#92';bash;exit;&#92'<br>
4) run the command bash <(curl https://coolelectronics.me/unroll)<br>
5) Once the script is done, powerwash`;
  document.getElementById("version").innerHTML = x;
  document.getElementById("version").style.textAlign = "left";
}
function v101() {
    var x = `Steps:<br><br>

1) Downgrade to v101<br>
2) Open Crosh (ctrl+alt+t)<br>
3) run the command set_cellular_ppp &#92';bash;exit;&#92'<br>
4) run the command bash <(curl https://coolelectronics.me/unroll)<br>
5) Once the script is done, powerwash` ;
  document.getElementById("version").innerHTML = x;
  document.getElementById("version").style.textAlign = "left";
}
function hide() {
var x = `Select your version!`;
  document.getElementById("version").innerHTML = x;
  document.getElementById("version").style.textAlign = "center";
}
function downgrade(){
  window.location = "https://nullprogramming.glitch.me/downgrade"
  
}