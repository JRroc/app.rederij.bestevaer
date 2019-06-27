$( document ).ready(function() {
  $("#contactFrm").submit(function(event){
    event.preventDefault();
    berekenLading();
  })
});
function berekenLading()
{

  var bootMaxRuimte = 180000;
  var ws = document.getElementById("waterenStart");
  var WaterenStart = ws.options[ws.selectedIndex].value;
  //ladinginhoud
  var lading = document.getElementById('lading').value;
  var InhoudTotaal = bootMaxRuimte - lading;
  //gewicht
  var gewicht = document.getElementById('gewicht').value;

  var gewichtErbij = document.getElementById('gewichtErbij').value;
  var gewichtTotaal = gewicht + gewichtErbij;

  if (gewichtTotaal >= WaterenStart.value)
  {
    window.alert("Sorry dit is te veel gewicht")
  }

  if (gewicht < WaterenStart)
  {
    var gewichtdieerbijkan = WaterenStart - gewicht;
    document.getElementById("lbGewicht").innerHTML  = "Gewicht die erbij kan: " + gewichtdieerbijkan;

  }
  if (lading >= bootMaxRuimte )
  {
    window.alert("Sorry je inhoud is te hoog");
  }
  if (lading < bootMaxRuimte) {
    var InhoudTotaal = bootMaxRuimte - lading;
    document.getElementById("lbInhoud").innerHTML  = "Inhoud die erbij kan: " + InhoudTotaal;
  }
}
