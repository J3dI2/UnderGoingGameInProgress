const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
/*
var BoneAttack = [];
var BoneAttackB = [];
var BoneAttackOl, = [];
var GasterBlaster = [];
var BigGasterBlaster = [];
var SkinnyGasterBlaster = [];
var THICKGasterBlaster = [];
var GasterBlasterB = [];
var BigGasterBlasterB = [];
var SkinnyGasterBlasterB = [];
var THICKGasterBlasterB = [];
var GasterBlasterO = [];
var BigGasterBlasterO = [];
var SkinnyGasterBlasterO = [];
var THICKGasterBlasterO = [];
*/
function preload(){

}

function setup(){
    var Canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background();
    Engine.update(engine);

}