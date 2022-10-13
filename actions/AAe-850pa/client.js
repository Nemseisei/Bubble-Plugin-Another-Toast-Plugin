function(properties, context) {


   		Toastify({
            text: properties.text,
            duration: properties.duration,
            destination: properties.destination,
            newWindow: properties.new_window,
            gravity: properties.gravity,
            position: properties.position,
            close: properties.close,
            stopOnFocus: properties.stoponfocus,
            avatar: properties.avatar,
            style:{
                background: properties.backgroundcolor,
              
            }
         }).showToast();



}