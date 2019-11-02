let info = document.getElementById("info");

 

info.onkeyup = function () {

 

    let message = document.getElementById("info").value;

 

    document.getElementById("verify").innerText = message

 

    var parser, xmlDoc;

 

    var text = message;

 

    parser = new DOMParser();

 

    xmlDoc = parser.parseFromString(text, "text/xml");

 

    //Find Entity ID

   

    let EntityDescriptor = xmlDoc.getElementsByTagName("EntityDescriptor");

 

    let mdEntityDescriptor = xmlDoc.getElementsByTagName("md:EntityDescriptor");

    

 

    mdEntityDescriptor.length > 0 ? entityID = (xmlDoc.getElementsByTagName("md:EntityDescriptor")[0].getAttribute("entityID"))

    : EntityDescriptor.length > 0 ? entityID = (xmlDoc.getElementsByTagName("EntityDescriptor")[0].getAttribute("entityID"))

    : console.log('Entity Descriptor not found');

    

 

    //Find X509 Cert

 

    let dsX509Certificate = xmlDoc.getElementsByTagName("ds:X509Certificate");

    let X509Cert = xmlDoc.getElementsByTagName("X509Certificate");

 

    dsX509Certificate.length > 0 ? X509Certificate = (xmlDoc.getElementsByTagName("ds:X509Certificate")[0].innerHTML)

    : X509Cert.length > 0 ? X509Certificate = (xmlDoc.getElementsByTagName("X509Certificate")[0].innerHTML)

    : console.log('Cert not found');

    

 

    //Find HTTP Endpoint

 

    let mdSingleSignOnService = xmlDoc.getElementsByTagName("md:SingleSignOnService");

    let SingleLogoutService = xmlDoc.getElementsByTagName("SingleLogoutService");

 

    

    mdSingleSignOnService.length > 0 ? SSO = (xmlDoc.getElementsByTagName("md:SingleSignOnService")[0].getAttribute("Location"))

    : SingleLogoutService.length > 0 ? SSO = (xmlDoc.getElementsByTagName("SingleLogoutService")[0].getAttribute("Location"))

    : console.log('HTTP redirect not found');

    

 

    

    // Display results

 

    document.getElementById("entityID").innerHTML = entityID;

 

    document.getElementById("X509Cert").innerHTML = X509Certificate;

 

    document.getElementById("HTTP-Redirect").innerHTML = SSO;




};


