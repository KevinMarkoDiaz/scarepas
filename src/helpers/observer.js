import { useEffect } from "react";

const useObserverHeader = () => {
    useEffect(() => {
      const options = {
        rootMargin: '70px',
        threshold: 1.0
      };
  
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
            // Verificar si el elemento está en la vista
            if (entry.isIntersecting) {
                console.log(entry.target)
                console.log(targetE2)
                targetE2.classList.add('-translate-y-48') 
                
                targetE2.classList.remove('fixed') 
                targetE2.classList.remove('top-0') 

                // Agregar la clase cuando el elemento está en la vista
                //   entry.target.classList.add('fixed');
            } else {
                targetE2.classList.add('fixed')
                targetE2.classList.add('top-0') 
                
                targetE2.classList.remove('-translate-y-48') 

                // Quitar la clase cuando el elemento no está en la vista
                // entry.target.classList.remove('fixed');
              
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
  
        const targetEl = document.getElementById('header');
      const targetE2 = document.getElementById('header2');
        
  
      if (targetEl) {
        observer.observe(targetEl);
      }
  
      // Devuelve la instancia del IntersectionObserver si deseas
      return () => {
        if (targetEl) {
          observer.unobserve(targetEl);
        }
      };
    }, []); // Ejecutar una vez al montar
  
    // Puedes devolver cualquier cosa que desees que el componente que use este hook pueda usar
    return null;
  };
  
  export default useObserverHeader;
  


