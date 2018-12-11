/**
 * author : jukoo <funscript@outlook.fr>
 */ 

document.getElementById("os").textContent +=` on ${process.platform}`
console.log(process.getSystemMemoryInfo(), process)
let Displayer = document.getElementById("out")
let makeList  = (props , version )=>  {
    let list = document.createElement("li")
    list.innerHTML=`<strong > ${props}</strong>  :<small> ${version} </small><br>`
    return list ; 
}
let _tmpl = (title, target) => {
    Displayer.innerHTML += `<h3>${title}<h3>  <ul id = ${target}>`
    return document.getElementById(target)        
}

const system = {
 
    Allowed_props  : new Set(["versions" , "getSystemMemoryInfo"]), 
    ["App_Version"] (props, title , target_id) {
            
            let uif = _tmpl(title , target_id)
            if (system.Allowed_props.has(props)) {
               const  parse_args = [...system.Allowed_props].indexOf(props) 
               let    respond_to = [...system.Allowed_props][parse_args] 
               if (respond_to == "versions") { 
               Object.entries(process["versions"])
               ["forEach"](([prop , version ]) => { 
                 uif.appendChild(makeList(prop, version))
               })
               uif.innerHTML+="</ul> <hr>"
               } else if (respond_to == "getSystemMemoryInfo") {
                Object.entries(process["getSystemMemoryInfo"]())
               ["forEach"](([prop , version ]) => { 
                 uif.appendChild(makeList(prop, version))
               })
               uif.innerHTML+="</ul> <hr>" 
               }
           }
    } 
}

system.App_Version("versions" ,"app Version", "apvers")
system.App_Version("getSystemMemoryInfo", " sysMemInf" , "osys")
