const useScript = (tabName) => {
    if (typeof window !== "undefined") {
        console.log("I am pressing the " + tabName + " button!")
        var i;
        var x = document.getElementsByClassName("tabname");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        document.getElementById(tabName).style.display = "block";
    }
}

export default useScript 