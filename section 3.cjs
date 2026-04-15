const express= require("express");
const app=express();
const PORT=3000;

const fact=(n)=>{
if(n<0)
return "Factorial not defined for neg nos";
if(n===0 || n==1) return 1;
let result =1;
for( let i=2;i<=n; i++){
 result*=i;

}
return result;};
app.get("/factorial",(req,res)=>{
  const n= parseInt(req.params.num);
if(isNan(n)){
 return res.status(400).json({error:"invalid no"});
}
const result=fact(n);
console.log(result);
res.json({number:n,fact:result});
});
app.listen(PORT,()=>{
console.log("server running");

});