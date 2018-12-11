/*
 * the main Process of the app 
 */ 
//Destructuring modules 
let {
    devDep : { 
        electron : {app , BrowserWindow}  ,  
        BWC : {MainWindow , Url_view_file} , 
        path , url } , 
        puts_evts, 
        setImgLocation, getImgExt , 
        Implement_Path2URI , Auto_set , On_Production , Event_xtrat , 
} = require("./pirming") 

On_Production(true) 
Implement_Path2URI(Url_view_file)
setImgLocation("lg.png")

let  MainWin ; 

const  SysReport= {
   
    /**
     * build the main window 
     */ 
    [`CREATE_WINDOW_x${(()=> MainWindow.hight)()}`] () {
        MainWin = new BrowserWindow(MainWindow) 
        MainWin.loadURL(url.format(Url_view_file)) ; 
    } , 
    
    W_Quit() { MainWin = null } , 
    osx_closeWin () {
        if (process.platform != "darwin") app.quit()    
    } 
}  

Event_xtrat(Auto_set(SysReport)) 
