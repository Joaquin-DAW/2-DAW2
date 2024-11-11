/*Desarrolla un programa en JavaScript para una aplicación de agenda de citas.
    Las citas guardarán la siguiente información, sala de tipo String y la fecha y hora de la cita de tipo Date.
    
    Tendrás una clase Cliente que contendrá los atributos Nombre, Apellidos, DNI, citas pendientes e historial de citas.
    
    Cuando el usuario utilice el programa prodrá agregar una nueva cita, dónde se agregrá la cita a las citas pendientes del cliente, 
    la cita añadida no puede ser anterior a la fecha actual. Un cliente no podrá tener más de una cita el mismo día.
    Además, el programa permitirá al usuario programar recordatorios para sus citas. Se utilizará setInterval para mostrar recordatorios de 
    las citas programadas. Para garantizar la eficiencia, el programa verificará las citas cada minuto. Actualizará las citas pendientes que 
    ya hayan pasado, quitándolas de esa lista de pendientes y pasándolas al historial de citas. Si se encuentra una cita para el día siguiente 
    al actual, se mostrará el recordatorio en una ventana emergente. Si cierras la ventana, esta deberá volver a aparecer hasta 3 veces y se parará.*/ 