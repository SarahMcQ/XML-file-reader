let info = document.getElementById("info");
info.onkeyup = function () {
    let message = document.getElementById("info").value;
    document.getElementById("verify").innerText = message




    var parser, xmlDoc;
    var text = message;

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
    const entityID = (xmlDoc.getElementsByTagName("md:EntityDescriptor")[0].getAttribute("entityID"));
    const keyDescriptor = (xmlDoc.getElementsByTagName("md:KeyDescriptor")[0].getAttribute("use"));
    const X509Certificate = (xmlDoc.getElementsByTagName("X509Certificate")[0].innerHTML);
    const SSO = (xmlDoc.getElementsByTagName("md:SingleSignOnService")[0].getAttribute("Location"));


    document.getElementById("entityID").innerHTML = entityID;
    document.getElementById("keyDescriptor").innerHTML = keyDescriptor;
    document.getElementById("X509Cert").innerHTML = X509Certificate;
    document.getElementById("HTTP-Redirect").innerHTML = SSO;



};