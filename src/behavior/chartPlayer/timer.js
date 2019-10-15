const createTimer = (onTick, interval) => {
    let intervalid = null;

    const start = () => {
        intervalid = setInterval(() => {
            onTick();
        }, interval); //something wrong...
    };

    /*
        The stop function probably works wrong as it's not possible to continue from the same place.
        Anyway, as the functionality is encapsulated we can rewrite the module later on.
    */
    const stop = () => {
        clearInterval(intervalid); 
        intervalid = null;
    };

    const reset = () => {
        if(!intervalid)
            return;

        stop();
        start();
    };

    return { start, stop, reset };
};

export default createTimer;