camera = document.getElementById("camera")
 
Webcam.attach(camera)

Webcam.set({
    width:355,
    height:280,
    image_format: "png",
    png_quality: 100
})

function Click() {

    
    Webcam.snap(
        function (data_uri) {
            document.getElementById("result").innerHTML ='<img id = "takenimage" src = "'+data_uri+'">'
         
        }
    )
    
}

console.log("ML5 Version:" , ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ap8_zcXQa/model.json',modelLoaded)

function modelLoaded() {

}

function Check() {
img = document.getElementById("takenimage")
classifier.classify(img, gotResult)
}

function gotResult(error , results) {
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("object_recognizedas").innerHTML = results[0].label
        document.getElementById("object_accuracyofrecog").innerHTML = Math.floor(results[0].confidence*100) +"%" 
        
    }
} 