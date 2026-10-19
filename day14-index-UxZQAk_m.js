const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./day14-browserAll-nRkPh9k1.js","./day14-Geometry-C6YPrSCA.js","./day14-init-CIrqQUQk.js","./day14-canvasUtils-DrQAc4OM.js","./day14-init-BqUM83hu.js","./day14-CanvasPool-CQwI9KhE.js","./day14-webworkerAll-C7RogllN.js","./day14-WebGPURenderer-laDlq3oQ.js","./day14-WebGPURenderer-C6C-26oP.js","./day14-RenderTargetSystem-DBt2SuAU.js","./day14-getTextureBatchBindGroup-BCJzrx6a.js","./day14-BufferResource-CjIMPJHW.js","./day14-WebGLRenderer-jhIlLloq.js","./day14-WebGLRenderer-CAL8a8Ru.js","./day14-CanvasRenderer-BDd7rZ3n.js","./day14-CanvasRenderer-BasnBddd.js"])))=>i.map(i=>d[i]);
import{$ as e,B as t,D as n,J as r,R as i,S as a,W as o,Z as s,_ as c,a as l,b as u,d,f,g as p,h as m,i as h,l as g,n as _,nt as v,o as y,q as b,r as x,rt as S,s as C,t as w,u as T,v as E,w as D,x as O,y as k,z as A}from"./day14-Geometry-C6YPrSCA.js";import"./day14-init-CIrqQUQk.js";import{r as ee,t as j}from"./day14-canvasUtils-DrQAc4OM.js";import{D as M,O as te,d as ne,f as re,i as ie,k as ae,w as oe}from"./day14-RenderTargetSystem-DBt2SuAU.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var se={kind:`vfx-effect`,version:1,generatedAt:`2026-10-19T10:05:22.496Z`,id:`exhaust`,name:`exhaust`,timeline:{frameRate:30,duration:10,loop:{enabled:!1,start:.27599999999999997,end:1.426},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`exhaust.json`,sourceEffectId:`exhaust`,sourceHash:`fnv1a32:6b98b801`,emitters:[{id:`exhaust-emitter`,name:`exhaust`,enabled:!0,mode:`billboard`,maxParticles:80,duration:10,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:80,rateValue:{mode:`constant`,value:80,min:80,max:80,curve:[{x:0,y:80},{x:1,y:80}],curveB:[{x:0,y:80},{x:1,y:80}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[.1,.1,.01],angle:25,radiusThickness:0,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`world`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:.65,min:.65,max:.65,curve:[{x:0,y:.65},{x:1,y:.65}],curveB:[{x:0,y:.65},{x:1,y:.65}]},color:{mode:`constant`,color:[.3,.75,1,.8],colorB:[.3,.75,1,.8],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.1,min:.1,max:.1,curve:[{x:0,y:.1},{x:1,y:.1}],curveB:[{x:0,y:.1},{x:1,y:.1}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-.08,-.08,-2],max:[.08,.08,-1.6],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.1,sizeEnd:.1,sizeValue:{mode:`constant`,value:.1,min:.1,max:.1,curve:[{x:0,y:.1},{x:1,y:.1}],curveB:[{x:0,y:.1},{x:1,y:.1}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.3,.75,1,0],end:[.3,.75,1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.3,.75,1]},{position:1,color:[.3,.75,1]}],alphaStops:[{position:0,alpha:0},{position:.12,alpha:.8},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},ce={kind:`vfx-effect`,version:1,generatedAt:`2026-10-19T10:05:22.496Z`,id:`heal`,name:`heal`,timeline:{frameRate:30,duration:1.2,loop:{enabled:!1,start:.27599999999999997,end:1.2},groups:[]},targetProfile:`portable`,sourceEffectFile:`heal.json`,sourceEffectId:`heal`,sourceHash:`fnv1a32:a49e95fa`,emitters:[{id:`heal-emitter`,name:`heal`,enabled:!0,mode:`billboard`,maxParticles:32,duration:.05,loop:!1,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:0,rateValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[{time:0,count:32,cycles:1,interval:0,probability:1}],shape:`circle`,radius:.75,radiusValue:{mode:`constant`,value:.75,min:.75,max:.75,curve:[{x:0,y:.75},{x:1,y:.75}],curveB:[{x:0,y:.75},{x:1,y:.75}]},box:[0,0,0],angle:25,radiusThickness:0,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[90,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:.8,min:.8,max:.8,curve:[{x:0,y:.8},{x:1,y:.8}],curveB:[{x:0,y:.8},{x:1,y:.8}]},color:{mode:`constant`,color:[.2,1,.55,.9],colorB:[.2,1,.55,.9],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.12,min:.12,max:.12,curve:[{x:0,y:.12},{x:1,y:.12}],curveB:[{x:0,y:.12},{x:1,y:.12}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[0,0,0],max:[0,0,0],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!1,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.12,sizeEnd:.12,sizeValue:{mode:`constant`,value:.12,min:.12,max:.12,curve:[{x:0,y:.12},{x:1,y:.12}],curveB:[{x:0,y:.12},{x:1,y:.12}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.2,1,.55,0],end:[.2,1,.55,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.2,1,.55]},{position:1,color:[.2,1,.55]}],alphaStops:[{position:0,alpha:0},{position:.12,alpha:.9},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`portable`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[]}},le={kind:`vfx-effect`,version:1,generatedAt:`2026-10-19T10:05:22.496Z`,id:`mist`,name:`mist`,timeline:{frameRate:30,duration:10,loop:{enabled:!1,start:.27599999999999997,end:1.426},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`mist.json`,sourceEffectId:`mist`,sourceHash:`fnv1a32:7e165488`,emitters:[{id:`mist-emitter`,name:`mist`,enabled:!0,mode:`billboard`,maxParticles:64,duration:10,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:24,rateValue:{mode:`constant`,value:24,min:24,max:24,curve:[{x:0,y:24},{x:1,y:24}],curveB:[{x:0,y:24},{x:1,y:24}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[1.2,.05,.25],angle:25,radiusThickness:0,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:2,min:2,max:2,curve:[{x:0,y:2},{x:1,y:2}],curveB:[{x:0,y:2},{x:1,y:2}]},color:{mode:`constant`,color:[.7,.85,1,.28],colorB:[.7,.85,1,.28],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.22,min:.22,max:.22,curve:[{x:0,y:.22},{x:1,y:.22}],curveB:[{x:0,y:.22},{x:1,y:.22}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-.15,.15,-.08],max:[.15,.35,.08],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.22,sizeEnd:.22,sizeValue:{mode:`constant`,value:.22,min:.22,max:.22,curve:[{x:0,y:.22},{x:1,y:.22}],curveB:[{x:0,y:.22},{x:1,y:.22}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.7,.85,1,0],end:[.7,.85,1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.7,.85,1]},{position:1,color:[.7,.85,1]}],alphaStops:[{position:0,alpha:0},{position:.12,alpha:.28},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},ue={kind:`vfx-effect`,version:1,generatedAt:`2026-10-19T10:05:22.496Z`,id:`portal`,name:`portal`,timeline:{frameRate:30,duration:10,loop:{enabled:!1,start:.27599999999999997,end:1.426},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`portal.json`,sourceEffectId:`portal`,sourceHash:`fnv1a32:49c96381`,emitters:[{id:`portal-emitter`,name:`portal`,enabled:!0,mode:`billboard`,maxParticles:96,duration:10,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!0,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:48,rateValue:{mode:`constant`,value:48,min:48,max:48,curve:[{x:0,y:48},{x:1,y:48}],curveB:[{x:0,y:48},{x:1,y:48}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[],shape:`circle`,radius:1,radiusValue:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},box:[0,0,0],angle:25,radiusThickness:0,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[90,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:1.5,min:1.5,max:1.5,curve:[{x:0,y:1.5},{x:1,y:1.5}],curveB:[{x:0,y:1.5},{x:1,y:1.5}]},color:{mode:`constant`,color:[.65,.8,1,1],colorB:[.65,.8,1,1],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.1,min:.1,max:.1,curve:[{x:0,y:.1},{x:1,y:.1}],curveB:[{x:0,y:.1},{x:1,y:.1}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[0,0,0],max:[0,0,0],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.1,sizeEnd:.1,sizeValue:{mode:`constant`,value:.1,min:.1,max:.1,curve:[{x:0,y:.1},{x:1,y:.1}],curveB:[{x:0,y:.1},{x:1,y:.1}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.65,.8,1,0],end:[.65,.8,1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.65,.8,1]},{position:1,color:[.65,.8,1]}],alphaStops:[{position:0,alpha:0},{position:.12,alpha:1},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`world`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:2.4,min:2.4,max:2.4,curve:[{x:0,y:2.4},{x:1,y:2.4}],curveB:[{x:0,y:2.4},{x:1,y:2.4}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:-.2,min:-.2,max:-.2,curve:[{x:0,y:-.2},{x:1,y:-.2}],curveB:[{x:0,y:-.2},{x:1,y:-.2}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},N=1e3,de=1001,fe=1002,pe=1003,me=1004,he=1005,ge=1006,_e=1007,ve=1008,ye=1009,be=1010,xe=1011,Se=1012,Ce=1013,we=1014,Te=1015,Ee=1016,De=1017,Oe=1018,ke=1020,Ae=35902,je=35899,P=1021,Me=1022,Ne=1023,Pe=1026,F=1027,Fe=1028,Ie=1029,I=1030,Le=1031,Re=1033,L=33776,ze=33777,Be=33778,Ve=33779,He=35840,Ue=35841,We=35842,Ge=35843,Ke=36196,qe=37492,Je=37496,Ye=37488,Xe=37489,Ze=37490,Qe=37491,$e=37808,et=37809,tt=37810,nt=37811,R=37812,rt=37813,it=37814,at=37815,ot=37816,st=37817,ct=37818,lt=37819,ut=37820,dt=37821,ft=36492,pt=36494,mt=36495,ht=36283,gt=36284,_t=36285,vt=36286,yt=2300,bt=2301,xt=2302,St=2303,Ct=2400,wt=2401,Tt=2402,Et=3200,Dt=`srgb`,Ot=`srgb-linear`,kt=`linear`,At=`srgb`,jt=7680,Mt=35044,Nt=35048,Pt=2e3;function Ft(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function It(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Lt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Rt(){let e=Lt(`canvas`);return e.style.display=`block`,e}var zt={};function Bt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Vt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Vt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Vt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ht(...e){let t=e.join(` `);t in zt||(zt[t]=!0,z(...e))}function Ut(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Wt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Gt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Kt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),qt=Math.PI/180,Jt=180/Math.PI;function Yt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kt[e&255]+Kt[e>>8&255]+Kt[e>>16&255]+Kt[e>>24&255]+`-`+Kt[t&255]+Kt[t>>8&255]+`-`+Kt[t>>16&15|64]+Kt[t>>24&255]+`-`+Kt[n&63|128]+Kt[n>>8&255]+`-`+Kt[n>>16&255]+Kt[n>>24&255]+Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function Xt(e,t){return(e%t+t)%t}function Zt(e,t,n){return(1-n)*e+n*t}function Qt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function $t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var en=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nn.copy(this).projectOnVector(e),this.sub(nn)}reflect(e){return this.sub(nn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nn=new H,rn=new tn,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ht(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(an.makeScale(e,t)),this}rotate(e){return Ht(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(an.makeRotation(-e)),this}translate(e,t){return Ht(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(an.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},an=new U,on=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sn=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cn(){let e={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=un(e.r),e.g=un(e.g),e.b=un(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=dn(e.r),e.g=dn(e.g),e.b=dn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?kt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ht(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ht(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ot]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:on,fromXYZ:sn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:t,whitePoint:r,transfer:At,toXYZ:on,fromXYZ:sn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),e}var ln=cn();function un(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function dn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var fn,pn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fn===void 0&&(fn=Lt(`canvas`)),fn.width=e.width,fn.height=e.height;let t=fn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=fn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Lt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=un(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(un(t[e]/255)*255):t[e]=un(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},mn=0,hn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=Yt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(gn(r[t].image)):e.push(gn(r[t]))}else e=gn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function gn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?pn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var _n=0,vn=new H,yn=class e extends Gt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=de,i=de,a=ge,o=ve,s=Ne,c=ye,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_n++}),this.uuid=Yt(),this.name=``,this.source=new hn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new en(0,0),this.repeat=new en(1,1),this.center=new en(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vn).x}get height(){return this.source.getSize(vn).y}get depth(){return this.source.getSize(vn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case N:e.x-=Math.floor(e.x);break;case de:e.x=e.x<0?0:1;break;case fe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case N:e.y-=Math.floor(e.y);break;case de:e.y=e.y<0?0:1;break;case fe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null,yn.DEFAULT_MAPPING=300,yn.DEFAULT_ANISOTROPY=1;var bn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xn=class extends Gt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bn(0,0,e,t),this.scissorTest=!1,this.viewport=new bn(0,0,e,t),this.textures=[];let r=new yn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ge,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new hn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Sn=class extends xn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cn=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=de,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},wn=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=de,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/En.setFromMatrixColumn(e,0).length(),i=1/En.setFromMatrixColumn(e,1).length(),a=1/En.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(On,e,kn)}lookAt(e,t,n){let r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),An.crossVectors(n,Mn),An.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),An.crossVectors(n,Mn)),An.normalize(),jn.crossVectors(Mn,An),r[0]=An.x,r[4]=jn.x,r[8]=Mn.x,r[1]=An.y,r[5]=jn.y,r[9]=Mn.y,r[2]=An.z,r[6]=jn.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=En.set(r[0],r[1],r[2]).length(),o=En.set(r[4],r[5],r[6]).length(),s=En.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Dn.copy(this);let c=1/a,l=1/o,u=1/s;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=l,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Pt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Pt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},En=new H,Dn=new Tn,On=new H(0,0,0),kn=new H(1,1,1),An=new H,jn=new H,Mn=new H,Nn=new Tn,Pn=new tn,Fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pn.setFromEuler(this),this.setFromQuaternion(Pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER=`XYZ`;var In=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ln=0,Rn=new H,zn=new tn,Bn=new Tn,Vn=new H,Hn=new H,Un=new H,Wn=new tn,Gn=new H(1,0,0),Kn=new H(0,1,0),qn=new H(0,0,1),Jn={type:`added`},Yn={type:`removed`},Xn={type:`childadded`,child:null},Zn={type:`childremoved`,child:null},Qn=class e extends Gt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ln++}),this.uuid=Yt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Fn,r=new tn,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tn},normalMatrix:{value:new U}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new In,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Gn,e)}rotateY(e){return this.rotateOnAxis(Kn,e)}rotateZ(e){return this.rotateOnAxis(qn,e)}translateOnAxis(e,t){return Rn.copy(e).applyQuaternion(this.quaternion),this.position.add(Rn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gn,e)}translateY(e){return this.translateOnAxis(Kn,e)}translateZ(e){return this.translateOnAxis(qn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vn.copy(e):Vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Hn,Vn,this.up):Bn.lookAt(Vn,Hn,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),zn.setFromRotationMatrix(Bn),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jn),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yn),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jn),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,e,Un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,Wn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Qn.DEFAULT_UP=new H(0,1,0),Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=class extends Qn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},er={type:`move`},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(er)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},ir={h:0,s:0,l:0};function ar(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ln.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,ln.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ln.workingColorSpace){if(e=Xt(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ar(i,r,e+1/3),this.g=ar(i,r,e),this.b=ar(i,r,e-1/3)}return ln.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=nr[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}copyLinearToSRGB(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ln.workingToColorSpace(or.copy(this),e),Math.round(V(or.r*255,0,255))*65536+Math.round(V(or.g*255,0,255))*256+Math.round(V(or.b*255,0,255))}getHexString(e=Dt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ln.workingColorSpace){ln.workingToColorSpace(or.copy(this),t);let n=or.r,r=or.g,i=or.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=ln.workingColorSpace){return ln.workingToColorSpace(or.copy(this),t),e.r=or.r,e.g=or.g,e.b=or.b,e}getStyle(e=Dt){ln.workingToColorSpace(or.copy(this),e);let t=or.r,n=or.g,r=or.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(ir);let n=Zt(rr.h,ir.h,t),r=Zt(rr.s,ir.s,t),i=Zt(rr.l,ir.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},or=new W;W.NAMES=nr;var sr=class extends Qn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},cr=new H,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new bn,yr=new bn,br=new bn,xr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cr.subVectors(e,t),r.cross(cr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){cr.subVectors(r,t),lr.subVectors(n,t),ur.subVectors(e,t);let a=cr.dot(cr),o=cr.dot(lr),s=cr.dot(ur),c=lr.dot(lr),l=lr.dot(ur),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dr)!==null&&dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,dr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,dr.x),s.addScaledVector(a,dr.y),s.addScaledVector(o,dr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return vr.setScalar(0),yr.setScalar(0),br.setScalar(0),vr.fromBufferAttribute(e,t),yr.fromBufferAttribute(e,n),br.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vr,i.x),a.addScaledVector(yr,i.y),a.addScaledVector(br,i.z),a}static isFrontFacing(e,t,n,r){return cr.subVectors(n,t),lr.subVectors(e,t),cr.cross(lr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),cr.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;fr.subVectors(r,n),pr.subVectors(i,n),hr.subVectors(e,n);let s=fr.dot(hr),c=pr.dot(hr);if(s<=0&&c<=0)return t.copy(n);gr.subVectors(e,r);let l=fr.dot(gr),u=pr.dot(gr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(fr,a);_r.subVectors(e,i);let f=fr.dot(_r),p=pr.dot(_r);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(pr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return mr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(mr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,wr):wr.fromBufferAttribute(r,t),wr.applyMatrix4(e.matrixWorld),this.expandByPoint(wr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Nr.subVectors(this.max,Mr),Er.subVectors(e.a,Mr),Dr.subVectors(e.b,Mr),Or.subVectors(e.c,Mr),kr.subVectors(Dr,Er),Ar.subVectors(Or,Dr),jr.subVectors(Er,Or);let t=[0,-kr.z,kr.y,0,-Ar.z,Ar.y,0,-jr.z,jr.y,kr.z,0,-kr.x,Ar.z,0,-Ar.x,jr.z,0,-jr.x,-kr.y,kr.x,0,-Ar.y,Ar.x,0,-jr.y,jr.x,0];return!Ir(t,Er,Dr,Or,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,Er,Dr,Or,Nr))?!1:(Pr.crossVectors(kr,Ar),t=[Pr.x,Pr.y,Pr.z],Ir(t,Er,Dr,Or,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cr=[new H,new H,new H,new H,new H,new H,new H,new H],wr=new H,Tr=new Sr,Er=new H,Dr=new H,Or=new H,kr=new H,Ar=new H,jr=new H,Mr=new H,Nr=new H,Pr=new H,Fr=new H;function Ir(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Fr.fromArray(e,a);let o=i.x*Math.abs(Fr.x)+i.y*Math.abs(Fr.y)+i.z*Math.abs(Fr.z),s=t.dot(Fr),c=n.dot(Fr),l=r.dot(Fr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Lr=new H,Rr=new en,zr=0,Br=class extends Gt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Mt,this.updateRanges=[],this.gpuType=Te,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix4(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyNormalMatrix(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.transformDirection(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Vr=class extends Br{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Hr=class extends Br{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ur=class extends Br{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wr=new Sr,Gr=new H,Kr=new H,qr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Wr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Gr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Kr)),this.expandByPoint(Gr.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jr=0,Yr=new Tn,Xr=new Qn,Zr=new H,Qr=new Sr,$r=new Sr,ei=new H,ti=class e extends Gt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jr++}),this.uuid=Yt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ft(e)?Hr:Vr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yr.makeRotationFromQuaternion(e),this.applyMatrix4(Yr),this}rotateX(e){return Yr.makeRotationX(e),this.applyMatrix4(Yr),this}rotateY(e){return Yr.makeRotationY(e),this.applyMatrix4(Yr),this}rotateZ(e){return Yr.makeRotationZ(e),this.applyMatrix4(Yr),this}translate(e,t,n){return Yr.makeTranslation(e,t,n),this.applyMatrix4(Yr),this}scale(e,t,n){return Yr.makeScale(e,t,n),this.applyMatrix4(Yr),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ur(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qr.setFromBufferAttribute(n),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Qr.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Qr.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Qr.min),this.boundingBox.expandByPoint(Qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$r.setFromBufferAttribute(n),this.morphTargetsRelative?(ei.addVectors(Qr.min,$r.min),Qr.expandByPoint(ei),ei.addVectors(Qr.max,$r.max),Qr.expandByPoint(ei)):(Qr.expandByPoint($r.min),Qr.expandByPoint($r.max))}Qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ei.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ei));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ei.fromBufferAttribute(a,t),o&&(Zr.fromBufferAttribute(e,t),ei.add(Zr)),r=Math.max(r,n.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Br(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new en,f=new en,p=new en,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Br(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ei.fromBufferAttribute(e,t),ei.normalize(),e.setXYZ(t,ei.x,ei.y,ei.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Br(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ni=0,ri=class extends Gt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ni++}),this.uuid=Yt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jt,this.stencilZFail=jt,this.stencilZPass=jt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new en().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new en().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ii=new H,ai=new H,oi=new H,si=new H,ci=new H,li=new H,ui=new H,di=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ai.copy(e).add(t).multiplyScalar(.5),oi.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ai);let i=e.distanceTo(t)*.5,a=-this.direction.dot(oi),o=si.dot(this.direction),s=-si.dot(oi),c=si.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ai).addScaledVector(oi,d),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),r=ii.dot(ii)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,r,i){ci.subVectors(t,e),li.subVectors(n,e),ui.crossVectors(ci,li);let a=this.direction.dot(ui),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);let s=o*this.direction.dot(li.crossVectors(si,li));if(s<0)return null;let c=o*this.direction.dot(ci.cross(si));if(c<0||s+c>a)return null;let l=-o*si.dot(ui);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=new Tn,mi=new di,hi=new qr,gi=new H,_i=new H,vi=new H,yi=new H,bi=new H,xi=new H,Si=new H,Ci=new H,wi=class extends Qn{constructor(e=new ti,t=new fi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(bi.fromBufferAttribute(s,e),a?xi.addScaledVector(bi,r):xi.addScaledVector(bi.sub(t),r))}t.add(xi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),mi.copy(e.ray).recast(e.near),!(hi.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hi,gi)===null||mi.origin.distanceToSquared(gi)>(e.far-e.near)**2))&&(pi.copy(i).invert(),mi.copy(e.ray).applyMatrix4(pi),(n.boundingBox===null||mi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ei(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ei(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ei(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ei(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ci.copy(s),Ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ci);return l<n.near||l>n.far?null:{distance:l,point:Ci.clone(),object:e}}function Ei(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_i),e.getVertexPosition(c,vi),e.getVertexPosition(l,yi);let u=Ti(e,t,n,r,_i,vi,yi,Si);if(u){let e=new H;xr.getBarycoord(Si,_i,vi,yi,e),i&&(u.uv=xr.getInterpolatedAttribute(i,s,c,l,e,new en)),a&&(u.uv1=xr.getInterpolatedAttribute(a,s,c,l,e,new en)),o&&(u.normal=xr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};xr.getNormal(_i,vi,yi,t.normal),u.face=t,u.barycoord=e}return u}var Di=class extends yn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=pe,l=pe,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oi=class extends Br{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ki=new Tn,Ai=new Tn,ji=[],Mi=new Sr,Ni=new Tn,Pi=new wi,Fi=new qr,Ii=class extends wi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ni)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Mi.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Mi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Fi.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ki),Ai.multiplyMatrices(n,ki),Pi.matrixWorld=Ai,Pi.raycast(e,ji);for(let e=0,n=ji.length;e<n;e++){let n=ji[e];n.instanceId=i,n.object=this,t.push(n)}ji.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(r*this.count),r,this.count,Fe,Te));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new H,Ri=new H,zi=new U,Bi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Li.subVectors(n,t).cross(Ri.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Li),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zi.getNormalMatrix(e),r=this.coplanarPoint(Li).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new qr,Hi=new en(.5,.5),Ui=new H,Wi=class{constructor(e=new Bi,t=new Bi,n=new Bi,r=new Bi,i=new Bi,a=new Bi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476+Hi.distanceTo(e.center),Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ui.x=r.normal.x>0?e.max.x:e.min.x,Ui.y=r.normal.y>0?e.max.y:e.min.y,Ui.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ui)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gi=class extends yn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ki=class extends yn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qi=class extends yn{constructor(e,t,n=we,r,i,a,o=pe,s=pe,c,l=Pe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ji=class extends qi{constructor(e,t=we,n=301,r,i,a=pe,o=pe,s,c=Pe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yi=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class e extends ti{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ur(c,3)),this.setAttribute(`normal`,new Ur(l,3)),this.setAttribute(`uv`,new Ur(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zi=class e extends ti{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ur(p,3)),this.setAttribute(`normal`,new Ur(m,3)),this.setAttribute(`uv`,new Ur(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Qi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ea(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ea(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function $i(e){let t={};for(let n=0;n<e.length;n++){let r=Qi(e[n]);for(let e in r)t[e]=r[e]}return t}function ea(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ta(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function na(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ln.workingColorSpace}var ra={clone:Qi,merge:$i},ia=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oa=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ia,this.fragmentShader=aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=ta(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new en().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new bn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sa=class extends oa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ca=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new en(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Et,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function da(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var fa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},pa=class extends fa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ct,endingEnd:Ct}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case wt:i=e,o=2*t-n;break;case Tt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case wt:a=e,s=2*n-t;break;case Tt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ma=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ha=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ga=class extends fa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},_a=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yt:t=this.InterpolantFactoryMethodDiscrete;break;case bt:t=this.InterpolantFactoryMethodLinear;break;case xt:t=this.InterpolantFactoryMethodSmooth;break;case St:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yt;case this.InterpolantFactoryMethodLinear:return bt;case this.InterpolantFactoryMethodSmooth:return xt;case this.InterpolantFactoryMethodBezier:return St}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&It(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_a.prototype.ValueTypeName=``,_a.prototype.TimeBufferType=Float32Array,_a.prototype.ValueBufferType=Float32Array,_a.prototype.DefaultInterpolation=bt;var va=class extends _a{constructor(e,t,n){super(e,t,n)}};va.prototype.ValueTypeName=`bool`,va.prototype.ValueBufferType=Array,va.prototype.DefaultInterpolation=yt,va.prototype.InterpolantFactoryMethodLinear=void 0,va.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName=`color`;var ba=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`number`;var xa=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)tn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Sa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName=`quaternion`,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends _a{constructor(e,t,n){super(e,t,n)}};Ca.prototype.ValueTypeName=`string`,Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=yt,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`vector`;var Ta=new H,Ea=new tn,Da=new H,Oa=class extends Qn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=Pt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ta,Ea,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Da.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ta,Ea,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ka=new H,Aa=new en,ja=new en,Ma=class extends Oa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jt*2*Math.atan(Math.tan(qt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,t){return this.getViewBounds(e,Aa,ja),t.subVectors(ja,Aa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Na=class extends Oa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pa=-90,Fa=1,Ia=class extends Qn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ma(Pa,Fa,e,t);r.layers=this.layers,this.add(r);let i=new Ma(Pa,Fa,e,t);i.layers=this.layers,this.add(i);let a=new Ma(Pa,Fa,e,t);a.layers=this.layers,this.add(a);let o=new Ma(Pa,Fa,e,t);o.layers=this.layers,this.add(o);let s=new Ma(Pa,Fa,e,t);s.layers=this.layers,this.add(s);let c=new Ma(Pa,Fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},La=class extends Ma{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ra=`\\[\\]\\.:\\/`,za=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ba=`[^\\[\\]\\.:\\/]`,Va=`[^`+Ra.replace(`\\.`,``)+`]`,Ha=`((?:WC+[\\/:])*)`.replace(`WC`,Ba),Ua=`(WCOD+)?`.replace(`WCOD`,Va),Wa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ba),Ga=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ba),Ka=RegExp(`^`+Ha+Ua+Wa+Ga+`$`),qa=[`material`,`materials`,`bones`,`map`],Ja=class{constructor(e,t,n){let r=n||Ya.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ya=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(za,``)}static parseTrackName(e){let t=Ka.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ya.Composite=Ja,Ya.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ya.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ya.prototype.GetterByBindingType=[Ya.prototype._getValue_direct,Ya.prototype._getValue_array,Ya.prototype._getValue_arrayElement,Ya.prototype._getValue_toArray],Ya.prototype.SetterByBindingTypeAndVersioning=[[Ya.prototype._setValue_direct,Ya.prototype._setValue_direct_setNeedsUpdate,Ya.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_array,Ya.prototype._setValue_array_setNeedsUpdate,Ya.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_arrayElement,Ya.prototype._setValue_arrayElement_setNeedsUpdate,Ya.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ya.prototype._setValue_fromArray,Ya.prototype._setValue_fromArray_setNeedsUpdate,Ya.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Xa(e,t,n,r){let i=Za(r);switch(n){case P:return e*t;case Fe:return e*t/i.components*i.byteLength;case Ie:return e*t/i.components*i.byteLength;case I:return e*t*2/i.components*i.byteLength;case Le:return e*t*2/i.components*i.byteLength;case Me:return e*t*3/i.components*i.byteLength;case Ne:return e*t*4/i.components*i.byteLength;case Re:return e*t*4/i.components*i.byteLength;case L:case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Be:case Ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ue:case Ge:return Math.max(e,16)*Math.max(t,8)/4;case He:case We:return Math.max(e,8)*Math.max(t,8)/2;case Ke:case qe:case Ye:case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Je:case Ze:case Qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case et:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case tt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case nt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case R:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case rt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case it:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case at:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ot:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case st:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ct:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case lt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ut:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case dt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ft:case pt:case mt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ht:case gt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case _t:case vt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Za(e){switch(e){case ye:case be:return{byteLength:1,components:1};case Se:case xe:case Ee:return{byteLength:2,components:1};case De:case Oe:return{byteLength:2,components:4};case we:case Ce:case Te:return{byteLength:4,components:1};case Ae:case je:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Qa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $a(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new en(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new en(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},eo={basic:{uniforms:$i([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:$i([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:$i([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:$i([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:$i([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:$i([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:$i([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:$i([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:$i([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:$i([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:$i([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:$i([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:$i([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};eo.physical={uniforms:$i([eo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new en(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new en},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new en},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var to={r:0,b:0,g:0},no=new Tn,ro=new U;ro.set(-1,0,0,0,1,0,0,0,1);function io(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new wi(new Xi(1,1,1),new oa({name:`BackgroundCubeMaterial`,uniforms:Qi(eo.backgroundCube.uniforms),vertexShader:eo.backgroundCube.vertexShader,fragmentShader:eo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(no.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ro),l.material.toneMapped=ln.getTransfer(i.colorSpace)!==At,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new wi(new Zi(2,2),new oa({name:`BackgroundMaterial`,uniforms:Qi(eo.background.uniforms),vertexShader:eo.background.vertexShader,fragmentShader:eo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ln.getTransfer(i.colorSpace)!==At,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(to,na(e)),n.buffers.color.setClear(to.r,to.g,to.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ao(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function oo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function so(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function co(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Bi,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var lo=4,uo=[.125,.215,.35,.446,.526,.582],fo=20,po=256,mo=new Na,ho=new W,go=null,_o=0,vo=0,yo=!1,bo=new H,xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=bo}=i;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=yo,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:Ee,format:Ne,colorSpace:Ot,depthBuffer:!1},r=Co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=So(r)),this._blurMaterial=Eo(r,e,t),this._ggxMaterial=To(r,e,t)}return r}_compileMaterial(e){let t=new wi(new ti,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,r,i){let a=new Ma(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ho),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new Xi,new fi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ho),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;wo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;wo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-lo?n-d+lo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,wo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,mo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,wo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,mo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):fo;m>fo&&z(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fo}`);let h=[],g=0;for(let e=0;e<fo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];wo(t,3*v*(r>_-lo?r-_+lo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,mo)}};function So(e){let t=[],n=[],r=[],i=e,a=e-lo+1+uo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-lo?s=uo[o-e+lo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ti;h.setAttribute(`position`,new Br(f,3)),h.setAttribute(`uv`,new Br(p,2)),h.setAttribute(`faceIndex`,new Br(m,1)),r.push(new wi(h,null)),i>lo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Co(e,t,n){let r=new Sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function wo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function To(e,t,n){return new oa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eo(e,t,n){let r=new Float32Array(fo),i=new H(0,1,0);return new oa({name:`SphericalGaussianBlur`,defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Do(){return new oa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oo(){return new oa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Gi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),i=new oa({name:`CubemapFromEquirect`,uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new wi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ge),new Ia(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function jo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ao(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new xo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new xo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ht(`WebGLRenderer: `+e+` extension not supported.`),t}}}function No(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Hr:Vr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Po(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Io(e,t,n){let r=new WeakMap,i=new bn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Cn(h,p,m,u);g.type=Te,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new en(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ro={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zo(e,t,n,r,i,a){let o=new Sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new qi(t,n):void 0}),s=new Sn(t,n,{type:Ee,depthBuffer:!1,stencilBuffer:!1}),c=new ti;c.setAttribute(`position`,new Ur([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new Ur([0,2,0,0,2,0],2));let l=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wi(c,l),d=new Na(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},ln.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Ro[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Bo=new yn,Vo=new qi(1,1),Ho=new Cn,Uo=new wn,Wo=new Gi,Go=[],Ko=[],qo=new Float32Array(16),Jo=new Float32Array(9),Yo=new Float32Array(4);function Xo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Go[i];if(a===void 0&&(a=new Float32Array(i),Go[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $o(e,t){let n=Ko[t];n===void 0&&(n=new Int32Array(t),Ko[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2fv(this.addr,t),Qo(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zo(n,t))return;e.uniform3fv(this.addr,t),Qo(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4fv(this.addr,t),Qo(n,t)}}function is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;Yo.set(r),e.uniformMatrix2fv(this.addr,!1,Yo),Qo(n,r)}}function as(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;Jo.set(r),e.uniformMatrix3fv(this.addr,!1,Jo),Qo(n,r)}}function os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;qo.set(r),e.uniformMatrix4fv(this.addr,!1,qo),Qo(n,r)}}function ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2iv(this.addr,t),Qo(n,t)}}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zo(n,t))return;e.uniform3iv(this.addr,t),Qo(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4iv(this.addr,t),Qo(n,t)}}function ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2uiv(this.addr,t),Qo(n,t)}}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zo(n,t))return;e.uniform3uiv(this.addr,t),Qo(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4uiv(this.addr,t),Qo(n,t)}}function hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Vo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Vo):a=Bo,n.setTexture2D(t||a,i)}function gs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Uo,i)}function _s(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Wo,i)}function vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ho,i)}function ys(e){switch(e){case 5126:return es;case 35664:return ts;case 35665:return ns;case 35666:return rs;case 35674:return is;case 35675:return as;case 35676:return os;case 5124:case 35670:return ss;case 35667:case 35671:return cs;case 35668:case 35672:return ls;case 35669:case 35673:return us;case 5125:return ds;case 36294:return fs;case 36295:return ps;case 36296:return ms;case 35678:case 36198:case 36298:case 36306:case 35682:return hs;case 35679:case 36299:case 36307:return gs;case 35680:case 36300:case 36308:case 36293:return _s;case 36289:case 36303:case 36311:case 36292:return vs}}function bs(e,t){e.uniform1fv(this.addr,t)}function xs(e,t){let n=Xo(t,this.size,2);e.uniform2fv(this.addr,n)}function Ss(e,t){let n=Xo(t,this.size,3);e.uniform3fv(this.addr,n)}function Cs(e,t){let n=Xo(t,this.size,4);e.uniform4fv(this.addr,n)}function ws(e,t){let n=Xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ts(e,t){let n=Xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Es(e,t){let n=Xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ds(e,t){e.uniform1iv(this.addr,t)}function Os(e,t){e.uniform2iv(this.addr,t)}function ks(e,t){e.uniform3iv(this.addr,t)}function As(e,t){e.uniform4iv(this.addr,t)}function js(e,t){e.uniform1uiv(this.addr,t)}function Ms(e,t){e.uniform2uiv(this.addr,t)}function Ns(e,t){e.uniform3uiv(this.addr,t)}function Ps(e,t){e.uniform4uiv(this.addr,t)}function Fs(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Vo:Bo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Is(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Uo,a[e])}function Ls(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Wo,a[e])}function Rs(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ho,a[e])}function zs(e){switch(e){case 5126:return bs;case 35664:return xs;case 35665:return Ss;case 35666:return Cs;case 35674:return ws;case 35675:return Ts;case 35676:return Es;case 5124:case 35670:return Ds;case 35667:case 35671:return Os;case 35668:case 35672:return ks;case 35669:case 35673:return As;case 5125:return js;case 36294:return Ms;case 36295:return Ns;case 36296:return Ps;case 35678:case 36198:case 36298:case 36306:case 35682:return Fs;case 35679:case 36299:case 36307:return Is;case 35680:case 36300:case 36308:case 36293:return Ls;case 36289:case 36303:case 36311:case 36292:return Rs}}var Bs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ys(t.type)}},Vs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zs(t.type)}},Hs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Us=/(\w+)(\])?(\[|\.)?/g;function Ws(e,t){e.seq.push(t),e.map[t.id]=t}function Gs(e,t,n){let r=e.name,i=r.length;for(Us.lastIndex=0;;){let a=Us.exec(r),o=Us.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ws(n,l===void 0?new Bs(s,e,t):new Vs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Hs(s),Ws(n,e)),n=e}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Gs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function qs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Js=37297,Ys=0;function Xs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Zs=new U;function Qs(e){ln._getMatrix(Zs,ln.workingColorSpace,e);let t=`mat3( ${Zs.elements.map(e=>e.toFixed(4))} )`;switch(ln.getTransfer(e)){case kt:return[t,`LinearTransferOETF`];case At:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function $s(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Xs(e.getShaderSource(t),r)}return i}function ec(e,t){let n=Qs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var tc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function nc(e,t){let n=tc[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var rc=new H;function ic(){return ln.getLuminanceCoefficients(rc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${rc.x.toFixed(4)}, ${rc.y.toFixed(4)}, ${rc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ac(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(cc).join(`
`)}function oc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function sc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function cc(e){return e!==``}function lc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dc=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(e){return e.replace(dc,mc)}var pc=new Map;function mc(e,t){let n=G[t];if(n===void 0){let e=pc.get(t);if(e!==void 0)n=G[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return fc(n)}var hc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(e){return e.replace(hc,_c)}function _c(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function vc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var yc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function bc(e){return yc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var xc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Sc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:xc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Cc={302:`ENVMAP_MODE_REFRACTION`};function wc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Cc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Tc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ec(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Tc[e.combine]||`ENVMAP_BLENDING_NONE`}function Dc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Oc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=bc(n),l=Sc(n),u=wc(n),d=Ec(n),f=Dc(n),p=ac(n),m=oc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cc).join(`
`),_.length>0&&(_+=`
`)):(g=[vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(cc).join(`
`),_=[vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:nc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,ec(`linearToOutputTexel`,n.outputColorSpace),ic(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(cc).join(`
`)),o=fc(o),o=lc(o,n),o=uc(o,n),s=fc(s),s=lc(s,n),s=uc(s,n),o=gc(o),s=gc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qs(i,i.VERTEX_SHADER,y),S=qs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=$s(i,x,`vertex`),n=$s(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ks(i,h),T=sc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Js)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ys++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var kc=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=kc++,this.code=e,this.usedTimes=0}};function Mc(e){return e===1030||e===37490||e===36285}function Nc(e,t,n,r,i,a){let o=new In,s=new Ac,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=eo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=fe&&!!i.anisotropyMap,ye=pe&&!!i.clearcoatMap,be=pe&&!!i.clearcoatNormalMap,xe=pe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,P=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,F=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(F=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ln.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Mc(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ve,clearcoat:pe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:P,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:P&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||P),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:F,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&ln.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&ln.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=eo[t];n=ra.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Oc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Pc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Fc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ic(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Fc),r.length>1&&r.sort(t||Ic),i.length>1&&i.sort(t||Ic),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Rc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Lc,e.set(t,[i])):n>=r.length?(i=new Lc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function zc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Bc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Vc=0;function Hc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Uc(e){let t=new zc,n=Bc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Tn,o=new Tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Hc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Vc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Wc(e){let t=new Uc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Gc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Wc(e),t.set(n,[a])):r>=i.length?(a=new Wc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Yc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Xc=new Tn,Zc=new H,Qc=new H;function $c(e,t,n){let r=new Wi,i=new en,a=new en,o=new bn,s=new la,c=new ua,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new en},radius:{value:4}},vertexShader:Kc,fragmentShader:qc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ti;m.setAttribute(`position`,new Br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new wi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Sn(i.x,i.y,{format:I,type:Ee,minFilter:ge,magFilter:ge,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new qi(i.x,i.y,Te),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Pe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pe,d.map.depthTexture.magFilter=pe}else l.isPointLight?(d.map=new Ao(i.x),d.map.depthTexture=new Ji(i.x,we)):(d.map=new Sn(i.x,i.y),d.map.depthTexture=new qi(i.x,i.y,we)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Pe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ge,d.map.depthTexture.magFilter=ge):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pe,d.map.depthTexture.magFilter=pe);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Zc.setFromMatrixPosition(l.matrixWorld),e.position.copy(Zc),Qc.copy(e.position),Qc.add(Jc[t]),e.up.copy(Yc[t]),e.lookAt(Qc),e.updateMatrixWorld(),n.makeTranslation(-Zc.x,-Zc.y,-Zc.z),Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Xc,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Sn(i.x,i.y,{format:I,type:Ee})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function el(e,t){function n(){let t=!1,n=new bn,r=null,i=new bn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Wt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new bn().fromArray(ae),ce=new bn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+j-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+j-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function P(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:L,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:P,scissor:I,viewport:Le,reset:ze}}function tl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new en,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Lt(`canvas`)}function g(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?kt:ln.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function ee(e){O=e}function j(){let e=O;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[N]:e.REPEAT,[de]:e.CLAMP_TO_EDGE,[fe]:e.MIRRORED_REPEAT},oe={[pe]:e.NEAREST,[me]:e.NEAREST_MIPMAP_NEAREST,[he]:e.NEAREST_MIPMAP_LINEAR,[ge]:e.LINEAR,[_e]:e.LINEAR_MIPMAP_NEAREST,[ve]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function le(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ue(n.start,r.width,4),c=ue(t.start,r.width,4);n.start<=i+1&&a===c&&ue(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=le(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=ln.getPrimaries(ln.workingColorSpace),r=o.colorSpace===``?null:ln.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ce(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===F,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Xa(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Xa(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Fe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=le(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=ln.getPrimaries(ln.workingColorSpace),r=o.colorSpace===``?null:ln.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ce(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,P(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=P(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Me(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=P(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ce(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ce(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Me(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function P(e){return Math.min(i.maxSamples,e.samples)}function Me(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ln.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=ee,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nl(e,t){function n(n,r=``){let i,a=ln.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var rl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,il=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oa({vertexShader:rl,fragmentShader:il,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends Gt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new al,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new en,C=null,w=new Ma;w.viewport=new bn;let T=new Ma;T.viewport=new bn;let E=[w,T],D=new La,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?F:Pe,a=_.stencil?ke:we);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:Ne,type:ye,depthTexture:new qi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Ne,type:ye,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new H,te=new H;function ne(e,t,n){M.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;re(D,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ie(e,D,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Jt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Ma,o.layers.enable(n),o.viewport=new bn,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Yi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new Qa;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},sl=new Tn,cl=new U;cl.set(-1,0,0,0,1,0,0,0,1);function ll(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,na(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(sl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(cl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ul(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var dl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fl=null;function pl(){return fl===null&&(fl=new Di(dl,16,16,I,Ee),fl.name=`DFG_LUT`,fl.minFilter=ge,fl.magFilter=ge,fl.wrapS=de,fl.wrapT=de,fl.generateMipmaps=!1,fl.needsUpdate=!0),fl}var ml=class{constructor(e={}){let{canvas:t=Rt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ye}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Re,Le,Ie]),g=new Set([ye,we,Se,ke,De,Oe]),_=new Uint32Array(4),v=new Int32Array(4),y=new H,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Dt;let ee=0,j=0,M=null,te=-1,ne=null,re=new bn,ie=new bn,ae=null,oe=new W(0),se=0,ce=t.width,le=t.height,ue=1,N=null,de=null,fe=new bn(0,0,ce,le),pe=new bn(0,0,ce,le),me=!1,he=new Wi,ge=!1,_e=!1,be=new Tn,xe=new H,Ce=new bn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return M===null?ue:1}let P=n;function Me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),P===null){let t=`webgl2`;if(P=Me(t,e),P===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Ne,Pe,F,Fe,I,L,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;function nt(){Ne=new Mo(P),Ne.init(),$e=new nl(P,Ne),Pe=new so(P,Ne,e,$e),F=new el(P,Ne),Pe.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),Fe=new Fo(P),I=new Pc,L=new tl(P,Ne,F,I,Pe,$e,Fe),ze=new jo(T),Be=new $a(P),et=new ao(P,Be),Ve=new No(P,Be,Fe,et),He=new Lo(P,Ve,Be,et,Fe),Xe=new Io(P,Pe,L),qe=new co(I),Ue=new Nc(T,ze,Ne,Pe,et,qe),We=new ll(T,I),Ge=new Rc,Ke=new Gc(Ne),Ye=new io(T,ze,F,He,p,s),Je=new $c(T,He,Pe),tt=new ul(P,Fe,Pe,F),Ze=new oo(P,Ne,Fe),Qe=new Po(P,Ne,Fe),Fe.programs=Ue.programs,T.capabilities=Pe,T.extensions=Ne,T.properties=I,T.renderLists=Ge,T.shadowMap=Je,T.state=F,T.info=Fe}nt(),m!==1009&&(w=new zo(m,t.width,t.height,o,r,i));let R=new ol(T,P);this.xr=R,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){R.isPresenting?z(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(re.copy(fe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(ie.copy(pe).multiplyScalar(ue).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),I.dispose(),ze.dispose(),He.dispose(),et.dispose(),tt.dispose(),Ue.dispose(),R.dispose(),R.removeEventListener(`sessionstart`,ft),R.removeEventListener(`sessionend`,pt),mt.stop()};function rt(e){e.preventDefault(),Bt(`WebGLRenderer: Context Lost.`),E=!0}function it(){Bt(`WebGLRenderer: Context Restored.`),E=!1;let e=Fe.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;nt(),Fe.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function at(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){ct(e),I.remove(e)}function ct(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*je()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*je()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,n),e.side=0,e.needsUpdate=!0,bt(e,t,n),e.side=2):bt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];lt(a,n,e),r.add(a)}else lt(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){I.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new Qa;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,R.setAnimationLoop(e),e===null?mt.stop():mt.start()},R.addEventListener(`sessionstart`,ft),R.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=R.enabled===!0&&R.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(R.cameraAutoUpdate===!0&&R.updateCamera(t),t=R.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ke.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(be,Pt,t.reversedDepth),_e=this.localClippingEnabled,ge=qe.init(this.clippingPlanes,_e),b=Ge.get(e,S.length),b.init(),S.push(b),R.enabled===!0&&R.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,T.sortObjects)}ht(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(N,de,t.reversedDepth),Ae=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Ae&&Ye.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),ge===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}Ae&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(b,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),Ae&&Ye.render(e),gt(b,e,t)}M!==null&&j===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),et.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),ge===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||he.intersectsSprite(e)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=He.update(e),i=e.material;i.visible&&b.push(e,t,i,n,Ce.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||he.intersectsObject(e))){let t=He.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ce.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,Ce.z,o)}}else i.visible&&b.push(e,t,i,n,Ce.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&F.viewport(re.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Sn(1,1,{generateMipmaps:!0,type:e?Ee:ye,minFilter:ve,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ln.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ae&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&qe.setGlobalState(T.clippingPlanes,r),vt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=Te);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Ue.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),St(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ks.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=Te),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ln.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(ge===!0&&(_e===!0||e!==ne)){let t=e===ne&&r.id===te;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=bt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=Ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,xe.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,L),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,L),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Xe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=pl()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Tt(k,E),a&&r.fog===!0&&We.refreshFogUniforms(k,a),We.refreshMaterialUniforms(k,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Ks.upload(P,xt(v),k,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ks.upload(P,xt(v),k,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,S),tt.bind(n,S)}}return S}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ee=t,j=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,F.viewport(re),F.scissor(ie),F.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(fe).multiplyScalar(ue).floor(),ie.copy(pe).multiplyScalar(ue).floor(),ae=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(re),F.scissor(ie),F.setScissorTest(ae),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}te=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Pe.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Pe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,d),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0);let f=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,f);let p=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ut(P,p,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,d),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.deleteBuffer(d),P.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){ee=0,j=0,M=null,F.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Pt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ln._getDrawingBufferColorSpace(e),t.unpackColorSpace=ln._getUnpackColorSpace()}},hl=`modulepreload`,gl=function(e,t){return new URL(e,t).href},_l={},vl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gl(t,n),t=s(t),t in _l)return;_l[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hl,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yl={extension:{type:v.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await vl(()=>import(`./day14-browserAll-nRkPh9k1.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)}},bl={extension:{type:v.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await vl(()=>import(`./day14-webworkerAll-C7RogllN.js`),__vite__mapDeps([6,2,1,3,4,5]),import.meta.url)}},xl;function Sl(e){return xl===void 0&&(xl=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??ae.defaultOptions.failIfMajorPerformanceCaveat};try{if(!E.get().getWebGLRenderingContext())return!1;let e=E.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),xl}var Cl;async function wl(e={}){return Cl===void 0&&(Cl=await(async()=>{let t=E.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Cl}var Tl=[`webgl`,`webgpu`,`canvas`];async function El(e){let t=[];e.preference?Array.isArray(e.preference)?t=e.preference.slice():(t.push(e.preference),Tl.forEach(n=>{n!==e.preference&&t.push(n)})):t=Tl.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await wl()){let{WebGPURenderer:t}=await vl(async()=>{let{WebGPURenderer:e}=await import(`./day14-WebGPURenderer-laDlq3oQ.js`);return{WebGPURenderer:e}},__vite__mapDeps([7,8,1,9,10,5,11]),import.meta.url);n=t,r={...e,...e.webgpu};break}if(a===`webgl`&&Sl(e.failIfMajorPerformanceCaveat??ae.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await vl(async()=>{let{WebGLRenderer:e}=await import(`./day14-WebGLRenderer-jhIlLloq.js`);return{WebGLRenderer:e}},__vite__mapDeps([12,13,1,9,11]),import.meta.url);n=t,r={...e,...e.webgl};break}if(a===`canvas`){let{CanvasRenderer:t}=await vl(async()=>{let{CanvasRenderer:e}=await import(`./day14-CanvasRenderer-BDd7rZ3n.js`);return{CanvasRenderer:e}},__vite__mapDeps([14,15,1,3,9,10]),import.meta.url);n=t,r={...e,...e.canvasOptions};break}}if(delete r.webgpu,delete r.webgl,delete r.canvasOptions,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var Dl=class{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener(`resize`,this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener(`resize`,this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&=(cancelAnimationFrame(this._resizeId),null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,t;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:r}=this._resizeTo;e=n,t=r}this.renderer.resize(e,t),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener(`resize`,this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Dl.extension=v.Application;var Ol=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,p.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?m.shared:new m,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};Ol.extension=v.Application,S.add(Dl),S.add(Ol);var kl=class e{constructor(...e){this.stage=new O,e[0]!==void 0&&b(r,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.stage||=new O,this.renderer=await El(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return b(r,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};kl._plugins=[];var Al=kl;S.handleByList(v.Application,Al._plugins),S.add(te);var jl={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Ml=[`in vec2 vBlurTexCoords[%size%];`,`uniform sampler2D uTexture;`,`out vec4 finalColor;`,`void main(void)`,`{`,`    %blur%`,`}`].join(`
`);function Nl(e){let t=jl[e],n=t.length,r=``;for(let i=0;i<e;i++){let a=i===0?`finalColor = `:`    + `,o=i<n?i:e-i-1,s=`texture(uTexture, vBlurTexCoords[%index%]) * %value%`.replace(`%index%`,i.toString()).replace(`%value%`,t[o].toString());r+=`${a}${s}
`}return Ml.replace(`%blur%`,`${r};`).replace(`%size%`,e.toString())}var Pl=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Fl(e,t){let n=Math.ceil(e/2),r=Pl,i=``,a;a=t?`vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);`:`vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);`;for(let t=0;t<e;t++){let e=a.replace(`%index%`,t.toString());e=e.replace(`%sampleIndex%`,`${t-(n-1)}.0`),i+=e,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r=r.replace(`%dimension%`,t?`z`:`w`),r}function Il(e,t){let n=Fl(t,e),r=Nl(t);return f.from({vertex:n,fragment:r,name:`blur-${e?`horizontal`:`vertical`}-pass-filter`})}var Ll=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}
`;function Rl(e,t){let n=jl[t],r=n.length,i=[],a=[],o=[];for(let s=0;s<t;s++){i[s]=`@location(${s}) offset${s}: vec2<f32>,`,e?a[s]=`filteredCord + vec2(${s-r+1} * pixelStrength, 0.0),`:a[s]=`filteredCord + vec2(0.0, ${s-r+1} * pixelStrength),`;let c=n[s<r?s:t-s-1].toString();o[s]=`finalColor += textureSample(uTexture, uSampler, offset${s}) * ${c};`}let s=i.join(`
`),c=a.join(`
`),l=o.join(`
`),u=Ll.replace(`%blur-struct%`,s).replace(`%blur-vertex-out%`,c).replace(`%blur-fragment-in%`,s).replace(`%blur-sampling%`,l).replace(`%dimension%`,e?`z`:`w`);return T.from({vertex:{source:u,entryPoint:`mainVertex`},fragment:{source:u,entryPoint:`mainFragment`}})}var zl=class e extends h{constructor(t){t={...e.defaultOptions,...t};let n=Il(t.horizontal,t.kernelSize),r=Rl(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:`f32`}}},...t}),this.horizontal=t.horizontal,this.legacy=t.legacy??!1,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._blurUniforms=this.resources.blurUniforms,this._uniforms=this._blurUniforms.uniforms}apply(e,t,n,r){this.legacy?this._applyLegacy(e,t,n,r):this._applyOptimized(e,t,n,r)}_applyLegacy(e,t,n,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,n,r);else{let i=D.getSameSizeTexture(t),a=t,o=i;this._state.blend=!1;let s=e.renderer.type===C.WEBGPU;for(let t=0;t<this.passes-1;t++){e.applyFilter(this,a,o,t===0||s);let n=o;o=a,a=n}this._state.blend=!0,e.applyFilter(this,a,n,r),D.returnTexture(i)}}_applyOptimized(e,t,n,r){if(this._uniforms.uStrength=this._calculateInitialStrength(),this.passes===1)e.applyFilter(this,t,n,r);else{let i=D.getSameSizeTexture(t),a=t,o=i;this._state.blend=!1;let s=e.renderer,c=s.type===C.WEBGPU,l=c?s.renderPipes.uniformBatch:null;for(let t=0;t<this.passes-1;t++){l&&this.groups[1].setResource(l.getUboResource(this._blurUniforms),0),e.applyFilter(this,a,o,c);let t=o;o=a,a=t,this._uniforms.uStrength*=.5}l&&this.groups[1].setResource(l.getUboResource(this._blurUniforms),0),this._state.blend=!0,e.applyFilter(this,a,n,r),D.returnTexture(i)}}_calculateInitialStrength(){let e=1,t=.5;for(let n=1;n<this.passes;n++)e+=t*t,t*=.5;return this.strength/Math.sqrt(e)}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};zl.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var Bl=zl,Vl=class extends h{constructor(...e){let t=e[0]??{};typeof t==`number`&&(b(r,`BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }`),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||`inherit`),e[3]!==void 0&&(t.kernelSize=e[3])),t={...Bl.defaultOptions,...t};let{strength:n,strengthX:i,strengthY:a,quality:o,...s}=t;super({...s,compatibleRenderers:C.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new Bl({horizontal:!0,...t}),this.blurYFilter=new Bl({horizontal:!1,...t}),this.quality=o,this.strengthX=i??n,this.strengthY=a??n,this.repeatEdgePixels=!1}apply(e,t,n,r){let i=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(i&&a){let i=D.getSameSizeTexture(t);this.blurXFilter.blendMode=`normal`,this.blurXFilter.apply(e,t,i,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,i,n,r),D.returnTexture(i)}else a?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,t,n,r)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,t,n,r))}updatePadding(){this.padding=this._repeatEdgePixels?0:Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw Error(`BlurFilter's strengthX and strengthY are different`);return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return b(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength}set blur(e){b(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength=e}get blurX(){return b(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX}set blurX(e){b(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX=e}get blurY(){return b(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY}set blurY(e){b(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}};Vl.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var Hl=class{execute(e,t){let n=e.renderer,r=n.canvasContext.activeContext,i=t.particleChildren,a=t.texture;r.save(),n.canvasContext.setContextTransform(t.worldTransform,t.roundPixels),n.canvasContext.setBlendMode(t.groupBlendMode);let o=t.groupColorAlpha,s=n.filter?.alphaMultiplier??1,c=(o>>>24&255)/255*s;for(let e=0;e<i.length;e++){let t=i[e],n=t.texture||a;if(!n?.source?.resource)continue;let o=t.color,s=(o>>>24&255)/255*c;if(s<=0)continue;let l=o&16777215,u=((l&255)<<16)+(l&65280)+(l>>16&255),d=n.source.resource;u!==16777215&&(d=j.getTintedCanvas({texture:n},u));let f=n.frame,p=n.source.resolution,m=f.x*p,h=f.y*p,g=f.width*p,_=f.height*p;r.globalAlpha=s;let v=-t.anchorX*f.width,y=-t.anchorY*f.height;t.rotation!==0||t.scaleX!==1||t.scaleY!==1?(r.save(),r.translate(t.x,t.y),r.rotate(t.rotation),r.scale(t.scaleX,t.scaleY),r.drawImage(d,m,h,g,_,v,y,f.width,f.height),r.restore()):r.drawImage(d,m,h,g,_,t.x+v,t.y+y,f.width,f.height)}r.restore()}};function Ul(e,t=null){let n=e*6;if(t||=n>65535?new Uint32Array(n):new Uint16Array(n),t.length!==n)throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${n}`);for(let e=0,r=0;e<n;e+=6,r+=4)t[e+0]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3;return t}function Wl(e){return{dynamicUpdate:Gl(e,!0),staticUpdate:Gl(e,!1)}}function Gl(e,t){let n=[];n.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let r=0;for(let i in e){let a=e[i];if(t!==a.dynamic)continue;n.push(`offset = index + ${r}`),n.push(a.code);let o=d(a.format);r+=o.stride/4}n.push(`
            index += stride * 4;
        }
    `),n.unshift(`
        var stride = ${r};
    `);let i=n.join(`
`);return Function(`ps`,`f32v`,`u32v`,i)}var Kl=class{constructor(e){this._size=0,this._generateParticleUpdateCache={};let t=this._size=e.size??1e3,n=e.properties,r=0,i=0;for(let e in n){let t=n[e],a=d(t.format);t.dynamic?i+=a.stride:r+=a.stride}this._dynamicStride=i/4,this._staticStride=r/4,this.staticAttributeBuffer=new M(t*4*r),this.dynamicAttributeBuffer=new M(t*4*i),this.indexBuffer=Ul(t);let a=new w,o=0,s=0;this._staticBuffer=new _({data:new Float32Array(1),label:`static-particle-buffer`,shrinkToFit:!1,usage:x.VERTEX|x.COPY_DST}),this._dynamicBuffer=new _({data:new Float32Array(1),label:`dynamic-particle-buffer`,shrinkToFit:!1,usage:x.VERTEX|x.COPY_DST});for(let e in n){let t=n[e],r=d(t.format);t.dynamic?(a.addAttribute(t.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:o*4,format:t.format}),o+=r.size):(a.addAttribute(t.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:s*4,format:t.format}),s+=r.size)}a.addIndex(this.indexBuffer);let c=this.getParticleUpdate(n);this._dynamicUpload=c.dynamicUpdate,this._staticUpload=c.staticUpdate,this.geometry=a}getParticleUpdate(e){let t=ql(e);return this._generateParticleUpdateCache[t]||(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e)),this._generateParticleUpdateCache[t]}generateParticleUpdate(e){return Wl(e)}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new M(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new M(this._size*this._dynamicStride*4*4),this.indexBuffer=Ul(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));let n=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,n.float32View,n.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){let t=this.staticAttributeBuffer;this._staticUpload(e,t.float32View,t.uint32View),this._staticBuffer.setDataWithSize(t.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}};function ql(e){let t=[];for(let n in e){let r=e[n];t.push(n,r.code,r.dynamic?`d`:`s`)}return t.join(`_`)}var Jl=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,Yl=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,Xl=`
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`,Zl=class extends y{constructor(){let n=f.from({vertex:Yl,fragment:Jl}),r=T.from({fragment:{source:Xl,entryPoint:`mainFragment`},vertex:{source:Xl,entryPoint:`mainVertex`}});super({glProgram:n,gpuProgram:r,resources:{uTexture:t.WHITE.source,uSampler:new o({}),uniforms:{uTranslationMatrix:{value:new e,type:`mat3x3<f32>`},uColor:{value:new i(16777215),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}}})}},Ql=class{constructor(t,n){this.state=l.for2d(),this.localUniforms=new g({uTranslationMatrix:{value:new e,type:`mat3x3<f32>`},uColor:{value:new Float32Array(4),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}),this.renderer=t,this.adaptor=n,this.defaultShader=new Zl,this.state=l.for2d(),this._managedContainers=new re({renderer:t,type:`renderable`,name:`particleContainer`})}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return e._gpuData[this.renderer.uid]||this._initBuffer(e)}_initBuffer(e){return e._gpuData[this.renderer.uid]=new Kl({size:e.particleChildren.length,properties:e._properties}),this._managedContainers.add(e),e._gpuData[this.renderer.uid]}updateRenderable(e){}execute(e){let t=e.particleChildren;if(t.length===0)return;let n=this.renderer,r=this.getBuffers(e);e.texture||=t[0].texture;let i=this.state;r.update(t,e._childrenDirty),e._childrenDirty=!1,i.blendMode=oe(e.groupBlendMode,e.texture._source);let a=this.localUniforms.uniforms,o=a.uTranslationMatrix;e.worldTransform.copyTo(o);let s=n.globalUniforms.globalUniformData;o.tx-=s.offset.x,o.ty-=s.offset.y,o.prepend(s.projectionMatrix),a.uResolution=s.resolution,a.uRound=n._roundPixels|e._roundPixels,ne(e.groupColorAlpha,a.uColor,0),this.adaptor.execute(this,e)}destroy(){this._managedContainers.destroy(),this.renderer=null,this.defaultShader&&=(this.defaultShader.destroy(),null)}};Ql.extension={type:[v.CanvasPipes],name:`particle`};var $l=class extends Ql{constructor(e){super(e,new Hl)}};$l.extension={type:[v.CanvasPipes],name:`particle`};var eu=class{execute(e,t){let n=e.state,r=e.renderer,i=t.shader||e.defaultShader;i.resources.uTexture=t.texture._source,i.resources.uniforms=e.localUniforms;let a=r.gl,o=e.getBuffers(t);r.shader.bind(i),r.state.set(n),r.geometry.bind(o.geometry,i.glProgram);let s=o.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?a.UNSIGNED_SHORT:a.UNSIGNED_INT;a.drawElements(a.TRIANGLES,t.particleChildren.length*6,s,0)}},tu=class extends Ql{constructor(e){super(e,new eu)}};tu.extension={type:[v.WebGLPipes],name:`particle`};var nu=class{execute(e,t){let n=e.renderer,r=t.shader||e.defaultShader;r.groups[0]=n.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),r.groups[1]=n.texture.getTextureBindGroup(t.texture);let i=e.state,a=e.getBuffers(t);n.encoder.draw({geometry:a.geometry,shader:t.shader||e.defaultShader,state:i,size:t.particleChildren.length*6})}},ru=class extends Ql{constructor(e){super(e,new nu)}};ru.extension={type:[v.WebGPUPipes],name:`particle`};var iu=class e{constructor(n){if(n instanceof t)this.texture=n,a(this,e.defaultOptions,{});else{let t={...e.defaultOptions,...n};a(this,t,{})}}get alpha(){return this._alpha}set alpha(e){this._alpha=Math.min(Math.max(e,0),1),this._updateColor()}get tint(){return n(this._tint)}set tint(e){this._tint=i.shared.setValue(e??16777215).toBgrNumber(),this._updateColor()}_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};iu.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1};var au=iu,ou={vertex:{attributeName:`aVertex`,format:`float32x2`,code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:`aPosition`,format:`float32x2`,code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:`aRotation`,format:`float32`,code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:`aUV`,format:`float32x2`,code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:`aColor`,format:`unorm8x4`,code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}};S.add(tu),S.add(ru),S.add($l);var su=new A(0,0,0,0),cu=class e extends u{constructor(t={}){t={...e.defaultOptions,...t,dynamicProperties:{...e.defaultOptions.dynamicProperties,...t?.dynamicProperties}};let{dynamicProperties:n,shader:r,roundPixels:i,texture:a,particles:o,...s}=t;super({label:`ParticleContainer`,...s}),this.renderPipeId=`particle`,this.batched=!1,this._childrenDirty=!1,this.texture=a||null,this.shader=r,this._properties={};for(let e in ou){let t=ou[e],r=n[e];this._properties[e]={...t,dynamic:r}}this.allowChildren=!0,this.roundPixels=i??!1,this.particleChildren=o??[]}addParticle(...e){for(let t=0;t<e.length;t++)this.particleChildren.push(e[t]);return this.onViewUpdate(),e[0]}removeParticle(...e){let t=!1;for(let n=0;n<e.length;n++){let r=this.particleChildren.indexOf(e[n]);r>-1&&(this.particleChildren.splice(r,1),t=!0)}return t&&this.onViewUpdate(),e[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return su}updateBounds(){}destroy(e=!1){if(super.destroy(e),typeof e==`boolean`?e:e?.texture){let t=typeof e==`boolean`?e:e?.textureSource,n=this.texture??this.particleChildren[0]?.texture;n&&n.destroy(t)}this.texture=null,this.shader?.destroy()}removeParticles(e,t){e??=0,t??=this.particleChildren.length;let n=this.particleChildren.splice(e,t-e);return this.onViewUpdate(),n}removeParticleAt(e){let t=this.particleChildren.splice(e,1);return this.onViewUpdate(),t[0]}addParticleAt(e,t){return this.particleChildren.splice(t,0,e),this.onViewUpdate(),e}addChild(...e){throw Error(`ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()`)}removeChild(...e){throw Error(`ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()`)}removeChildren(e,t){throw Error(`ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()`)}removeChildAt(e){throw Error(`ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()`)}getChildAt(e){throw Error(`ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()`)}setChildIndex(e,t){throw Error(`ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()`)}getChildIndex(e){throw Error(`ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()`)}addChildAt(e,t){throw Error(`ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()`)}swapChildren(e,t){throw Error(`ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()`)}reparentChild(...e){throw Error(`ParticleContainer.reparentChild() is not available with the particle container`)}reparentChildAt(e,t){throw Error(`ParticleContainer.reparentChildAt() is not available with the particle container`)}};cu.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};var lu=cu;S.add(yl,bl);var uu=Object.defineProperty,du=(e,t,n)=>t in e?uu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t,n)=>du(e,typeof t==`symbol`?t:t+``,n);function fu(e,t,n){let r=n(Su(e)?e:t,t.value,t.editorMin,t.editorMax,t.curve);return Su(e)?r:{...r,mode:t.mode,value:t.value,min:t.min,max:t.max}}function pu(e,t,n){return{mode:`constant`,value:e,min:e,max:e,curve:[{x:0,y:e},{x:1,y:e}],curveB:[{x:0,y:e},{x:1,y:e}],editorMin:t,editorMax:n}}function mu(e,t,n,r){return{mode:`curve`,value:e,min:Math.min(e,t),max:Math.max(e,t),curve:[{x:0,y:e},{x:1,y:t}],curveB:[{x:0,y:e},{x:1,y:t}],editorMin:n,editorMax:r}}function hu(e,t){return{mode:`blend`,colorStops:[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[t[0],t[1],t[2]]}],alphaStops:[{position:0,alpha:e[3]},{position:1,alpha:t[3]}]}}function gu(e,t,n,r){let i=Su(e)?e:{},a=xu(J(i.min,t.min),n,r),o=xu(J(i.max,t.max),n,r);return{min:Math.min(a,o),max:Math.max(a,o)}}function _u(e,t,n,r,i=!1){if(!Array.isArray(e))return[...t];let a=xu(J(e[0],t[0]),n,r),o=xu(J(e[1],t[1]),n,r);return i?[Math.round(a),Math.round(o)]:[a,o]}function vu(e,t,n,r){return Array.isArray(e)?[xu(J(e[0],t[0]),n,r),xu(J(e[1],t[1]),n,r),xu(J(e[2],t[2]),n,r)]:[...t]}function yu(e,t,n,r){return Array.isArray(e)?[xu(J(e[0],t[0]),n,r),xu(J(e[1],t[1]),n,r),xu(J(e[2],t[2]),n,r),xu(J(e[3],t[3]),n,r)]:[...t]}function bu(e,t){return typeof e==`string`?e:t}function J(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function xu(e,t,n){return Math.min(n,Math.max(t,e))}function Su(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Cu=`sprite-master`;function wu(e){if(!Su(e))return null;let t=bu(e.path,``);return t?{type:`texture`,id:bu(e.id,t),path:t}:null}function Tu(e){let t=Su(e)?e:{},n=Su(t.paramOverrides)?t.paramOverrides:{},r={};for(let[e,t]of Object.entries(n))if(typeof t==`number`||typeof t==`boolean`)r[e]=t;else if(typeof t==`string`)r[e]=t;else if(Array.isArray(t)&&t.every(e=>typeof e==`number`)){let n=t;r[e]=[n[0]??0,n[1]??0,n[2]??0,n[3]??0]}return{id:bu(t.id,`material-instance`),shaderId:bu(t.shaderId,Cu),paramOverrides:r,mainTex:wu(t.mainTex)}}function Eu(e){return Su(e)?Tu(e):null}function Du(e){let t={id:e.id,shaderId:e.shaderId};if(Object.keys(e.paramOverrides).length>0){let n={};for(let t of Object.keys(e.paramOverrides).sort())n[t]=e.paramOverrides[t];t.paramOverrides=n}return e.mainTex&&(t.mainTex=e.mainTex),t}var Ou=[`velocity`,`velocityOverLifetime`,`limitVelocityOverLifetime`,`inheritVelocity`,`color`,`size`,`rotation`,`lifetimeByEmitterSpeed`,`forceOverLifetime`,`colorBySpeed`,`sizeBySpeed`,`rotationBySpeed`,`externalForces`,`noise`,`collision`,`triggers`,`subEmitters`,`textureSheetAnimation`,`lights`,`trails`,`customData`],ku={velocity:`full`,velocityOverLifetime:`full`,limitVelocityOverLifetime:`partial`,inheritVelocity:`partial`,color:`full`,size:`full`,rotation:`full`,lifetimeByEmitterSpeed:`full`,forceOverLifetime:`partial`,colorBySpeed:`partial`,sizeBySpeed:`partial`,rotationBySpeed:`partial`,externalForces:`partial`,noise:`partial`,collision:`partial`,triggers:`partial`,subEmitters:`partial`,textureSheetAnimation:`partial`,lights:`partial`,trails:`partial`,customData:`partial`};Ou.filter(e=>ku[e]===`partial`);var Au=new Set([`velocity`,`color`,`size`,`rotation`]);function ju(){return rd(e=>Au.has(e))}function Mu(){return rd(()=>!1)}function Nu(e,t){let n=Su(e)?e:{};return rd(e=>typeof n[e]==`boolean`?n[e]:t[e])}function Pu(){return{velocityOverLifetime:{space:`local`,linear:{x:pu(0,-32,32),y:pu(0,-32,32),z:pu(0,-32,32)},orbital:{x:pu(0,-32,32),y:pu(0,-32,32),z:pu(0,-32,32)},orbitalOffset:{x:pu(0,-32,32),y:pu(0,-32,32),z:pu(0,-32,32)},radial:pu(0,-32,32),speedModifier:pu(1,0,4)},limitVelocityOverLifetime:{separateAxes:!1,speed:mu(16,16,0,120),x:mu(16,16,0,120),y:mu(16,16,0,120),z:mu(16,16,0,120),dampen:.5,drag:pu(0,0,12),multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:mu(0,0,-4,4)},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:mu(1,1,0,3)},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:pu(1,-10,10)},colorBySpeed:{speedRange:{min:0,max:16},gradient:hu([1,1,1,1],[1,.65,.2,1]),blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:mu(1,1,0,4),blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:mu(0,0,-24,24),blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:pu(1,-4,4),drag:pu(0,0,12),vortexStrength:0},noise:{mode:`sine`,strength:pu(0,0,8),frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:id(),collision:id(),death:id()},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:mu(0,0,0,64),cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:pu(0,0,5),radius:pu(1,0,32),additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:pu(.5,0,8),length:pu(0,0,12),width:pu(1,.01,4),widthOverTrail:pu(1,0,1),color:null,colorOverLifetime:hu([1,1,1,1],[1,1,1,1]),colorOverTrail:hu([1,1,1,1],[1,1,1,1]),inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:nd()}}}function Fu(e,t,n){let r=Su(e)?e:{},i=Pu();return{velocityOverLifetime:Ru(r.velocityOverLifetime,i.velocityOverLifetime,t),limitVelocityOverLifetime:zu(r.limitVelocityOverLifetime,i.limitVelocityOverLifetime,t),inheritVelocity:Bu(r.inheritVelocity,i.inheritVelocity,t),lifetimeByEmitterSpeed:Vu(r.lifetimeByEmitterSpeed,i.lifetimeByEmitterSpeed,t),forceOverLifetime:Hu(r.forceOverLifetime,i.forceOverLifetime,t),colorBySpeed:Uu(r.colorBySpeed,i.colorBySpeed,n),sizeBySpeed:Wu(r.sizeBySpeed,i.sizeBySpeed,t),rotationBySpeed:Gu(r.rotationBySpeed,i.rotationBySpeed,t),externalForces:Ku(r.externalForces,i.externalForces,t),noise:qu(r.noise,i.noise,t),collision:Ju(r.collision,i.collision),triggers:Yu(r.triggers,i.triggers),subEmitters:Xu(r.subEmitters,i.subEmitters),textureSheetAnimation:Qu(r.textureSheetAnimation,i.textureSheetAnimation,t),lights:$u(r.lights,i.lights,t),trails:ed(r.trails,i.trails,t,n),customData:td(r.customData,i.customData,t)}}function Iu(e,t){return xu((t-e.min)/Math.max(1e-6,e.max-e.min),0,1)}function Lu(e,t,n){let r=Su(e)?e:{};return{x:fu(r.x,t.x,n),y:fu(r.y,t.y,n),z:fu(r.z,t.z,n)}}function Ru(e,t,n){let r=Su(e)?e:{};return{space:r.space===`world`?`world`:`local`,linear:Lu(r.linear,t.linear,n),orbital:Lu(r.orbital,t.orbital,n),orbitalOffset:Lu(r.orbitalOffset,t.orbitalOffset,n),radial:fu(r.radial,t.radial,n),speedModifier:fu(r.speedModifier,t.speedModifier,n)}}function zu(e,t,n){let r=Su(e)?e:{};return{separateAxes:typeof r.separateAxes==`boolean`?r.separateAxes:t.separateAxes,speed:fu(r.speed,t.speed,n),x:fu(r.x,t.x,n),y:fu(r.y,t.y,n),z:fu(r.z,t.z,n),dampen:xu(J(r.dampen,t.dampen),0,1),drag:n(r.drag,0,0,12),multiplyBySize:typeof r.multiplyBySize==`boolean`?r.multiplyBySize:t.multiplyBySize,space:r.space===`world`?`world`:`local`}}function Bu(e,t,n){let r=Su(e)?e:{};return{mode:r.mode===`current`?`current`:`initial`,multiplier:fu(r.multiplier,t.multiplier,n)}}function Vu(e,t,n){let r=Su(e)?e:{};return{speedRange:gu(r.speedRange,t.speedRange,0,80),multiplier:fu(r.multiplier,t.multiplier,n)}}function Hu(e,t,n){let r=Su(e)?e:{};return{force:vu(r.force,t.force,-160,160),randomized:vu(r.randomized,t.randomized,0,160),multiplier:n(r.multiplier,1,-10,10)}}function Uu(e,t,n){let r=Su(e)?e:{};return{speedRange:gu(r.speedRange,t.speedRange,0,80),gradient:n(r.gradient,[1,1,1,1],[1,.65,.2,1]),blend:xu(J(r.blend,t.blend),0,1)}}function Wu(e,t,n){let r=Su(e)?e:{};return{speedRange:gu(r.speedRange,t.speedRange,0,80),multiplier:fu(r.multiplier,t.multiplier,n),blend:xu(J(r.blend,t.blend),0,1)}}function Gu(e,t,n){let r=Su(e)?e:{};return{speedRange:gu(r.speedRange,t.speedRange,0,80),angularVelocity:fu(r.angularVelocity,t.angularVelocity,n),blend:xu(J(r.blend,t.blend),0,1)}}function Ku(e,t,n){let r=Su(e)?e:{};return{wind:vu(r.wind,t.wind,-160,160),gravityMultiplier:n(r.gravityMultiplier,1,-4,4),drag:n(r.drag,0,0,12),vortexStrength:xu(J(r.vortexStrength,t.vortexStrength),-80,80)}}function qu(e,t,n){let r=Su(e)?e:{};return{mode:r.mode===`curl`?`curl`:`sine`,strength:n(r.strength,0,0,8),frequency:xu(J(r.frequency,t.frequency),0,32),speed:xu(J(r.speed,t.speed),-16,16),scroll:vu(r.scroll,t.scroll,-16,16),octaves:Math.round(xu(J(r.octaves,t.octaves),1,6)),damping:xu(J(r.damping,t.damping),0,1)}}function Ju(e,t){let n=Su(e)?e:{};return{mode:n.mode===`plane`?`plane`:`none`,planeY:xu(J(n.planeY,t.planeY),-100,100),radius:xu(J(n.radius,t.radius),0,16),bounce:xu(J(n.bounce,t.bounce),0,1),dampen:xu(J(n.dampen,t.dampen),0,1),killBelow:xu(J(n.killBelow,t.killBelow),0,200)}}function Yu(e,t){let n=Su(e)?e:{};return{birthEvent:bu(n.birthEvent,t.birthEvent),deathEvent:bu(n.deathEvent,t.deathEvent),normalizedTime:xu(J(n.normalizedTime,t.normalizedTime),0,1),oneShot:typeof n.oneShot==`boolean`?n.oneShot:t.oneShot}}function Xu(e,t){let n=Su(e)?e:{};return{birth:Zu(n.birth,t.birth),collision:Zu(n.collision,t.collision),death:Zu(n.death,t.death)}}function Zu(e,t){let n=Su(e)?e:{};return{effectFile:bu(n.effectFile,t.effectFile),probability:xu(J(n.probability,t.probability),0,1),inheritColor:typeof n.inheritColor==`boolean`?n.inheritColor:t.inheritColor,inheritSize:typeof n.inheritSize==`boolean`?n.inheritSize:t.inheritSize}}function Qu(e,t,n){let r=Su(e)?e:{};return{tiles:_u(r.tiles,t.tiles,1,16,!0),startFrame:Math.round(xu(J(r.startFrame,t.startFrame),0,255)),endFrame:Math.round(xu(J(r.endFrame,t.endFrame),0,255)),frameOverTime:fu(r.frameOverTime,t.frameOverTime,n),cycles:xu(J(r.cycles,t.cycles),0,32),randomStartFrame:typeof r.randomStartFrame==`boolean`?r.randomStartFrame:t.randomStartFrame}}function $u(e,t,n){let r=Su(e)?e:{};return{color:vu(r.color,t.color,0,1),intensity:n(r.intensity,0,0,5),radius:n(r.radius,1,0,32),additive:typeof r.additive==`boolean`?r.additive:t.additive}}function ed(e,t,n,r){let i=Su(e)?e:{},a=i.color===null||i.color===void 0?null:r(i.color,[1,1,1,1],[1,1,1,0]);return{material:Eu(i.material),depthTest:typeof i.depthTest!=`boolean`||i.depthTest,depthWrite:typeof i.depthWrite==`boolean`&&i.depthWrite,mode:i.mode===`ribbon`?`ribbon`:`particleHistory`,ratio:xu(J(i.ratio,t.ratio),0,1),lifetime:n(i.lifetime,.5,0,8),length:n(i.length,0,0,12),width:n(i.width,1,.01,4),widthOverTrail:n(i.widthOverTrail,1,0,1),color:a,colorOverLifetime:r(i.colorOverLifetime,[1,1,1,1],[1,1,1,1]),colorOverTrail:r(i.colorOverTrail??a,[1,1,1,1],[1,1,1,1]),inheritColor:typeof i.inheritColor==`boolean`?i.inheritColor:t.inheritColor,textureMode:i.textureMode===`tile`?`tile`:`stretch`,texture:typeof i.texture==`string`&&i.texture.trim()?i.texture.trim():null,minVertexDistance:xu(J(i.minVertexDistance,t.minVertexDistance),0,1),worldSpace:typeof i.worldSpace==`boolean`?i.worldSpace:t.worldSpace}}function td(e,t,n){let r=Su(e)?e:{},i=Array.isArray(r.channels)?r.channels:null,a=i?null:yu(r.vector1,[0,0,0,0],-1e5,1e5),o=t.channels??nd(),s=[0,1,2,3].map(e=>{let t=i?o[e]:pu(a?.[e]??0,-1,1);return fu(i?.[e],t,n)});return{label:bu(r.label,t.label),channels:s}}function nd(){return[pu(0,-1,1),pu(0,-1,1),pu(0,-1,1),pu(0,-1,1)]}function rd(e){return Ou.reduce((t,n)=>(t[n]=e(n),t),{})}function id(){return{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}}var ad=1e5,od=1/3,sd=1e3,cd=1,ld=new WeakMap;function ud(e){let t=ld.get(e);if(t)return t;let n=Ed(e)?e:Td(e,[{x:0,y:0},{x:1,y:0}]),r=Ad(n),i=[];for(let e=0;e<n.length-1;e++){let t=n[e],a=n[e+1],o=Math.max(1e-6,a.x-t.x),s=_d(t),c=gd(a),l=t.y+hd(t,r[e])*o*s,u=a.y-md(a,r[e+1])*o*c;i.push({start:t.x,end:a.x,dx:o,x1:t.x+o*s,x2:a.x-o*c,y0:t.y,y1:l,y2:u,y3:a.y,linearX:s===od&&c===od,c1:3*(l-t.y),c2:3*(t.y-2*l+u),c3:-t.y+3*l-3*u+a.y})}let a={firstY:n[0].y,lastY:n[n.length-1].y,segments:i};return Object.isFrozen(e)&&e.every(e=>Object.isFrozen(e))&&ld.set(e,a),a}function dd(e,t){let n=Pd((t-e.start)/e.dx,0,1),r=e.linearX?n:vd(e.start,e.x1,e.x2,e.end,t,n);return yd(e.y0,e.y1,e.y2,e.y3,r)}function fd(e,t){if(t<=0)return e.firstY;if(t>=1)return e.lastY;for(let n of e.segments)if(t<=n.end)return dd(n,t);return e.lastY}function pd(e,t){return fd(ud(e),Pd(t,0,1))}function md(e,t){return e.slopeIn??e.slope??t}function hd(e,t){return e.slopeOut??e.slope??t}function gd(e){return e.weightIn??od}function _d(e){return e.weightOut??od}function vd(e,t,n,r,i,a){let o=Pd(a,0,1);for(let a=0;a<6;a++){let a=yd(e,t,n,r,o)-i,s=bd(e,t,n,r,o);if(Math.abs(a)<1e-6)return o;if(Math.abs(s)<1e-6)break;let c=o-a/s;if(c<0||c>1)break;o=c}let s=0,c=1,l=1/0,u=0,d=yd(e,t,n,r,u)-i;for(let a=1;a<=24;a++){let o=a/24,f=yd(e,t,n,r,o)-i,p=Math.abs(f);if(p<l&&(l=p,s=u,c=o),d===0||f===0||d<0&&f>0||d>0&&f<0){s=u,c=o;break}u=o,d=f}let f=s,p=c;for(let a=0;a<24;a++){let a=(f+p)*.5,o=yd(e,t,n,r,a)-i,s=yd(e,t,n,r,f)-i;if(Math.abs(o)<1e-6)return a;s<=0&&o>=0||s>=0&&o<=0?p=a:f=a}return(f+p)*.5}function yd(e,t,n,r,i){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*r}function bd(e,t,n,r,i){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(r-n)}function xd(e,t,n=ad){return{...e,y:Nd(e.y*t,-n,n),...typeof e.slope==`number`?{slope:Nd(e.slope*t,-sd,sd)}:{},...typeof e.slopeIn==`number`?{slopeIn:Nd(e.slopeIn*t,-sd,sd)}:{},...typeof e.slopeOut==`number`?{slopeOut:Nd(e.slopeOut*t,-sd,sd)}:{}}}function Sd(e,t=ad){if(!Fd(e))return;let n={x:Pd(Md(e.x,0),0,1),y:Nd(Md(e.y,0),-t,t)},r=Cd(e.slope),i=Cd(e.slopeIn),a=Cd(e.slopeOut),o=wd(e.weightIn),s=wd(e.weightOut);return r!==void 0&&(n.slope=r),i!==void 0&&(n.slopeIn=i),a!==void 0&&(n.slopeOut=a),o!==void 0&&(n.weightIn=o),s!==void 0&&(n.weightOut=s),n}function Cd(e){return typeof e==`number`&&Number.isFinite(e)?Nd(e,-sd,sd):void 0}function wd(e){return typeof e==`number`&&Number.isFinite(e)?Nd(e,0,cd):void 0}function Td(e,t,n=ad){let r=(Array.isArray(e)&&e.length>0?e:t).map(e=>Sd(e,n)).filter(e=>!!e).sort((e,t)=>e.x-t.x).slice(0,8);if(r.length===0)return[{x:0,y:0},{x:1,y:0}];if(r.length===1){let e=r[0];return[{...e,x:0},{...e,x:1}]}return r[0].x=0,r[r.length-1].x=1,r}function Ed(e){if(e.length<2)return!1;let t=e[0],n=e[e.length-1];if(t.x!==0||n.x!==1)return!1;let r=-1/0;for(let t of e){if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Dd(t.slope)||!Dd(t.slopeIn)||!Dd(t.slopeOut)||!Od(t.weightIn)||!Od(t.weightOut)||t.x<r||t.x<0||t.x>1)return!1;r=t.x}return!0}function Dd(e){return e===void 0||typeof e==`number`&&Number.isFinite(e)}function Od(e){return e===void 0||typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=cd}var kd=new WeakMap;function Ad(e){let t=kd.get(e);return t||(t=jd(e),kd.set(e,t)),t}function jd(e){let t=e.length;if(t===0)return[];if(t===1){let t=e[0];return[typeof t.slope==`number`&&Number.isFinite(t.slope)?t.slope:0]}let n=e.map(e=>typeof e.slope==`number`&&Number.isFinite(e.slope)),r=Array(t-1);for(let n=0;n<t-1;n++){let t=e[n],i=e[n+1];r[n]=(i.y-t.y)/Math.max(1e-6,i.x-t.x)}let i=Array(t);for(let a=0;a<t;a++)if(n[a])i[a]=e[a].slope;else if(a===0)i[a]=r[0];else if(a===t-1)i[a]=r[t-2];else{let e=r[a-1],t=r[a];i[a]=e*t<=0?0:(e+t)*.5}for(let e=0;e<t-1;e++){let t=r[e];if(t===0){n[e]||(i[e]=0),n[e+1]||(i[e+1]=0);continue}let a=i[e]/t,o=i[e+1]/t,s=a*a+o*o;if(s>9){let r=3/Math.sqrt(s);n[e]||(i[e]=r*a*t),n[e+1]||(i[e+1]=r*o*t)}}return i}function Md(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function Nd(e,t,n){return Pd(Number.isFinite(e)?e:t,t,n)}function Pd(e,t,n){return Math.min(n,Math.max(t,e))}function Fd(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Id(e,t){let n=ud(e),r=Math.max(1,Math.ceil(t*64)),i=t/r,a=(n.firstY+fd(n,t))*.5,o=1;for(let e of n.segments){if(o>=r)break;let n=Math.min(r-1,Math.floor(e.end/i));if(n>=o&&t*n/r>e.end&&n--,n+1<r&&t*(n+1)/r<=e.end&&n++,!(n<o)){if(e.linearX&&e.end-e.start>=1e-6)a+=Ld(e,t*o/r,i,n-o+1);else for(let i=o;i<=n;i++)a+=dd(e,t*i/r);o=n+1}}return a*i}function Ld(e,t,n,r){let i=(t-e.start)/e.dx,a=n/e.dx,o=e.y0+i*(e.c1+i*(e.c2+i*e.c3)),s=a*(e.c1+i*(2*e.c2+3*i*e.c3)),c=a*a*(e.c2+3*i*e.c3),l=a*a*a*e.c3,u=r-1,d=u*r/2,f=u*r*(2*u+1)/6;return r*o+s*d+c*f+l*d*d}function Rd(e,t,n){if(e.mode===`random`)return e.min+(e.max-e.min)*n;let r=e.multiplier??1;if(e.mode===`curve`)return pd(e.curve,t)*r;if(e.mode===`randomCurve`){let i=pd(e.curve,t);return(i+(pd(e.curveB,t)-i)*n)*r}return e.value}function Y(e,t,n,r){return Rd(e,Vd(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1),Vd(n,0,1))}function zd(e,t,n,r){let i=Vd(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1),a=Vd(n,0,1);if(i<=0)return 0;if(e.mode===`random`)return(e.min+(e.max-e.min)*a)*i;if(e.mode===`constant`)return e.value*i;let o=Id(e.curve,i);return(o+((e.mode===`randomCurve`?Id(e.curveB,i):o)-o)*a)*(e.multiplier??1)}function Bd(e,t,n,r){let i=Vd(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1);return i<=0?Y(e,t,n,r):zd(e,t,n,r)/i}function Vd(e,t,n){return Math.min(n,Math.max(t,e))}var Hd=new WeakSet;function Ud(e){return typeof e==`object`&&!!e&&Hd.has(e)}var Wd=class{constructor(e,t){q(this,`clone`,t),q(this,`value`),this.value=this.acquire(e)}replace(e){this.value=this.acquire(e)}mutable(){return Ud(this.value)&&(this.value=this.clone(this.value)),this.value}acquire(e){if(Ud(e))return e;let t=this.clone(e);return Gd(t),t}};function Gd(e){for(let[t,n]of Object.entries(e))if(n&&typeof n==`object`){if((t===`curve`||t===`curveB`)&&Array.isArray(n)){for(let e of n)Object.freeze(e);Object.freeze(n),ud(n)}else Gd(n)}}var Kd=2**50,qd=Math.PI*2,Jd=256,Yd=1e-6,Xd=1,Zd=2,Qd=4096,$d=512,ef=4,tf=30,nf=2,rf=1.15,af=1e5,of=ju(),sf=Mu(),cf={id:`emitter-1`,name:`Emitter`,enabled:!0,mode:`billboard`,maxParticles:256,duration:1.2,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{...of},spawn:{rate:80,rateValue:X(80,0,3e3),rateOverDistance:0,rateOverDistanceValue:X(0,0,1e3),bursts:[{time:0,count:18,cycles:1,interval:.1,probability:1}],shape:`circle`,radius:.35,radiusValue:X(.35,0,24),box:[.6,.2,.6],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:X(0,-360,360),length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`world`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:lf(.45,.85,.02,30),color:ff(),size:X(1,0,24),size3D:{x:X(1,0,24),y:X(1,0,24),z:X(1,0,24)},startSizeSeparateAxes:!1,rotation:lf(0,qd,-qd,qd),rotation3D:{x:X(0,-qd,qd),y:X(0,-qd,qd),z:lf(0,qd,-qd,qd)},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:lf(-9,9,-24,24),angularVelocity3D:{x:X(0,-24,24),y:X(0,-24,24),z:lf(-9,9,-24,24)},velocity:{mode:`shapeDirection`,min:[-.7,2.2,-.7],max:[.7,3.4,.7],speed:X(0,0,80)}},forces:{gravity:4.8,gravityValue:X(4.8,-80,80),drag:.05,dragValue:X(.05,0,12)},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!0,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.28,sizeEnd:.05,sizeValue:uf(.28,.05,.001,24),separateAxes:!1,sizeStartY:.28,sizeEndY:.05,sizeValueY:uf(.28,.05,.001,24),softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.08,sizeValue:uf(.28,.08,.001,24),separateAxes:!1,sizeValueY:uf(.28,.08,.001,24),sizeValueZ:uf(.28,.08,.001,24),thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.75,1,.48,.95],end:[.35,.75,.28,0],gradient:df([.75,1,.48,.95],[.35,.75,.28,0])},advanced:Pu()};({...cf}),{...sf},X(24,0,3e3),X(0,0,1e3),X(0,0,24),X(0,-360,360),X(1,.02,30),ff(),X(1,0,24),X(1,0,24),X(1,0,24),X(1,0,24),X(0,-qd,qd),X(0,-qd,qd),X(0,-qd,qd),X(0,-qd,qd),X(0,-24,24),X(0,-24,24),X(0,-24,24),X(0,-24,24),X(0,0,80),X(0,-80,80),X(0,0,12),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),df([1,1,1,1],[1,1,1,1]),Pu();function X(e,t,n){return $f({mode:`constant`,value:e},e,t,n)}function lf(e,t,n,r){return $f({mode:`random`,min:e,max:t,value:(e+t)*.5},(e+t)*.5,n,r)}function uf(e,t,n,r){return $f({mode:`curve`,value:e,min:Math.min(e,t),max:Math.max(e,t),curve:[{x:0,y:e},{x:1,y:t}]},e,n,r)}function df(e,t){return rp({mode:`blend`,colorStops:[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[t[0],t[1],t[2]]}],alphaStops:[{position:0,alpha:e[3]},{position:1,alpha:t[3]}]},e,t)}function ff(){let e=[1,1,1,1];return{mode:`constant`,color:[...e],colorB:[...e],gradient:df([...e],[...e]),gradientB:df([...e],[...e]),alpha:X(1,0,1),intensity:X(1,0,16)}}function pf(e,t,n,r,i,a){let o=Q(t,0,1),s=Q(Y(e.alpha,n,t,r),0,1);return e.mode===`random`?(i[0]=e.color[0]+(e.colorB[0]-e.color[0])*o,i[1]=e.color[1]+(e.colorB[1]-e.color[1])*o,i[2]=e.color[2]+(e.colorB[2]-e.color[2])*o,i[3]=s,i):e.mode===`gradient`?(ap(e.gradient,o,i),i[3]=up(e.gradient,o)*s,i):e.mode===`randomGradient`?(ap(e.gradient,o,i),i[3]=up(e.gradient,o),ap(e.gradientB,o,a),a[3]=up(e.gradientB,o),i[0]+=(a[0]-i[0])*o,i[1]+=(a[1]-i[1])*o,i[2]+=(a[2]-i[2])*o,i[3]=(i[3]+(a[3]-i[3])*o)*s,i):(i[0]=e.color[0],i[1]=e.color[1],i[2]=e.color[2],i[3]=s,i)}function mf(e){let t=Ep(e)?e:{},n=(Array.isArray(t.emitters)?t.emitters:[]).map((e,t)=>Cf(e,t)),r=vf(t.timeline,n);return _f(t.timeline,n,r),{app:`vfx-editor`,kind:`particle-effect`,version:1,targetProfile:hf(t.targetProfile),id:Sp(t.id,`particle-effect`),name:Cp(t.name,`Particle Effect`),timeline:r,emitters:n}}function hf(e){return e===`three-world-3d`||e===`portable`?e:`pixi-ui-2d`}function gf(e){return mf(e)}function _f(e,t,n){if(n.groups.length>0||t.length<=3||Ep(e)&&Array.isArray(e.groups)||t.some(e=>e.timeline.groupId))return;let r=`track-group`;n.groups.push({id:r,name:`Track Group`,collapsed:!1,hidden:!1,locked:!1});for(let e=3;e<t.length;e++){let n=t[e];n&&(n.timeline={...n.timeline,groupId:r})}}function vf(e,t){let n=Ep(e)?e:{},r=Q(Z(n.frameRate,tf),1,240),i=yf(t),a=Q(Z(n.duration,i),.05,af);return{frameRate:r,duration:a,loop:bf(n.loop,a),groups:xf(n.groups)}}function yf(e){let t=0;for(let n of e)t=Math.max(t,n.timeline.start+Math.max(.05,n.duration));return Q(Math.max(t,nf)*rf,.05,af)}function bf(e,t){let n=Ep(e)?e:{},r=t*.12,i=t*.62,a=Q(Z(n.start,r),0,t),o=Q(Z(n.end,i),0,t);return o<=a&&(o=Math.min(t,a+.05),o<=a&&(a=Math.max(0,o-.05))),{enabled:n.enabled===!0,start:a,end:o}}function xf(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){let i=e[r];if(!Ep(i))continue;let a=`track-group-${r+1}`,o=Sp(i.id,a),s=2;for(;n.has(o);)o=`${Sp(i.id,a)}-${s}`,s++;n.add(o),t.push({id:o,name:Cp(i.name,`Track Group ${r+1}`),collapsed:i.collapsed===!0,hidden:i.hidden===!0,locked:i.locked===!0})}return t}function Sf(e){let t=Ep(e)?e:{},n=typeof t.groupId==`string`&&t.groupId.trim()?Sp(t.groupId,`track-group`):null;return{start:Q(Z(t.start,0),0,af),groupId:n,locked:t.locked===!0}}function Cf(e,t){let n=Ep(e)?e:{},r=cf,i=wf(n.spawn);return{id:Sp(n.id,`emitter-${t+1}`),name:Cp(n.name,`Emitter ${t+1}`),enabled:n.enabled!==!1,mode:n.mode===`mesh`?`mesh`:`billboard`,maxParticles:Math.round(Q(Z(n.maxParticles,r.maxParticles),1,4096)),duration:Q(Z(n.duration,r.duration),.05,af),loop:n.loop!==!1,timeline:Sf(n.timeline),modules:Nu(n.modules,of),spawn:i,initializeParticle:kf(n.initializeParticle,r.initializeParticle),forces:Ef(n.forces),render:Pf(n.render,i.alignToDirection),billboard:qf(n.billboard),mesh:Jf(n.mesh),color:Qf(n.color),advanced:Fu(n.advanced,$f,rp)}}function wf(e){let t=Ep(e)?e:{},n=Q(Z(t.rate,cf.spawn.rate),0,3e3),r=Q(Z(t.rateOverDistance,cf.spawn.rateOverDistance),0,1e3),i=Q(Z(t.radius,cf.spawn.radius),0,24),a=t.shape===`point`||t.shape===`box`||t.shape===`cone`||t.shape===`sphere`||t.shape===`hemisphere`||t.shape===`mesh`?t.shape:t.shape===`circle`?`circle`:cf.spawn.shape;return{rate:n,rateValue:$f(t.rateValue,n,0,3e3),rateOverDistance:r,rateOverDistanceValue:$f(t.rateOverDistanceValue,r,0,1e3),bursts:Tf(t,cf.spawn.bursts),shape:a,radius:i,radiusValue:$f(t.radiusValue,i,0,24),box:bp(t.box,cf.spawn.box,0,48),angle:Q(Z(t.angle,cf.spawn.angle),0,90),radiusThickness:Q(Z(t.radiusThickness,cf.spawn.radiusThickness),0,1),arc:Q(Z(t.arc,cf.spawn.arc),0,360),arcMode:pp(t.arcMode),arcSpread:Q(Z(t.arcSpread,cf.spawn.arcSpread),0,1),arcSpeedValue:$f(t.arcSpeedValue,0,-360,360),length:Q(Z(t.length,cf.spawn.length),0,48),emitFrom:t.emitFrom===`volume`?`volume`:`base`,meshAsset:Xf(t.meshAsset),meshEmitFrom:t.meshEmitFrom===`vertices`?`vertices`:`surface`,position:bp(t.position,cf.spawn.position,-100,100),rotation:bp(t.rotation,cf.spawn.rotation,-360,360),scale:bp(t.scale,cf.spawn.scale,0,100),simulationSpace:t.simulationSpace===`local`?`local`:`world`,alignToDirection:t.alignToDirection===!0,randomDirectionAmount:Q(Z(t.randomDirectionAmount,cf.spawn.randomDirectionAmount),0,1),sphericalDirectionAmount:Q(Z(t.sphericalDirectionAmount,cf.spawn.sphericalDirectionAmount),0,1),randomPositionAmount:Q(Z(t.randomPositionAmount,cf.spawn.randomPositionAmount),0,24)}}function Tf(e,t=[]){return(Array.isArray(e.bursts)?e.bursts:Array.isArray(e.burstSchedules)&&e.burstSchedules.length>0?e.burstSchedules:Array.isArray(e.burstSchedule)?e.burstSchedule:t).map(e=>{if(!Ep(e))return;let t=Math.round(Q(Z(e.count,0),0,4096)),n=Math.round(Q(Z(e.cycles,Z(e.cycleCount,1)),1,256));if(!(t<=0||n<=0))return{time:Q(Z(e.time,0),0,60),count:t,cycles:n,interval:Q(Z(e.interval,Z(e.repeatInterval,0)),0,60),probability:Q(Z(e.probability,1),0,1)}}).filter(e=>!!e).slice(0,16).sort((e,t)=>e.time-t.time||e.interval-t.interval)}function Ef(e){let t=Ep(e)?e:{},n=Q(Z(t.gravity,cf.forces.gravity),-80,80),r=Q(Z(t.drag,cf.forces.drag),0,12);return{gravity:n,gravityValue:$f(t.gravityValue,n,-80,80),drag:r,dragValue:$f(t.dragValue,r,0,12)}}var Df=new Set([`constant`,`random`,`gradient`,`randomGradient`]);function Of(e,t){let n=Ep(e)?e:{},r=typeof n.mode==`string`&&Df.has(n.mode)?n.mode:t.mode,i=xp(n.color,t.color,0,16),a=xp(n.colorB,t.colorB,0,16),o=t.alpha??X((t.mode,t.color[3]),0,1),s=r===`random`?{mode:`random`,value:i[3],min:i[3],max:a[3],editorMin:0,editorMax:1,curve:[{x:0,y:i[3]},{x:1,y:i[3]}],curveB:[{x:0,y:a[3]},{x:1,y:a[3]}]}:{mode:`constant`,value:r===`constant`?i[3]:1,min:r===`constant`?i[3]:1,max:r===`constant`?i[3]:1,editorMin:0,editorMax:1,curve:[{x:0,y:r===`constant`?i[3]:1},{x:1,y:r===`constant`?i[3]:1}],curveB:[{x:0,y:r===`constant`?i[3]:1},{x:1,y:r===`constant`?i[3]:1}]};return{mode:r,color:i,colorB:a,gradient:rp(n.gradient,[i[0],i[1],i[2],i[3]],[a[0],a[1],a[2],a[3]]),gradientB:rp(n.gradientB,[a[0],a[1],a[2],a[3]],[i[0],i[1],i[2],i[3]]),alpha:$f(n.alpha??s,np(o),0,1),intensity:$f(n.intensity,np(t.intensity),0,16,void 0,Kd)}}function kf(e,t){let n=Ep(e)?e:{},r=$f(n.size,np(t.size),0,24),i=$f(n.rotation,np(t.rotation),-qd,qd),a=$f(n.angularVelocity,np(t.angularVelocity),-24,24);return{lifetime:$f(n.lifetime,np(t.lifetime),.02,30),color:Of(n.color,t.color),size:r,size3D:jf(n.size3D,Af(r,r,r),0,24),startSizeSeparateAxes:typeof n.startSizeSeparateAxes==`boolean`?n.startSizeSeparateAxes:t.startSizeSeparateAxes??!1,rotation:i,rotation3D:jf(n.rotation3D,Af(X(0,-qd,qd),X(0,-qd,qd),i),-qd,qd),startRotationSeparateAxes:typeof n.startRotationSeparateAxes==`boolean`?n.startRotationSeparateAxes:t.startRotationSeparateAxes??!1,angularVelocitySeparateAxes:typeof n.angularVelocitySeparateAxes==`boolean`?n.angularVelocitySeparateAxes:t.angularVelocitySeparateAxes??!1,angularVelocity:a,angularVelocity3D:jf(n.angularVelocity3D,Af(X(0,-24,24),X(0,-24,24),a),-24,24),velocity:Nf(n.velocity,t.velocity)}}function Af(e,t,n){return{x:e,y:t,z:n}}function jf(e,t,n,r){let i=Ep(e)?e:{};return{x:Mf(i.x,t.x,n,r),y:Mf(i.y,t.y,n,r),z:Mf(i.z,t.z,n,r)}}function Mf(e,t,n,r){return $f(e===void 0?t:e,np(t),n,r,t.curve)}function Nf(e,t){let n=Ep(e)?e:{};return{mode:n.mode===`vector`||n.mode===`shapeDirection`?n.mode:t.mode,min:bp(n.min,t.min,-1e5,1e5),max:bp(n.max,t.max,-1e5,1e5),speed:$f(n.speed,np(t.speed),0,80)}}function Pf(e,t=!1){let n=Ep(e)?e:{},r=zf(n.alignment,t),i=typeof n.alignAxis==`string`&&Bf.has(n.alignAxis),a=Vf(n.alignAxis,r),o=Uf(n.facing,r,i);return{blend:typeof n.blend==`string`&&If.has(n.blend)?n.blend:`alpha`,shading:n.shading===`lit`?`lit`:`unlit`,depthTest:n.depthTest!==!1,depthWrite:n.depthWrite===!0,depthInk:n.depthInk!==!1,orderInLayer:Math.round(Q(Z(n.orderInLayer,0),-1024,1024)),sortMode:Rf(n.sortMode),alignment:Wf(a),alignAxis:a,facing:o,alignmentVector:bp(n.alignmentVector,[0,1,0],-1,1),opacitySource:Kf(n.opacitySource),opacityInvert:n.opacityInvert===!0,texture:typeof n.texture==`string`&&n.texture.trim()?n.texture.trim():null,material:Eu(n.material)}}function Ff(e,t=1){return e.depthWrite===!0&&e.blend!==`additive`&&e.blend!==`premultiplied`&&t>=.999}var If=new Set([`alpha`,`additive`,`premultiplied`]),Lf=new Set([`none`,`distanceFarFirst`,`distanceNearFirst`,`oldestFirst`,`youngestFirst`]);function Rf(e){return typeof e==`string`&&Lf.has(e)?e:`distanceFarFirst`}function zf(e,t){return e===`faceCamera`||e===`spawnDirection`||e===`velocity`||e===`vector`?e:t?`spawnDirection`:`faceCamera`}var Bf=new Set([`screen`,`spawnDirection`,`velocity`,`vector`]);function Vf(e,t){return typeof e==`string`&&Bf.has(e)?e:t===`faceCamera`?`screen`:t}var Hf=new Set([`cameraPlane`,`cameraPosition`,`off`]);function Uf(e,t,n){return typeof e==`string`&&Hf.has(e)?e:n||t===`faceCamera`?`cameraPlane`:`off`}function Wf(e){return e===`screen`?`faceCamera`:e}var Gf=new Set([`textureAlpha`,`red`,`green`,`blue`,`luminance`,`inverseLuminance`,`constant`]);function Kf(e){return typeof e==`string`&&Gf.has(e)?e:`textureAlpha`}function qf(e){let t=Ep(e)?e:{},n=Q(Z(t.sizeStart,cf.billboard.sizeStart),.001,24),r=Q(Z(t.sizeEnd,cf.billboard.sizeEnd),.001,24),i=Q(Z(t.sizeStartY,n),.001,24),a=Q(Z(t.sizeEndY,r),.001,24),o=$f(t.sizeValue,n,.001,24,[{x:0,y:n},{x:1,y:r}]);return{shape:t.shape===`square`?`square`:`circle`,sizeStart:n,sizeEnd:r,sizeValue:o,separateAxes:t.separateAxes===!0,sizeStartY:i,sizeEndY:a,sizeValueY:$f(t.sizeValueY===void 0?o:t.sizeValueY,i,.001,24,[{x:0,y:i},{x:1,y:a}]),softness:Q(Z(t.softness,cf.billboard.softness),0,1),pivot:yp(t.pivot,cf.billboard.pivot,-10,10)}}function Jf(e){let t=Ep(e)?e:{},n=Xf(t.asset),r=t.renderMode===`meshAsset`?`meshAsset`:`pixiShard`,i=t.template===`grassShard`||t.template===`quadShard`||t.template===`triangleShard`?t.template:cf.mesh.template,a=Q(Z(t.sizeStart,cf.mesh.sizeStart),.001,24),o=Q(Z(t.sizeEnd,cf.mesh.sizeEnd),.001,24),s=Yf(t,a,o);return{renderMode:r,template:i,asset:n,sizeStart:a,sizeEnd:o,sizeValue:s,separateAxes:t.separateAxes===!0,sizeValueY:$f(t.sizeValueY===void 0?s:t.sizeValueY,a,.001,24,[{x:0,y:a},{x:1,y:o}]),sizeValueZ:$f(t.sizeValueZ===void 0?s:t.sizeValueZ,a,.001,24,[{x:0,y:a},{x:1,y:o}]),thickness:Q(Z(t.thickness,cf.mesh.thickness),.02,4),pivot:bp(t.pivot,cf.mesh.pivot,-10,10),flipWinding:t.flipWinding===!0,recomputeNormals:t.recomputeNormals===!0}}function Yf(e,t,n){return $f(e.sizeValue,t,.001,24,[{x:0,y:t},{x:1,y:n}])}function Xf(e){if(!Ep(e))return null;let t=Cp(e.path,``);if(!t)return null;let n=Zf(e.bounds);return{type:`mesh`,id:Cp(e.id,t),path:t,...typeof e.name==`string`&&e.name.trim()?{name:e.name.trim()}:{},...n?{bounds:n}:{}}}function Zf(e){return Ep(e)?{min:bp(e.min,[0,0,0],-1e5,1e5),max:bp(e.max,[0,0,0],-1e5,1e5)}:null}function Qf(e){let t=Ep(e)?e:{},n=xp(t.start,cf.color.start,0,1),r=xp(t.end,cf.color.end,0,1),i=rp(t.gradient,n,r),a=ip(i);return{start:a.start,end:a.end,gradient:i}}function $f(e,t,n,r,i,a=ad){let o=Ep(e)?e:{},s=Math.min(n,r),c=Math.max(n,r),l=s<0?0:s,u=Number.isFinite(a)&&a>0?a:ad,d=wp(Z(o.editorMin,l),-u,u),f=wp(Z(o.editorMax,c),-u,u),p=Math.max(d+1e-6,f),m=dp(o.mode),h=wp(Z(e,Z(o.value,t)),-u,u),g=wp(Z(o.min,h),-u,u),_=wp(Z(o.max,h),-u,u),v=Td(o.curve,i??[{x:0,y:h},{x:1,y:h}],u),y=Td(o.curveB,i??[{x:0,y:g},{x:1,y:_}],u),b=wp(Z(o.multiplier,1),-u,u),x=o.multiplier===1,S=(m===`curve`||m===`randomCurve`)&&!x&&f!==1?mp(v,y,m,b,d,u):{curve:v,curveB:y,multiplier:b,editorMin:d,editorMax:p},C=fp(o.xAxis);return{mode:m,value:h,min:Math.min(g,_),max:Math.max(g,_),curve:S.curve,curveB:S.curveB,editorMin:S.editorMin,editorMax:S.editorMax,...S.multiplier===1?{}:{multiplier:S.multiplier},...C===`lifetime`?{}:{xAxis:C}}}function ep(e,t=64){let n=vp(t),r=new Float32Array(n),i=new Float32Array(n);for(let t=0;t<n;t++){let a=n<=1?0:t/(n-1);r[t]=pd(e.curve,a),i[t]=pd(e.curveB,a)}return{mode:e.mode,value:e.value,min:e.min,max:e.max,multiplier:e.multiplier??1,samples:n,curve:r,curveB:i}}function tp(e,t,n){let r=Q(n,0,1);if(e.mode===`random`)return e.min+(e.max-e.min)*r;if(e.mode===`curve`)return _p(e.curve,t)*e.multiplier;if(e.mode===`randomCurve`){let n=_p(e.curve,t);return(n+(_p(e.curveB,t)-n)*r)*e.multiplier}return e.value}function np(e){if(e.mode===`random`)return(e.min+e.max)*.5;let t=e.multiplier??1;return e.mode===`curve`?pd(e.curve,0)*t:e.mode===`randomCurve`?(pd(e.curve,0)*.5+pd(e.curveB,0)*.5)*t:e.value}function rp(e,t,n){let r=Ep(e)?e:{};return{mode:r.mode===`fixed`?`fixed`:`blend`,colorStops:hp(r.colorStops,t,n),alphaStops:gp(r.alphaStops,t,n)}}function ip(e){return{start:[...ap(e,0),up(e,0)],end:[...ap(e,1),up(e,1)]}}function ap(e,t,n=[1,1,1]){let r=e.colorStops;if(r.length===0)return n[0]=1,n[1]=1,n[2]=1,n;let i=Q(t,0,1),a=r[0],o=r[0];for(let e=1;e<r.length;e++){let t=r[e];t.position<a.position&&(a=t),t.position>o.position&&(o=t)}let s=a,c=o;for(let e=0;e<r.length;e++){let t=r[e];t.position<=i&&t.position>=s.position&&(s=t),t.position>=i&&t.position<=c.position&&(c=t)}let l,u,d;if(e.mode===`fixed`||i<=a.position){let t=e.mode===`fixed`?s:a;l=t.color[0],u=t.color[1],d=t.color[2]}else if(i>=o.position)l=o.color[0],u=o.color[1],d=o.color[2];else{let e=(i-s.position)/Math.max(1e-6,c.position-s.position);l=cp(s.color[0],c.color[0],e),u=cp(s.color[1],c.color[1],e),d=cp(s.color[2],c.color[2],e)}return n[0]=l,n[1]=u,n[2]=d,n}function op(e){let t=Q(e,0,1);return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function sp(e){let t=Q(e,0,1);return t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055}function cp(e,t,n){let r=Q(n,0,1);return sp(op(e)+(op(t)-op(e))*r)}function lp(e,t,n){let r=Q(n,0,1);return[cp(e[0],t[0],r),cp(e[1],t[1],r),cp(e[2],t[2],r),e[3]+(t[3]-e[3])*r]}function up(e,t){let n=e.alphaStops;if(n.length===0)return 1;let r=Q(t,0,1),i=n[0],a=n[0];for(let e=1;e<n.length;e++){let t=n[e];t.position<i.position&&(i=t),t.position>a.position&&(a=t)}let o=i,s=a;for(let e=0;e<n.length;e++){let t=n[e];t.position<=r&&t.position>=o.position&&(o=t),t.position>=r&&t.position<=s.position&&(s=t)}if(e.mode===`fixed`||r<=i.position)return e.mode===`fixed`?o.alpha:i.alpha;if(r>=a.position)return a.alpha;let c=(r-o.position)/Math.max(1e-6,s.position-o.position);return o.alpha+(s.alpha-o.alpha)*c}function dp(e){return e===`random`||e===`curve`||e===`randomCurve`?e:`constant`}function fp(e){return e===`loopAge`?`loopAge`:`lifetime`}function pp(e){return e===`loop`||e===`pingPong`||e===`burstSpread`?e:`random`}function mp(e,t,n,r,i,a=ad){let o=n===`randomCurve`?[...e,...t]:e,s=1/0,c=-1/0;for(let e of o)s=Math.min(s,e.y),c=Math.max(c,e.y);if(!Number.isFinite(s)||!Number.isFinite(c))return{curve:e,curveB:t,multiplier:r,editorMin:0,editorMax:1};let l=1,u=0;s>=0?l=Math.max(1,c):c<=0?l=-Math.max(1,Math.abs(s)):(l=Math.max(1,Math.abs(s),Math.abs(c)),u=-1),u=Math.min(u,i/Math.abs(l||1));let d=wp(r*l,-a,a),f=Math.abs(l)>1e-6&&l!==1;return{curve:f?e.map(e=>xd(e,1/l,a)):e,curveB:f&&n===`randomCurve`?t.map(e=>xd(e,1/l,a)):t,multiplier:d,editorMin:u,editorMax:1}}function hp(e,t,n){let r=[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[n[0],n[1],n[2]]}],i=(Array.isArray(e)&&e.length>0?e:r).map(e=>{if(Ep(e))return{position:Q(Z(e.position,0),0,1),color:bp(e.color,r[0].color,0,1)}}).filter(e=>!!e).sort((e,t)=>e.position-t.position).slice(0,8);return i.length===0?r:i}function gp(e,t,n){let r=[{position:0,alpha:t[3]},{position:1,alpha:n[3]}],i=(Array.isArray(e)&&e.length>0?e:r).map(e=>{if(Ep(e))return{position:Q(Z(e.position,0),0,1),alpha:Q(Z(e.alpha,1),0,1)}}).filter(e=>!!e).sort((e,t)=>e.position-t.position).slice(0,8);return i.length===0?r:i}function _p(e,t){if(e.length===0)return 0;if(e.length===1)return e[0]??0;let n=Q(t,0,1)*(e.length-1),r=Math.floor(n),i=Math.min(e.length-1,r+1),a=n-r,o=e[r]??0;return o+((e[i]??o)-o)*a}function vp(e){return Math.round(Q(e,2,1024))}function yp(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r)]:[...t]}function bp(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r),Q(Z(e[2],t[2]),n,r)]:[...t]}function xp(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r),Q(Z(e[2],t[2]),n,r),Q(Z(e[3],t[3]),n,r)]:[...t]}function Sp(e,t){return Cp(e,t).trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||t}function Cp(e,t){return typeof e==`string`&&e.trim()?e.trim():t}function Z(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function wp(e,t,n){return Q(Number.isFinite(e)?e:t,t,n)}function Tp(e){return Number.isFinite(e)?Math.max(0,e):0}function Q(e,t,n){return Math.min(n,Math.max(t,e))}function Ep(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Dp=class{constructor(e){q(this,`state`,e)}reset(e){this.state=e>>>0||2135587861}next(){return this.state=this.state*1664525+1013904223>>>0,this.state/4294967296}},Op=class e{constructor(e){q(this,`capacity`,e),q(this,`instanceData`),q(this,`spawnLocalPositionData`),q(this,`spawnDirectionData`),q(this,`spawnOriginData`),q(this,`runtimeFlagsData`),q(this,`triggerFlagsData`),q(this,`lastPosition`,[0,0,0]),q(this,`lastMoveVelocity`,[0,0,0]),q(this,`activeCount`,0),q(this,`emittedLastFrame`,0),q(this,`uploadBytesLastFrame`,0),q(this,`age`,0),q(this,`loopIndex`,-1),q(this,`loopRandom`,.5),q(this,`accumulator`,0),q(this,`distanceAccumulator`,0),q(this,`hasLastPosition`,!1),q(this,`hasPreviousEffectAge`,!1),q(this,`previousEffectAge`,0),this.instanceData=new Float32Array(e*18),this.spawnLocalPositionData=new Float32Array(e*3),this.spawnDirectionData=new Float32Array(e*3),this.spawnOriginData=new Float32Array(e*3),this.runtimeFlagsData=new Uint8Array(e),this.triggerFlagsData=new Uint8Array(e)}reset(){this.activeCount=0,this.emittedLastFrame=0,this.uploadBytesLastFrame=0,this.age=0,this.loopIndex=-1,this.loopRandom=.5,this.accumulator=0,this.distanceAccumulator=0,this.hasLastPosition=!1,this.lastMoveVelocity[0]=0,this.lastMoveVelocity[1]=0,this.lastMoveVelocity[2]=0,this.hasPreviousEffectAge=!1,this.previousEffectAge=0}cloneWithCapacity(t){let n=new e(t),r=Math.min(this.activeCount,n.capacity);return n.instanceData.set(this.instanceData.subarray(0,r*18)),n.spawnLocalPositionData.set(this.spawnLocalPositionData.subarray(0,r*3)),n.spawnDirectionData.set(this.spawnDirectionData.subarray(0,r*3)),n.spawnOriginData.set(this.spawnOriginData.subarray(0,r*3)),n.runtimeFlagsData.set(this.runtimeFlagsData.subarray(0,r)),n.triggerFlagsData.set(this.triggerFlagsData.subarray(0,r)),n.activeCount=r,n.emittedLastFrame=this.emittedLastFrame,n.uploadBytesLastFrame=this.uploadBytesLastFrame,n.age=this.age,n.loopIndex=this.loopIndex,n.loopRandom=this.loopRandom,n.accumulator=this.accumulator,n.distanceAccumulator=this.distanceAccumulator,n.hasLastPosition=this.hasLastPosition,n.lastPosition[0]=this.lastPosition[0],n.lastPosition[1]=this.lastPosition[1],n.lastPosition[2]=this.lastPosition[2],n.lastMoveVelocity[0]=this.lastMoveVelocity[0],n.lastMoveVelocity[1]=this.lastMoveVelocity[1],n.lastMoveVelocity[2]=this.lastMoveVelocity[2],n.hasPreviousEffectAge=this.hasPreviousEffectAge,n.previousEffectAge=this.previousEffectAge,n}compact(e,t){let n=0;for(;n<this.activeCount;){let r=n*18,i=this.instanceData[r+3]??0,a=this.instanceData[r+7]??0;e<=i+a?n++:(t?.(n,i+a),this.activeCount--,n!==this.activeCount&&(this.instanceData.copyWithin(r,this.activeCount*18,(this.activeCount+1)*18),this.copyRuntimeSidecars(this.activeCount,n)))}}copyRuntimeSidecars(e,t){let n=e*3,r=t*3;this.spawnLocalPositionData[r+0]=this.spawnLocalPositionData[n+0],this.spawnLocalPositionData[r+1]=this.spawnLocalPositionData[n+1],this.spawnLocalPositionData[r+2]=this.spawnLocalPositionData[n+2],this.spawnDirectionData[r+0]=this.spawnDirectionData[n+0],this.spawnDirectionData[r+1]=this.spawnDirectionData[n+1],this.spawnDirectionData[r+2]=this.spawnDirectionData[n+2],this.spawnOriginData[r+0]=this.spawnOriginData[n+0],this.spawnOriginData[r+1]=this.spawnOriginData[n+1],this.spawnOriginData[r+2]=this.spawnOriginData[n+2],this.runtimeFlagsData[t]=this.runtimeFlagsData[e]??0,this.triggerFlagsData[t]=this.triggerFlagsData[e]??0}},kp=class{constructor(e,t={}){q(this,`states`),q(this,`events`,[]),q(this,`subEmitterRequests`,[]),q(this,`stats`,{activeParticles:0,capacity:0,emittedLastFrame:0,uploadBytesLastFrame:0}),q(this,`subEmitterDepth`),q(this,`maxSubEmitterDepth`),q(this,`maxEventsPerFrame`),q(this,`maxSubEmitterRequestsPerFrame`),q(this,`rng`,new Dp(2135587861)),q(this,`effectDefinition`),q(this,`position`,[0,0,0]),q(this,`spawnSample`,Xp()),q(this,`emissionGeometries`,new Map),q(this,`runtimeParameterValues`,{emissionRateMultiplier:1,initialVelocityMultiplier:1}),q(this,`emitterRuntimeParameterValues`,new Map),q(this,`lastTimeSeconds`,0),q(this,`startedAt`,0),q(this,`active`,!1),q(this,`emissionAllowed`,!0),this.subEmitterDepth=Math.max(0,Math.floor(Z(t.subEmitterDepth,0))),this.maxSubEmitterDepth=Math.max(0,Math.floor(Z(t.maxSubEmitterDepth,ef))),this.maxEventsPerFrame=Math.max(0,Math.floor(Z(t.maxEventsPerFrame,Qd))),this.maxSubEmitterRequestsPerFrame=Math.max(0,Math.floor(Z(t.maxSubEmitterRequestsPerFrame,$d))),this.effectDefinition=new Wd(e,gf),this.states=this.effect.emitters.map(e=>new Op(e.maxParticles)),this.refreshCapacity()}get effect(){return this.effectDefinition.value}get definition(){return this.effect}get isActive(){return this.active}get runtimeParameters(){return this.runtimeParameterValues}reset(e,t,n,r=2135587861){this.effectDefinition.replace(e),this.position[0]=t[0],this.position[1]=t[1],this.position[2]=t[2],this.startedAt=n,this.lastTimeSeconds=n,this.active=!0,this.emissionAllowed=!0,this.clearFrameEvents(),this.rng.reset(r^cm(this.effect.id)),this.resizeStates();for(let e of this.states)e.reset();this.refreshCapacity()}setPosition(e){this.position[0]=e[0],this.position[1]=e[1],this.position[2]=e[2]}updateDefinition(e){this.effectDefinition.replace(e),this.resizeStates(),this.refreshCapacity()}allowCompletion(){this.emissionAllowed=!1}resumeEmission(){this.active&&(this.emissionAllowed=!0)}setEmissionGeometry(e,t){if(!t)return this.emissionGeometries.delete(e),!1;let n=Jp(t);return n?(this.emissionGeometries.set(e,n),!0):(this.emissionGeometries.delete(e),!1)}getEmissionGeometry(e){return this.emissionGeometries.get(e)??null}setRuntimeParameters(e){e.emissionRateMultiplier!==void 0&&(this.runtimeParameterValues.emissionRateMultiplier=Tp(e.emissionRateMultiplier)),e.initialVelocityMultiplier!==void 0&&(this.runtimeParameterValues.initialVelocityMultiplier=Tp(e.initialVelocityMultiplier))}setEmitterRuntimeParameters(e,t){let n=this.emitterRuntimeParameterValues.get(e)??{emissionRateMultiplier:1,initialVelocityMultiplier:1};t.emissionRateMultiplier!==void 0&&(n.emissionRateMultiplier=Tp(t.emissionRateMultiplier)),t.initialVelocityMultiplier!==void 0&&(n.initialVelocityMultiplier=Tp(t.initialVelocityMultiplier)),this.emitterRuntimeParameterValues.set(e,n)}getEmitterRuntimeParameters(e){return this.emitterRuntimeParameterValues.get(e)??null}effectiveEmissionRateMultiplier(e){return this.runtimeParameterValues.emissionRateMultiplier*(this.emitterRuntimeParameterValues.get(e)?.emissionRateMultiplier??1)}effectiveInitialVelocityMultiplier(e){return this.runtimeParameterValues.initialVelocityMultiplier*(this.emitterRuntimeParameterValues.get(e)?.initialVelocityMultiplier??1)}emitBurst(e,t={}){if(!this.active)return 0;let n=this.effect.emitters.findIndex(t=>t.id===e);if(n<0)return 0;let r=this.effect.emitters[n],i=this.states[n];if(!r||!i||!r.enabled)return 0;let a=Math.max(1,Math.floor(Z(t.count,1))),o=i.activeCount,s=this.position[0],c=this.position[1],l=this.position[2];return t.position&&(this.position[0]=t.position[0],this.position[1]=t.position[1],this.position[2]=t.position[2]),this.emitParticles(r,i,a,this.lastTimeSeconds),this.position[0]=s,this.position[1]=c,this.position[2]=l,i.activeCount-o}stop(){this.active=!1,this.clearFrameEvents();for(let e of this.states)e.reset();this.refreshStats()}update(e,t){if(this.clearFrameEvents(),this.lastTimeSeconds=t,!this.active)return!1;let n=!1,r=!0;for(let i=0;i<this.effect.emitters.length;i++){let a=this.effect.emitters[i],o=this.states[i];if(o.emittedLastFrame=0,o.uploadBytesLastFrame=0,this.recordParticleFrameEvents(a,o,i,e,t),o.compact(t,(e,t)=>this.recordParticleDeathEvent(a,o,i,e,t)),!a.enabled){n||=o.activeCount>0;continue}let s=t-this.startedAt-Math.max(0,a.timeline.start);if(o.age=s,s<0){this.emissionAllowed&&(r=!1),n||=o.activeCount>0;continue}let c=a.loop||o.age<=Math.max(.001,a.duration);c&&this.emissionAllowed?(r=!1,this.updateEmitter(a,o,e,t)):c&&this.advanceEmitterWithoutEmission(a,o,s),n||=o.activeCount>0}return this.refreshStats(),r&&!n?(this.active=!1,!1):!0}advanceEmitterWithoutEmission(e,t,n){let r=Math.max(.001,e.duration);t.age=e.loop?n%r:n,t.previousEffectAge=Math.max(0,n),t.hasPreviousEffectAge=!0,t.lastPosition[0]=this.position[0],t.lastPosition[1]=this.position[1],t.lastPosition[2]=this.position[2],t.lastMoveVelocity[0]=0,t.lastMoveVelocity[1]=0,t.lastMoveVelocity[2]=0,t.hasLastPosition=!0}updateEmitter(e,t,n,r){let i=Math.max(.001,e.duration),a=Math.max(0,t.age),o=t.hasPreviousEffectAge?t.previousEffectAge:0,s=e.loop?Math.floor(a/i):0;s!==t.loopIndex&&(t.loopIndex=s,t.loopRandom=this.rng.next()),e.loop&&(t.age=a%i),this.emitDueBursts(e,t,o,a,r,i);let c=Q(t.age/i,0,1),l=this.effectiveEmissionRateMultiplier(e.id),u=Y(e.spawn.rateValue,c,t.loopRandom)*l,d=Y(e.spawn.rateOverDistanceValue,c,t.loopRandom)*l,f=t.hasLastPosition?this.position[0]-t.lastPosition[0]:0,p=t.hasLastPosition?this.position[1]-t.lastPosition[1]:0,m=t.hasLastPosition?this.position[2]-t.lastPosition[2]:0,h=Math.hypot(f,p,m),g=n>0?1/n:0;t.lastMoveVelocity[0]=f*g,t.lastMoveVelocity[1]=p*g,t.lastMoveVelocity[2]=m*g,t.lastPosition[0]=this.position[0],t.lastPosition[1]=this.position[1],t.lastPosition[2]=this.position[2],t.hasLastPosition=!0,t.accumulator+=Math.max(0,u)*Math.max(0,n),t.distanceAccumulator+=Math.max(0,d)*Math.max(0,h),t.distanceAccumulator>=1&&(t.accumulator+=Math.floor(t.distanceAccumulator),t.distanceAccumulator%=1);let _=Math.floor(t.accumulator);_>0&&(t.accumulator-=_,this.emitParticles(e,t,_,r)),t.previousEffectAge=a,t.hasPreviousEffectAge=!0}emitDueBursts(e,t,n,r,i,a){if(r<n)return;let o=e.loop?Math.max(0,Math.floor(n/a)):0,s=e.loop?Math.max(0,Math.floor(r/a)):0,c=Math.max(o,s-Jd+1);for(let o=c;o<=s;o++){for(let s of e.spawn.bursts)this.emitScheduleIfDue(e,t,s,n,r,i,a,o);if(!e.loop)break}}emitScheduleIfDue(e,t,n,r,i,a,o,s){let c=e.loop?s*o:0;for(let s=0;s<n.cycles;s++){let l=n.time+n.interval*s;if(l>o&&!e.loop)break;l>o||Kp(c+l,r,i,t)&&(n.probability<=0||n.probability<1&&this.rng.next()>n.probability||this.emitParticles(e,t,n.count,a))}}emitParticles(e,t,n,r){let i=Math.min(n,t.capacity-t.activeCount);for(let n=0;n<i;n++)this.emitParticle(e,t,r,n,i);t.emittedLastFrame+=i}emitParticle(e,t,n,r,i){let a=t.activeCount*18,o=e.spawn,s=Q(t.age/Math.max(.001,e.duration),0,1),c=this.spawnSample;$p(o,this.rng,s,r,i,c,o.shape===`mesh`?this.emissionGeometries.get(e.id)??null:null);let l=o.simulationSpace===`local`,u=(l?0:this.position[0])+c.position[0],d=(l?0:this.position[1])+c.position[1],f=(l?0:this.position[2])+c.position[2],p=e.initializeParticle,m=Math.max(.001,Y(p.lifetime,s,this.rng.next())),h=p.velocity,g=0,_=0,v=0;if(h.mode===`vector`)g=Wp(this.rng,h.min[0],h.max[0]),_=Wp(this.rng,h.min[1],h.max[1]),v=Wp(this.rng,h.min[2],h.max[2]);else{let e=Math.max(0,Y(h.speed,s,nm(h.speed,this.rng)));g=c.direction[0]*e,_=c.direction[1]*e,v=c.direction[2]*e}if(e.modules.inheritVelocity){let n=Y(e.advanced.inheritVelocity.multiplier,s,this.rng.next()),r=[...t.lastMoveVelocity];l&&Fp(o,r),g+=r[0]*n,_+=r[1]*n,v+=r[2]*n}if(e.modules.limitVelocityOverLifetime){let t=e.advanced.limitVelocityOverLifetime,n=t.dampen,r=Y(t.drag,s,this.rng.next()),i=t.multiplyBySize&&e.modules.size?Math.max(.001,Y(e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue,s,this.rng.next())):1;if(t.separateAxes)g=Gp(g,Y(t.x,s,this.rng.next())*i,n),_=Gp(_,Y(t.y,s,this.rng.next())*i,n),v=Gp(v,Y(t.z,s,this.rng.next())*i,n);else{let e=Y(t.speed,s,this.rng.next())*i,r=Math.hypot(g,_,v);if(r>Math.max(0,e)){let t=(Math.max(0,e)+(r-Math.max(0,e))*(1-n))/Math.max(1e-6,r);g*=t,_*=t,v*=t}}if(r>0){let e=Math.max(0,1-r*.05);g*=e,_*=e,v*=e}}if(e.modules.lifetimeByEmitterSpeed){let t=Iu(e.advanced.lifetimeByEmitterSpeed.speedRange,Math.hypot(g,_,v));m=Math.max(.001,m*Y(e.advanced.lifetimeByEmitterSpeed.multiplier,t,this.rng.next()))}let y=t.activeCount,b=y*3;t.spawnLocalPositionData[b+0]=c.position[0],t.spawnLocalPositionData[b+1]=c.position[1],t.spawnLocalPositionData[b+2]=c.position[2],t.spawnOriginData[b+0]=this.position[0],t.spawnOriginData[b+1]=this.position[1],t.spawnOriginData[b+2]=this.position[2],qp(t.spawnDirectionData,b,g,_,v,c.direction),t.runtimeFlagsData[y]=+(o.simulationSpace===`local`)|(o.alignToDirection||e.render.alignAxis===`spawnDirection`?2:0),t.instanceData[a+0]=u,t.instanceData[a+1]=d,t.instanceData[a+2]=f,t.instanceData[a+3]=n,t.instanceData[a+4]=g,t.instanceData[a+5]=_,t.instanceData[a+6]=v,t.instanceData[a+7]=m,t.instanceData[a+8]=this.rng.next();let x=this.rng.next(),S=e.mode===`mesh`||p.startRotationSeparateAxes,C=S?Y(p.rotation3D.x,s,x):0,w=S?Y(p.rotation3D.y,s,x):0,T=Y(S?p.rotation3D.z:p.rotation,s,x);t.instanceData[a+9]=T,t.instanceData[a+13]=C,t.instanceData[a+14]=w;let E=this.rng.next(),D=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.x,s,E):0,O=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.y,s,E):0,k=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.z,s,E):Y(p.angularVelocity,s,E);if(t.instanceData[a+10]=e.modules.rotation?k:0,t.instanceData[a+15]=e.modules.rotation?D:0,t.instanceData[a+16]=e.modules.rotation?O:0,e.mode===`mesh`){let e=nm(p.size3D.x,this.rng),n=nm(p.size3D.y,this.rng),r=nm(p.size3D.z,this.rng);t.instanceData[a+11]=Math.max(0,Y(p.size3D.x,s,e)),t.instanceData[a+12]=Math.max(0,Y(p.size3D.y,s,n)),t.instanceData[a+17]=Math.max(0,Y(p.size3D.z,s,r))}else if(p.startSizeSeparateAxes){let e=nm(p.size3D.x,this.rng),n=nm(p.size3D.y,this.rng);t.instanceData[a+11]=Math.max(0,Y(p.size3D.x,s,e)),t.instanceData[a+12]=Math.max(0,Y(p.size3D.y,s,n)),t.instanceData[a+17]=t.instanceData[a+11]}else{let e=Math.max(0,Y(p.size,s,nm(p.size,this.rng)));t.instanceData[a+11]=e,t.instanceData[a+12]=e,t.instanceData[a+17]=e}t.activeCount++,this.recordParticleBirthEvent(e,t,Math.max(0,this.effect.emitters.indexOf(e)),y,n)}clearFrameEvents(){this.events.length=0,this.subEmitterRequests.length=0}recordParticleFrameEvents(e,t,n,r,i){if(t.activeCount<=0||!e.modules.triggers&&!e.modules.subEmitters&&!e.modules.collision)return;let a=i-Math.max(0,r);for(let r=0;r<t.activeCount;r++)this.recordNormalizedTimeEventIfDue(e,t,n,r,a,i),this.recordCollisionEventIfDue(e,t,n,r,a,i)}recordParticleBirthEvent(e,t,n,r,i){let a=this.createParticleEvent(`birth`,e,t,n,r,i,0,0,e.advanced.triggers.birthEvent);if(e.modules.triggers&&a.eventName&&this.pushParticleEvent(a),this.queueSubEmitterRequest(a,t,e.advanced.subEmitters.birth),e.modules.triggers&&e.advanced.triggers.normalizedTime<=0){t.triggerFlagsData[r]|=Xd;let e={...a,kind:`normalizedTime`,eventName:`normalized-time`};this.pushParticleEvent(e)}}recordParticleDeathEvent(e,t,n,r,i){let a=r*18,o=t.instanceData[a+3]??i,s=Math.max(.001,t.instanceData[a+7]??.001),c=this.createParticleEvent(`death`,e,t,n,r,i,Math.max(0,i-o),1,e.advanced.triggers.deathEvent);e.modules.triggers&&c.eventName&&this.pushParticleEvent(c),e.modules.triggers&&e.advanced.triggers.normalizedTime>=1&&(t.triggerFlagsData[r]&Xd)===0&&(t.triggerFlagsData[r]|=Xd,this.pushParticleEvent({...c,kind:`normalizedTime`,eventName:`normalized-time`,particleAge:s,normalizedAge:1})),this.queueSubEmitterRequest(c,t,e.advanced.subEmitters.death)}recordNormalizedTimeEventIfDue(e,t,n,r,i,a){if(!e.modules.triggers)return;let o=e.advanced.triggers.normalizedTime;if(o<=0||o>=1)return;let s=t.triggerFlagsData[r]??0;if(e.advanced.triggers.oneShot&&s&Xd)return;let c=r*18,l=t.instanceData[c+3]??0,u=Math.max(.001,t.instanceData[c+7]??.001),d=Q((i-l)/u,0,1),f=Q((a-l)/u,0,1);if(!(e.advanced.triggers.oneShot||d<o?d<o-Yd&&f+Yd>=o:f+Yd>=o))return;t.triggerFlagsData[r]|=Xd;let p=l+u*o,m=this.createParticleEvent(`normalizedTime`,e,t,n,r,p,u*o,o,`normalized-time`);this.pushParticleEvent(m)}recordCollisionEventIfDue(e,t,n,r,i,a){if(!e.modules.collision)return;let o=e.advanced.collision;if(o.mode!==`plane`)return;let s=e.modules.subEmitters&&!!e.advanced.subEmitters.collision.effectFile;if(!e.modules.triggers&&!s||(t.triggerFlagsData[r]??0)&Zd)return;let c=r*18,l=t.instanceData[c+3]??0,u=Math.max(.001,t.instanceData[c+7]??.001),d=Q(i-l,0,u),f=Q(a-l,0,u);if(f<=0)return;let p=zp(e,t,r,d,d/u,this.position),m=zp(e,t,r,f,f/u,this.position),h=o.planeY+o.radius;if(!(p[1]>=h&&m[1]<h))return;t.triggerFlagsData[r]|=Zd;let g=this.createParticleEvent(`collision`,e,t,n,r,a,f,f/u,`collision`);e.modules.triggers&&this.pushParticleEvent(g),this.queueSubEmitterRequest(g,t,e.advanced.subEmitters.collision)}createParticleEvent(e,t,n,r,i,a,o,s,c){let l=i*18,u=n.instanceData[l+8]??0;return{kind:e,eventName:c,effectId:this.effect.id,emitterId:t.id,emitterIndex:r,particleIndex:i,particleSeed:u,timeSeconds:a,effectAge:Math.max(0,a-this.startedAt),particleAge:o,normalizedAge:Q(s,0,1),position:zp(t,n,i,o,s,this.position),velocity:Bp(t,n,i,o,s,this.position)}}pushParticleEvent(e){this.events.length>=this.maxEventsPerFrame||this.events.push(e)}queueSubEmitterRequest(e,t,n){let r=this.effect.emitters[e.emitterIndex];r?.modules.subEmitters&&(!n.effectFile||this.subEmitterDepth>=this.maxSubEmitterDepth||this.subEmitterRequests.length>=this.maxSubEmitterRequestsPerFrame||n.probability<=0||Up(e,n.effectFile)>n.probability||this.subEmitterRequests.push({hook:e.kind,effectFile:n.effectFile,sourceEffectId:e.effectId,sourceEmitterId:e.emitterId,sourceEmitterIndex:e.emitterIndex,sourceParticleIndex:e.particleIndex,sourceParticleSeed:e.particleSeed,timeSeconds:e.timeSeconds,position:[...e.position],velocity:[...e.velocity],normalizedAge:e.normalizedAge,inheritColor:n.inheritColor,inheritSize:n.inheritSize,inheritedColor:n.inheritColor?Vp(r,e.normalizedAge):null,inheritedSize:n.inheritSize?Hp(r,t,e.particleIndex,e.normalizedAge):null,depth:this.subEmitterDepth,nextDepth:this.subEmitterDepth+1,maxDepth:this.maxSubEmitterDepth}))}resizeStates(){for(;this.states.length<this.effect.emitters.length;){let e=this.effect.emitters[this.states.length];this.states.push(new Op(e.maxParticles))}for(let e=0;e<this.effect.emitters.length;e++){let t=this.effect.emitters[e],n=this.states[e];n.capacity!==t.maxParticles&&(this.states[e]=n.cloneWithCapacity(t.maxParticles))}this.states.length=this.effect.emitters.length}refreshStats(){let e=0,t=0,n=0;for(let r of this.states)e+=r.activeCount,t+=r.emittedLastFrame,n+=r.uploadBytesLastFrame;this.stats.activeParticles=e,this.stats.emittedLastFrame=t,this.stats.uploadBytesLastFrame=n}refreshCapacity(){let e=0;for(let t of this.states)e+=t.capacity;this.stats.capacity=e}};function Ap(e,t){return Q(t.age/Math.max(.001,e.duration),0,1)}function jp(e,t,n,r,i,a,o={position:[0,0,0],velocity:[0,0,0]},s=1){return Mp(e,t,n,r,i,a,o,s),Lp(e,t,n,o.position,o.velocity,a),o}function Mp(e,t,n,r,i,a,o={position:[0,0,0],velocity:[0,0,0]},s=1){let c=n*18,l=Ap(e,t),u=t.instanceData[c+8]??.5,d=e.modules.velocity?Y(e.forces.dragValue,i,u,l):0,f=e.modules.velocity?Y(e.forces.gravityValue,i,u,l):0,p=Math.max(0,1-Math.max(0,d)*r),m=Tp(s),h=(t.instanceData[c+4]??0)*m,g=(t.instanceData[c+5]??0)*m,_=(t.instanceData[c+6]??0)*m,v=e.advanced.velocityOverLifetime.speedModifier,y=e.modules.velocityOverLifetime?Y(v,i,u,l):1,b=e.modules.velocityOverLifetime?Bd(v,i,u,l):1,x=o.velocity;x[0]=h*y,x[1]=g*y-f*r*2,x[2]=_*y;let S=o.position;return S[0]=(t.instanceData[c+0]??0)+h*r*p*b,S[1]=(t.instanceData[c+1]??0)+g*r*p*b-f*r*r,S[2]=(t.instanceData[c+2]??0)+_*r*p*b,e.modules.velocityOverLifetime&&Rp(e,t,n,r,i,l,u,y,b,S,x,a,o.scratchA??[0,0,0],o.scratchB??[0,0,0]),o}function Np(e,t){return!!((e.runtimeFlagsData[t]??0)&1)}function Pp(e,t,n,r){if(!Np(t,n))return;let{scale:i,rotation:a}=e.spawn;rm(r[0]*i[0],r[1]*i[1],r[2]*i[2],a,r)}function Fp(e,t){Ip(t,e.rotation,t);for(let n=0;n<3;n++)t[n]=e.scale[n]>1e-6?t[n]/e.scale[n]:0}function Ip(e,t,n){let[r,i,a]=t.map(am),o=Math.cos(a),s=Math.sin(a),c=e[0]*o+e[1]*s,l=-e[0]*s+e[1]*o,u=Math.cos(i),d=Math.sin(i),f=c*u+e[2]*d,p=-c*d+e[2]*u,m=Math.cos(r),h=Math.sin(r);n[0]=f,n[1]=l*m+p*h,n[2]=-l*h+p*m}function Lp(e,t,n,r,i,a){if(!Np(t,n))return;Pp(e,t,n,r),Pp(e,t,n,i);let o=n*3;for(let n=0;n<3;n++)r[n]+=e.spawn.position[n]+(a?.[n]??t.spawnOriginData[o+n]??0)}function Rp(e,t,n,r,i,a,o,s,c,l,u,d,f=[0,0,0],p=[0,0,0]){let m=e.advanced.velocityOverLifetime,h=Np(t,n)&&m.space===`world`;h&&Lp(e,t,n,l,u,d);let g=Np(t,n)&&!h,_=m.space===`local`&&!g,v=f;v[0]=Y(m.linear.x,i,o,a),v[1]=Y(m.linear.y,i,o,a),v[2]=Y(m.linear.z,i,o,a);let y=p;_?rm(v[0],v[1],v[2],e.spawn.rotation,y):(y[0]=v[0],y[1]=v[1],y[2]=v[2]),u[0]+=y[0]*s,u[1]+=y[1]*s,u[2]+=y[2]*s,l[0]+=y[0]*r*c,l[1]+=y[1]*r*c,l[2]+=y[2]*r*c;let b=n*3,x=g?0:_?d?.[0]??t.spawnOriginData[b+0]??0:t.spawnOriginData[b+0]??0,S=g?0:_?d?.[1]??t.spawnOriginData[b+1]??0:t.spawnOriginData[b+1]??0,C=g?0:_?d?.[2]??t.spawnOriginData[b+2]??0:t.spawnOriginData[b+2]??0,w=f;w[0]=Y(m.orbitalOffset.x,i,o,a),w[1]=Y(m.orbitalOffset.y,i,o,a),w[2]=Y(m.orbitalOffset.z,i,o,a);let T=p;_?rm(w[0],w[1],w[2],e.spawn.rotation,T):(T[0]=w[0],T[1]=w[1],T[2]=w[2]);let E=x+T[0],D=S+T[1],O=C+T[2],k=Y(m.orbital.x,i,o,a),A=Y(m.orbital.y,i,o,a),ee=Y(m.orbital.z,i,o,a);if(k!==0||A!==0||ee!==0){g||rm(w[0]*e.spawn.scale[0],w[1]*e.spawn.scale[1],w[2]*e.spawn.scale[2],e.spawn.rotation,T);let n=g?T[0]:(d?.[0]??t.spawnOriginData[b]??0)+e.spawn.position[0]+T[0],i=g?T[1]:(d?.[1]??t.spawnOriginData[b+1]??0)+e.spawn.position[1]+T[1],a=g?T[2]:(d?.[2]??t.spawnOriginData[b+2]??0)+e.spawn.position[2]+T[2];f[0]=l[0]-n,f[1]=l[1]-i,f[2]=l[2]-a,_&&Ip(f,e.spawn.rotation,f);let[o,m,h]=f,v=A*h-ee*m,y=ee*o-k*h,x=k*m-A*o,S=k*r*c,C=Math.cos(S),E=Math.sin(S),D=m*C-h*E,O=m*E+h*C;m=D,h=O;let j=A*r*c,M=Math.cos(j),te=Math.sin(j),ne=o*M+h*te,re=-o*te+h*M;o=ne,h=re;let ie=ee*r*c,ae=Math.cos(ie),oe=Math.sin(ie),se=o*ae-m*oe;D=o*oe+m*ae,o=se,m=D,_&&(rm(o,m,h,e.spawn.rotation,f),[o,m,h]=f,rm(v,y,x,e.spawn.rotation,p),[v,y,x]=p),l[0]=n+o,l[1]=i+m,l[2]=a+h,u[0]+=v*s,u[1]+=y*s,u[2]+=x*s}let j=Y(m.radial,i,o,a);if(j!==0){let e=l[0]-E,t=l[1]-D,n=l[2]-O,i=Math.hypot(e,t,n);if(i>1e-6){let a=1/i,o=e*a,d=t*a,f=n*a;l[0]+=o*j*r*c,l[1]+=d*j*r*c,l[2]+=f*j*r*c,u[0]+=o*j*s,u[1]+=d*j*s,u[2]+=f*j*s}}if(h){let r=n*3;for(let n=0;n<3;n++)l[n]-=e.spawn.position[n]+(d?.[n]??t.spawnOriginData[r+n]??0);Fp(e.spawn,l),Fp(e.spawn,u)}}function zp(e,t,n,r,i,a){return jp(e,t,n,r,i,a).position}function Bp(e,t,n,r,i,a){return jp(e,t,n,r,i,a).velocity}function Vp(e,t){return e.modules.color?[...ap(e.color.gradient,t),up(e.color.gradient,t)]:[1,1,1,1]}function Hp(e,t,n,r){let i=n*18,a=Math.max(0,t.instanceData[i+11]??1);if(!e.modules.size)return a;let o=e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue;return a*Math.max(0,Y(o,r,.5))}function Up(e,t){let n=Math.floor(e.particleSeed*4294967295)^cm(`${e.kind}:${t}:${e.effectId}:${e.emitterId}:${e.particleIndex}`);return(Math.imul(n>>>0,1664525)+1013904223>>>0)/4294967296}function Wp(e,t,n){return t+(n-t)*e.next()}function Gp(e,t,n){let r=Math.max(0,t),i=Math.abs(e);if(i<=r)return e;let a=r+(i-r)*(1-n);return Math.sign(e)*a}function Kp(e,t,n,r){return Number.isFinite(e)?!r.hasPreviousEffectAge&&e===0?n>=0:e>t+Yd&&e<=n+Yd:!1}function qp(e,t,n,r,i,a){let o=n,s=r,c=i;Math.hypot(o,s,c)<=1e-6&&(o=a[0],s=a[1],c=a[2]);let l=Math.hypot(o,s,c);if(l<=1e-6){e[t+0]=0,e[t+1]=1,e[t+2]=0;return}let u=1/l;e[t+0]=o*u,e[t+1]=s*u,e[t+2]=c*u}function Jp(e){let t=e.positions,n=Math.floor(t.length/3);if(n<1)return null;let r=new Float32Array(n*3);for(let e=0;e<r.length;e++)r[e]=t[e];let i=null;if(e.normals&&e.normals.length>=n*3){i=new Float32Array(n*3);for(let t=0;t<i.length;t++)i[t]=e.normals[t]}let a=null;if(e.indices&&e.indices.length>=3){let t=e.indices.length-e.indices.length%3;a=new Uint32Array(t);for(let r=0;r<t;r++){let t=Math.floor(e.indices[r]);if(t<0||t>=n)return null;a[r]=t}}else if(n>=3){let e=n-n%3;a=new Uint32Array(e);for(let t=0;t<e;t++)a[t]=t}let o=a?a.length/3:0,s=new Float32Array(o),c=o>0&&!i?new Float32Array(o*3):null,l=0;for(let e=0;e<o;e++){let t=a[e*3+0]*3,n=a[e*3+1]*3,i=a[e*3+2]*3,o=r[n+0]-r[t+0],u=r[n+1]-r[t+1],d=r[n+2]-r[t+2],f=r[i+0]-r[t+0],p=r[i+1]-r[t+1],m=r[i+2]-r[t+2],h=u*m-d*p,g=d*f-o*m,_=o*p-u*f,v=Math.hypot(h,g,_);if(l+=v*.5,s[e]=l,c){let t=v>1e-6?1/v:0;c[e*3+0]=h*t,c[e*3+1]=g*t,c[e*3+2]=_*t}}return{positions:r,normals:i,indices:a,faceNormals:c,triangleCdf:s,totalArea:l,vertexCount:n,triangleCount:o}}function Yp(e,t,n,r,i){if(!(t===`surface`&&e.triangleCount>0&&e.totalArea>1e-6)){let t=Math.min(e.vertexCount-1,Math.floor(n.next()*e.vertexCount));r[0]=e.positions[t*3+0],r[1]=e.positions[t*3+1],r[2]=e.positions[t*3+2],e.normals&&(i[0]=e.normals[t*3+0],i[1]=e.normals[t*3+1],i[2]=e.normals[t*3+2]);return}let a=n.next()*e.totalArea,o=0,s=e.triangleCount-1;for(;o<s;){let t=o+s>>1;e.triangleCdf[t]<a?o=t+1:s=t}let c=o,l=e.indices[c*3+0]*3,u=e.indices[c*3+1]*3,d=e.indices[c*3+2]*3,f=n.next(),p=n.next();f+p>1&&(f=1-f,p=1-p);let m=1-f-p,h=e.positions;r[0]=h[l]*m+h[u]*f+h[d]*p,r[1]=h[l+1]*m+h[u+1]*f+h[d+1]*p,r[2]=h[l+2]*m+h[u+2]*f+h[d+2]*p;let g=e.normals;g?(i[0]=g[l]*m+g[u]*f+g[d]*p,i[1]=g[l+1]*m+g[u+1]*f+g[d+1]*p,i[2]=g[l+2]*m+g[u+2]*f+g[d+2]*p):e.faceNormals&&(i[0]=e.faceNormals[c*3+0],i[1]=e.faceNormals[c*3+1],i[2]=e.faceNormals[c*3+2])}function Xp(){return{position:[0,0,0],direction:[0,1,0]}}var Zp=[0,0,0],Qp=[0,1,0];function $p(e,t,n,r,i,a,o=null){let s=Math.max(0,Y(e.radiusValue,n,nm(e.radiusValue,t))),c=em(e,t,n,r,i),l=Math.cos(c),u=Math.sin(c),d=0,f=0,p=0,m=0,h=1,g=0;if(e.shape===`circle`){let n=tm(s,e.radiusThickness,t);d=l*n,p=u*n}else if(e.shape===`box`)d=(t.next()-.5)*e.box[0],f=(t.next()-.5)*e.box[1],p=(t.next()-.5)*e.box[2];else if(e.shape===`cone`){let n=Math.max(0,e.length),r=e.emitFrom===`volume`&&n>0?t.next():0;f=n*r;let i=s*(1-r),a=tm(i,e.radiusThickness,t),o=i>1e-6?a/i:0,c=am(e.angle)*o,_=Math.sin(c);d=l*a,p=u*a,m=l*_,h=Math.cos(c),g=u*_}else if(e.shape===`mesh`){if(o&&o.vertexCount>0){Zp[0]=0,Zp[1]=0,Zp[2]=0,Qp[0]=0,Qp[1]=1,Qp[2]=0,Yp(o,e.meshEmitFrom,t,Zp,Qp),d=Zp[0],f=Zp[1],p=Zp[2];let n=Math.hypot(Qp[0],Qp[1],Qp[2]);if(n>1e-6){let e=1/n;m=Qp[0]*e,h=Qp[1]*e,g=Qp[2]*e}}}else if(e.shape===`sphere`||e.shape===`hemisphere`){let n=e.shape===`hemisphere`?t.next():t.next()*2-1,r=Math.sqrt(Math.max(0,1-n*n)),i=l*r,a=n,o=u*r,c=tm(s,e.radiusThickness,t);d=i*c,f=a*c,p=o*c,m=i,h=a,g=o}let _=Q(e.sphericalDirectionAmount,0,1);if(_>0){let e=m,t=h,n=g,r=Math.hypot(d,f,p);if(r>1e-6){let i=1/r;e=d*i,t=f*i,n=p*i}let i=m+(e-m)*_,a=h+(t-h)*_,o=g+(n-g)*_,s=Math.hypot(i,a,o);if(s>1e-6){let e=1/s;m=i*e,h=a*e,g=o*e}}let v=Q(e.randomDirectionAmount,0,1);if(v>0){let e=t.next()*2-1,n=t.next()*qd,r=Math.sqrt(Math.max(0,1-e*e)),i=Math.cos(n)*r,a=Math.sin(n)*r,o=m+(i-m)*v,s=h+(e-h)*v,c=g+(a-g)*v,l=Math.hypot(o,s,c);if(l>1e-6){let e=1/l;m=o*e,h=s*e,g=c*e}}let y=Math.max(0,e.randomPositionAmount);if(y>0){let e=t.next()*2-1,n=t.next()*qd,r=Math.sqrt(Math.max(0,1-e*e)),i=Math.cbrt(t.next())*y;d+=Math.cos(n)*r*i,f+=e*i,p+=Math.sin(n)*r*i}e.simulationSpace===`local`?(a.position[0]=d,a.position[1]=f,a.position[2]=p,a.direction[0]=m,a.direction[1]=h,a.direction[2]=g,im(a.direction,0,1,0)):(rm(d*e.scale[0],f*e.scale[1],p*e.scale[2],e.rotation,a.position),a.position[0]+=e.position[0],a.position[1]+=e.position[1],a.position[2]+=e.position[2],rm(m,h,g,e.rotation,a.direction),im(a.direction,0,1,0))}function em(e,t,n,r,i){let a=Q(e.arc,0,360),o=a>=359.999,s=Y(e.arcSpeedValue,n,.5)*n,c=a>1e-6?s/a:0,l;if(e.arcMode===`loop`)l=om(n+c,1);else if(e.arcMode===`pingPong`)l=sm(n+c);else if(e.arcMode===`burstSpread`){if(i<=1)l=.5;else{let e=o?i:i-1;l=r/Math.max(1,e)}}else l=t.next();let u=Q(e.arcSpread,0,1);if(u>0){let e=Math.max(1,Math.round(1/u));l=Math.round(l*e)/e}let d=e.arcMode===`random`||e.arcMode===`burstSpread`?s:0;return am(om(a*Q(l,0,1)+d,360))}function tm(e,t,n){let r=Math.max(0,e),i=Q(t,0,1);if(r<=0||i<=0)return r;let a=r*(1-i);return Math.sqrt(a*a+(r*r-a*a)*n.next())}function nm(e,t){return e.mode===`random`||e.mode===`randomCurve`?t.next():.5}function rm(e,t,n,r,i){let a=am(r[0]),o=Math.cos(a),s=Math.sin(a),c=t*o-n*s,l=t*s+n*o,u=am(r[1]),d=Math.cos(u),f=Math.sin(u),p=e*d-l*f,m=e*f+l*d,h=am(r[2]),g=Math.cos(h),_=Math.sin(h);i[0]=p*g-c*_,i[1]=p*_+c*g,i[2]=m}function im(e,t,n,r){let i=Math.hypot(e[0],e[1],e[2]);if(i<=1e-6){e[0]=t,e[1]=n,e[2]=r;return}let a=1/i;e[0]*=a,e[1]*=a,e[2]*=a}function am(e){return e*Math.PI/180}function om(e,t){return(e%t+t)%t}function sm(e){let t=om(e*2,2);return t<=1?t:2-t}function cm(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var lm=[`normal`,`roughness`,`metallic`],um=[`Param1`,`Param2`,`Param3`,`Param4`],dm=`param.constant.time.textureSample.particleSubUV.uv.tilingOffset.polarCoordinates.rotateUV.panner.multiply.add.subtract.divide.lerp.oneMinus.clamp.step.smoothstep.power.min.max.remap.split.combine.swizzle.desaturate.fresnel.sphereMask.twoSidedSign.abs.frac.floor.ceil.round.sign.sqrt.length.normalize.dot.sine.cosine.if.noise.vectorNoise.particleMacroUV.antialiasedTextureMask.sphericalParticleOpacity.gradientRamp.dynamicParameter.particleColor.particleRelativeTime.particleSpeed.particleRandom.particleSize.particleDirection.particlePosition.sceneWorldNormal.sceneWorldPosition.sceneViewDirection.mainLightDirection.mainLightColor.sceneAmbientColor.sceneDiffuseLighting.unpackNormal.subgraph.output`.split(`.`),fm=new Set([`sceneWorldNormal`,`sceneWorldPosition`,`sceneViewDirection`,`mainLightDirection`,`mainLightColor`,`sceneAmbientColor`,`sceneDiffuseLighting`]);new Set(dm);function pm(e){switch(e){case`float`:return 0;case`vec2`:return[0,0,0,0];case`vec3`:return[0,0,0,0];case`color`:return[1,1,1,1];case`texture`:return``;case`bool`:return!1}}function mm(e,t,n){switch(e){case`float`:return J(t,n);case`vec2`:case`vec3`:case`color`:{let r=Array.isArray(n)?n:pm(e),[i,a]=e===`color`?[0,1]:[-1e5,1e5];return yu(t,r,i,a)}case`texture`:return typeof t==`string`?t:n;case`bool`:return typeof t==`boolean`?t:n}}function hm(e){return e===`masked`||e===`opaque`}function gm(e,t){return t===`normal`?`alpha`:t===`add`?`additive`:t??e}function _m(e){return um.every((t,n)=>e?.[n]===t)}function vm(e,t,n){let r=e.params.find(e=>e.name===n);if(r)return ym(r)&&t.mainTex?.path?t.mainTex.path:Object.prototype.hasOwnProperty.call(t.paramOverrides,n)?mm(r.type,t.paramOverrides[n],r.default):r.default}function ym(e){return e.type===`texture`&&(e.builtinRole===`mainTex`||e.name===`MainTex`)}function bm(e,t){if(!t)return``;if(t.mainTex?.path)return t.mainTex.path;let n=e?.params.find(ym);return typeof n?.default==`string`?n.default:``}function xm(e,t,n,r,i){let a=n.inputs.tex;if(a){let n=i.get(a),o=n?r.get(n.source):void 0;if(o?.type===`param`){let n=typeof o.params.name==`string`?o.params.name:``,r=e.params.find(e=>e.name===n);if(r?.type===`texture`){let i=ym(r),a=vm(e,t,n);return{path:typeof a==`string`?a:``,isMainTex:i}}}}let o=n.params.tex;return{path:typeof o==`string`?o:``,isMainTex:!1}}function Sm(e){let t={name:e.name,type:e.type,group:e.group,default:e.default};return e.inputId!==void 0&&(t.inputId=e.inputId),e.scope!==`per-material`&&(t.scope=e.scope),e.sliderMin!==void 0&&(t.sliderMin=e.sliderMin),e.sliderMax!==void 0&&(t.sliderMax=e.sliderMax),e.clampMin!==void 0&&(t.clampMin=e.clampMin),e.clampMax!==void 0&&(t.clampMax=e.clampMax),e.perParticle&&(t.perParticle=!0),e.perParticleFeed&&(t.perParticleFeed=e.perParticleFeed),e.builtinRole&&(t.builtinRole=e.builtinRole),t}function Cm(e){let t={id:e.id,name:e.name,blend:e.blend,nodes:e.nodes,edges:e.edges,params:e.params.map(Sm),outputs:e.outputs};return _m(e.dynamicChannelLabels)||(t.dynamicChannelLabels=e.dynamicChannelLabels),e.opacityMaskClipValue!==void 0&&e.opacityMaskClipValue!==.333&&(t.opacityMaskClipValue=e.opacityMaskClipValue),e.side!==void 0&&(t.side=e.side),e.shadingModel===`lit`&&(t.shadingModel=`lit`),e.subgraph&&(t.subgraph=e.subgraph),e.builtin&&(t.builtin=e.builtin),t}function wm(){return{id:Cu,name:`Sprite Master`,blend:`normal`,nodes:[],edges:[],params:[{name:`MainTex`,type:`texture`,group:`Texture`,default:``,scope:`per-material`,builtinRole:`mainTex`},{name:`Tint`,type:`color`,group:`Color`,default:[1,1,1,1],scope:`per-material`},{name:`Emissive`,type:`float`,group:`Color`,default:0,sliderMin:0,sliderMax:4,clampMin:0,clampMax:16,scope:`per-material`},{name:`Opacity`,type:`float`,group:`Color`,default:1,sliderMin:0,sliderMax:1,clampMin:0,clampMax:1,scope:`per-material`}],outputs:{baseColor:null,emissive:null,opacity:null},builtin:`sprite-master`}}function Tm(e){return e.builtin===`sprite-master`||e.id===`sprite-master`}function Em(e){return e!==`textureAlpha`}var Dm=.2126,Om=.7152,km=.0722;function Am(e,t,n){if(t===`textureAlpha`){if(!n)return;for(let t=3;t<e.length;t+=4)e[t]=255-e[t]}else for(let r=0;r+3<e.length;r+=4){let i=e[r],a=e[r+1],o=e[r+2],s;switch(t){case`red`:s=i;break;case`green`:s=a;break;case`blue`:s=o;break;case`luminance`:s=Dm*i+Om*a+km*o;break;case`inverseLuminance`:s=255-(Dm*i+Om*a+km*o);break;case`constant`:s=255;break;default:s=e[r+3]}e[r+3]=n?255-s:s}}function jm(e,t,n,r){let i=`${e}|${t}|${+!!n}`;return r===void 0?i:`${i}|${r}`}function Mm(e,t,n,r=[1,1,1,1]){let i=e.colorOverLifetime,a=e.colorOverTrail;ap(i,t,r);let o=r[0],s=r[1],c=r[2];return ap(a,n,r),r[0]*=o,r[1]*=s,r[2]*=c,r[3]=up(i,t)*up(a,n),r}var Nm=[0,1,0],Pm=[0,0,1];function Fm(e,t,n,r){return e+t*n+r}function Im(e){return e+Math.PI*.5}function Lm(e){return-e}function Rm(e,t,n){return Math.max(t,Math.min(n,e))}function zm(e,t,n){return e+(t-e)*n}function Bm(e,t,n){let r=Rm((n-e)/Math.max(1e-6,t-e),0,1);return r*r*(3-2*r)}var Vm=new Set([`value`,`fastGradient`,`perlinGradient`,`simplex`,`voronoi`]),Hm=new Set([`cellnoise`,`perlin3d`,`perlinGradient`,`perlinCurl`,`voronoi`]);function Um(e,t){return Math.round(J(e,t))}function Wm(e){return{kind:Vm.has(e.function)?e.function:`perlinGradient`,scale:Math.max(1e-4,J(e.scale,16)),repeatSize:Math.max(1,Um(e.repeatSize,256)),levels:Math.max(1,Math.min(8,Um(e.levels,1))),levelScale:J(e.levelScale,2),gain:J(e.gain,.5),turbulence:e.turbulence===!0,tiling:e.tiling!==!1,seed:Um(e.seed,0),outputMin:J(e.outputMin,0),outputMax:J(e.outputMax,1)}}function Gm(e){return{kind:Hm.has(e.function)?e.function:`perlinCurl`,scale:Math.max(1e-4,J(e.scale,8)),tileSize:Math.max(1,Um(e.tileSize,256)),tiling:e.tiling!==!1,seed:Um(e.seed,0),normalizeOutput:e.normalizeOutput!==!1}}function Km(e){let t=e|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function qm(e,t,n){return Km(Math.imul(e|0,522133279)^Math.imul(t|0,2246822507)^Math.imul(n|0,3266489909)|0)/4294967296}function Jm(e,t){return t<=0?e:(e%t+t)%t}function Ym(e,t){return t>0?Jm(e,t):e}function Xm(e){return e*e*e*(e*(e*6-15)+10)}function $(e,t,n){return e+(t-e)*n}function Zm(e){return e<0?0:e>1?1:e}function Qm(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=Xm(o),l=Xm(s),u=qm(Ym(i,r),Ym(a,r),n),d=qm(Ym(i+1,r),Ym(a,r),n),f=qm(Ym(i,r),Ym(a+1,r),n),p=qm(Ym(i+1,r),Ym(a+1,r),n);return $($(u,d,c),$(f,p,c),l)}function $m(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=Xm(o),l=Xm(s),u=(e,t,i,a)=>{let o=qm(Ym(e,r),Ym(t,r),n)*Math.PI*2;return Math.cos(o)*i+Math.sin(o)*a},d=u(i,a,o,s),f=u(i+1,a,o-1,s),p=u(i,a+1,o,s-1),m=u(i+1,a+1,o-1,s-1);return Zm($($(d,f,c),$(p,m,c),l)*.7071+.5)}function eh(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=1/0;for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++){let l=i+c,u=a+s,d=Ym(l,r),f=Ym(u,r),p=qm(d,f,n),m=qm(d,f,n^2654435769),h=l+p-e,g=u+m-t,_=h*h+g*g;_<o&&(o=_)}return Math.min(1,Math.sqrt(o))}function th(e){switch(e){case`value`:return Qm;case`voronoi`:return eh;default:return $m}}function nh(e,t,n){let r=e.scale,i=e.tiling?e.repeatSize:0,a=th(e.kind),o=1,s=1,c=0,l=0;for(let u=0;u<e.levels;u++){let d=r*s,f=a(t*d,n*d,e.seed+u*101,i);e.turbulence&&(f=Math.abs(f*2-1)),c+=f*o,l+=o,o*=e.gain,s*=e.levelScale}let u=Zm(l>0?c/l:c);return e.outputMin+u*(e.outputMax-e.outputMin)}function rh(e,t,n){let r=e.scale;return ih(e,t,n,r,e.tiling?e.tileSize:0)}function ih(e,t,n,r,i){let a=t*r,o=n*r,s=e.seed,c=t=>e.normalizeOutput?Zm(t*.5+.5):t;switch(e.kind){case`cellnoise`:{let e=Math.floor(a),t=Math.floor(o),n=Ym(e,i),r=Ym(t,i);return[qm(n,r,s),qm(n,r,s^1757159915),qm(n,r,s^461845907),1]}case`voronoi`:{let e=Math.floor(a),t=Math.floor(o),n=1/0,r=0,c=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){let d=e+u,f=t+l,p=Ym(d,i),m=Ym(f,i),h=d+qm(p,m,s),g=f+qm(p,m,s^2654435769),_=(h-a)*(h-a)+(g-o)*(g-o);_<n&&(n=_,r=p,c=m)}return[qm(r,c,s^74565),qm(r,c,s^424090),qm(r,c,s^773615),Math.min(1,Math.sqrt(n))]}case`perlinCurl`:{let e=.01,t=(e,t)=>$m(e,t,s,i)*2-1,n=(t(a+e,o)-t(a-e,o))/(2*e),r=(t(a,o+e)-t(a,o-e))/(2*e),l=-n,u=Math.hypot(r,l)||1;return r/=u,l/=u,[c(r),c(l),.5,1]}default:{let e=$m(a,o,s,i)*2-1,t=$m(a,o,s^1374496523,i)*2-1,n=$m(a,o,s^625341585,i)*2-1;return[c(e),c(t),c(n),1]}}}function ah(e,t,n,r){return Km(Math.imul(e|0,522133279)^Math.imul(t|0,2246822507)^Math.imul(n|0,668265263)^Math.imul(r|0,3266489909)|0)/4294967296}var oh=.4;function sh(e){let t=e*(e-1);return 30*t*t}var ch=[0,0,0];function lh(e,t,n,r,i){let a=ah(e,t,n,r)*Math.PI*2,o=ah(e,t,n,r^2654435769)*2-1,s=Math.sqrt(Math.max(0,1-o*o));i[0]=Math.cos(a)*s,i[1]=Math.sin(a)*s,i[2]=o}function uh(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=Math.floor(n),c=e-a,l=t-o,u=n-s,d=Xm(c),f=Xm(l),p=Xm(u),m=ch;lh(a,o,s,r,m);let h=m[0],g=m[1],_=m[2],v=h*c+g*l+_*u;lh(a+1,o,s,r,m);let y=m[0],b=m[1],x=m[2],S=y*(c-1)+b*l+x*u;lh(a,o+1,s,r,m);let C=m[0],w=m[1],T=m[2],E=C*c+w*(l-1)+T*u;lh(a+1,o+1,s,r,m);let D=m[0],O=m[1],k=m[2],A=D*(c-1)+O*(l-1)+k*u;lh(a,o,s+1,r,m);let ee=m[0],j=m[1],M=m[2],te=ee*c+j*l+M*(u-1);lh(a+1,o,s+1,r,m);let ne=m[0],re=m[1],ie=m[2],ae=ne*(c-1)+re*l+ie*(u-1);lh(a,o+1,s+1,r,m);let oe=m[0],se=m[1],ce=m[2],le=oe*c+se*(l-1)+ce*(u-1);lh(a+1,o+1,s+1,r,m);let ue=m[0],N=m[1],de=m[2],fe=ue*(c-1)+N*(l-1)+de*(u-1),pe=$($($(h,y,d),$(C,D,d),f),$($(ee,ne,d),$(oe,ue,d),f),p),me=$($($(g,b,d),$(w,O,d),f),$($(j,re,d),$(se,N,d),f),p),he=$($($(_,x,d),$(T,k,d),f),$($(M,ie,d),$(ce,de,d),f),p),ge=$($(S-v,A-E,f),$(ae-te,fe-le,f),p),_e=$($(E-v,A-S,d),$(le-te,fe-ae,d),p),ve=$($(te-v,ae-S,d),$(le-E,fe-A,d),f);i[0]=(pe+sh(c)*ge)*1.155,i[1]=(me+sh(l)*_e)*1.155,i[2]=(he+sh(u)*ve)*1.155}var dh=[0,0,0];function fh(e,t,n,r,i){let a=r|0,o=r^1374496523,s=r^625341585,c=dh;uh(e,t,n,a,c);let l=c[1],u=c[2];uh(e,t,n,o,c);let d=c[0],f=c[2];uh(e,t,n,s,c);let p=c[0];i[0]=(c[1]-f)*oh,i[1]=(u-p)*oh,i[2]=(d-l)*oh}function ph(e,t){e.modules.forceOverLifetime&&mh(e.advanced.forceOverLifetime,t),e.modules.externalForces&&hh(e.advanced.externalForces,t),e.modules.noise&&Ch(e.advanced.noise,t)}function mh(e,{seed:t,normalizedAge:n,loopAge:r,ageSeconds:i,world:a}){let o=Y(e.multiplier,n,t,r),s=Ih(t,11)*e.randomized[0],c=Ih(t,23)*e.randomized[1],l=Ih(t,37)*e.randomized[2],u=.5*i*i*o;a[0]+=(e.force[0]+s)*u,a[1]+=(e.force[1]+c)*u,a[2]+=(e.force[2]+l)*u}function hh(e,{seed:t,normalizedAge:n,loopAge:r,ageSeconds:i,world:a,velocity:o}){let s=Y(e.gravityMultiplier,n,t,r),c=Y(e.drag,n,t,r),l=.5*i*i;if(a[0]+=e.wind[0]*l,a[1]+=e.wind[1]*l-o[1]*Math.max(0,s-1)*l,a[2]+=e.wind[2]*l,c>0){let e=Math.max(0,1-c*i*.15);a[0]*=e,a[2]*=e}if(Math.abs(e.vortexStrength)>1e-4){let t=e.vortexStrength*i*.03,n=a[0],r=a[2];a[0]+=-r*t,a[2]+=n*t}}var gh=.1,_h=1e-6,vh=64,yh=1/120,bh={position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]},xh={seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:bh.position,velocity:bh.velocity},Sh=[0,0,0];function Ch(e,{seed:t,normalizedAge:n,loopAge:r,timeSeconds:i,world:a}){let o=Y(e.strength,n,t,r);if(o<=0)return;let s=Math.max(1e-4,e.frequency),c=o,l=0,u=0,d=0;if(e.mode===`curl`){let t=i*e.speed;for(let n=0;n<e.octaves;n++){let r=s*2**n;fh((a[0]+e.scroll[0]*t)*r+t*.35,(a[1]+e.scroll[1]*t)*r+t*.61,(a[2]+e.scroll[2]*t)*r+t*.83,n*101,Sh),l+=Sh[0]*c,u+=Sh[1]*c,d+=Sh[2]*c,c*=e.damping}}else{let n=i*e.speed+t*17.17;for(let r=0;r<e.octaves;r++){let i=s*2**r;l+=Math.sin((a[0]+e.scroll[0]*n+t)*i+r*5.31)*c,u+=Math.sin((a[1]+e.scroll[1]*n+t)*i+r*7.13)*c,d+=Math.sin((a[2]+e.scroll[2]*n+t)*i+r*3.77)*c,c*=e.damping}}let f=Math.min(1,Math.max(0,n/gh)),p=f*f*(3-2*f);a[0]+=l*p,a[1]+=u*p,a[2]+=d*p}function wh(e,t){let n=e.advanced.collision;if(n.mode!==`plane`)return!0;let r=t.world,i=t.velocity,a=n.planeY+n.radius,o=r[1];if(o<a-n.killBelow)return!1;if(o>=a)return!0;let s=e.modules.velocity?Y(e.forces.gravityValue,t.normalizedAge,t.seed,t.loopAge):0,c=Math.max(0,s),l=i[1],u=a-o,d=l*l-4*c*u,f=1-n.dampen,p=i[0],m=i[2];if(d<=0||l>=0)return r[1]=a,i[0]=p*f,i[1]=0,i[2]=m*f,!0;let h=Math.sqrt(d),g=2*u/(h-l);r[0]-=p*n.dampen*g,r[2]-=m*n.dampen*g,i[0]=p*f,i[2]=m*f;let _=n.bounce*h,v=g;if(c>_h&&_>_h)for(let e=0;e<vh;e++){let e=_/c;if(v<=e)break;if(v-=e,_*=n.bounce,_<=_h){_=0;break}}let y=c<=_h||v<=_/c;return _>_h&&y?(r[1]=a+_*v-c*v*v,i[1]=_-2*c*v):(r[1]=a,i[1]=0),!0}function Th(e,t,n,r,i,a,o,s,c,l,u,d){let f=yh;Eh(e,t,n,r+f,i,a+f,o,s,c,l,bh,xh);let p=1/f,m=bh.position;return d[0]=(m[0]-u[0])*p,d[1]=(m[1]-u[1])*p,d[2]=(m[2]-u[2])*p,d}function Eh(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.max(0,r),p=Math.min(1,Math.max(0,f/Math.max(.001,i)));Mp(e,t,n,f,p,c,u,l),d.seed=o,d.normalizedAge=p,d.loopAge=s,d.ageSeconds=f,d.timeSeconds=a,ph(e,d),Lp(e,t,n,u.position,u.velocity,c)}function Dh(e,t,n,r,i,a){let o=i?[...i]:e.modules.color?[...ap(e.color.gradient,t),up(e.color.gradient,t)]:[1,1,1,1];if(e.modules.colorBySpeed){let t=e.advanced.colorBySpeed,r=Iu(t.speedRange,n),i=[...ap(t.gradient,r),up(t.gradient,r)];o=Fh(o,i,t.blend)}return e.modules.lights&&(o=Ph(e.advanced.lights,t,n,r,o,a)),[Rh(o[0]),Rh(o[1]),Rh(o[2]),Rh(o[3])]}function Oh(e,t,n,r){if(!e.modules.sizeBySpeed)return 1;let i=e.advanced.sizeBySpeed,a=Iu(i.speedRange,t),o=Y(i.multiplier,a,n,r);return 1+(Math.max(0,o)-1)*i.blend}function kh(e,t,n,r,i){if(!e.modules.rotationBySpeed)return 0;let a=e.advanced.rotationBySpeed,o=Iu(a.speedRange,t);return Y(a.angularVelocity,o,r,i)*n*a.blend}function Ah(e,t,n,r,i){return e.modules.trails?jh(e.advanced.trails,t,n,r,i):{scaleX:1,scaleY:1,stretchesAlongMotion:!1}}function jh(e,t,n,r,i){let a=Math.max(0,Y(e.length,t,r,i)),o=Math.max(.01,Y(e.width,t,r,i)),s=Math.max(1,1+a*Math.max(0,n)*.12);return{scaleX:o,scaleY:s,stretchesAlongMotion:s>1.000001}}function Mh(e,t,n,r){let i=Math.max(1,Math.round(e.tiles[0])),a=Math.max(1,Math.round(e.tiles[1])),o=Math.max(1,i*a),s=Math.min(Math.max(0,Math.round(e.startFrame)),o-1),c=typeof e.endFrame==`number`&&Number.isFinite(e.endFrame)?Math.round(e.endFrame):o-1,l=Math.min(Math.max(s,c),o-1)-s+1,u=(e.randomStartFrame?Math.floor(Lh(n,71)*l):0)+Y(e.frameOverTime,t,n,r)*Math.max(0,e.cycles);return s+zh(Math.floor(u),l)}function Nh(e,t,n,r){let i=Math.max(1,Math.round(e.tiles[0])),a=Math.max(1,Math.round(e.tiles[1])),o=Math.max(1,i*a),s=Mh(e,t,n,r);return{frame:s,column:s%i,row:Math.floor(s/i),tilesX:i,tilesY:a,totalFrames:o}}function Ph(e,t,n,r,i,a){let o=Y(e.intensity,t,r,a);if(o<=0)return i;let s=Math.max(0,Y(e.radius,t,r,a)),c=o*(s>0?Math.min(1,s/(s+n)):1)*.35;return e.additive?[i[0]+e.color[0]*c,i[1]+e.color[1]*c,i[2]+e.color[2]*c,i[3]]:Fh(i,[...e.color,i[3]],c)}function Fh(e,t,n){return lp(e,t,n)}function Ih(e,t){return Lh(e,t)*2-1}function Lh(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function Rh(e){return Math.max(0,Math.min(1,e))}function zh(e,t){return(e%t+t)%t}function Bh(e,t=[]){if(!e.nodes.some(e=>e.type===`subgraph`))return e;if(t.length>=32||t.includes(e.id))throw Error(`Recursive material subgraph: ${[...t,e.id].join(` → `)}`);let n={...e,nodes:[...e.nodes],edges:[...e.edges],params:[...e.params]};for(let r of e.nodes.filter(e=>e.type===`subgraph`)){let i=r.params.graph;if(!i?.subgraph)throw Error(`Missing subgraph definition for ${r.id}`);let a=Bh(i,[...t,e.id]),o=`${r.id}/`,s=e=>o+e,c=e=>o+e,l=new Map;for(let e of i.params){let t=n.edges.find(t=>t.id===r.inputs[e.inputId??e.name]);t&&l.set(e.name,t)}let u=(e,t)=>{let n=a.nodes.find(t=>t.id===e),r=n?.type===`param`?l.get(String(n.params.name)):void 0;return r?{source:r.source,sourceHandle:r.sourceHandle}:{source:s(e),sourceHandle:t}},d=a.nodes.filter(e=>e.type!==`output`).map(e=>({...e,id:s(e.id),inputs:Object.fromEntries(Object.entries(e.inputs).map(([e,t])=>[e,t?c(t):null])),params:e.type===`param`?{...e.params,name:o+String(e.params.name)}:{...e.params}})),f=a.edges.filter(e=>a.nodes.find(t=>t.id===e.target)?.type!==`output`).map(e=>({...e,...u(e.source,e.sourceHandle),id:c(e.id),target:s(e.target)})),p=n.edges.filter(e=>e.target!==r.id).map(e=>{if(e.source!==r.id)return e;let t=a.subgraph.outputs.find(t=>t.id===e.sourceHandle);if(!t||!a.nodes.some(e=>e.id===t.nodeId))throw Error(`Missing output ${e.sourceHandle} in subgraph ${i.name}`);return{...e,...u(t.nodeId,t.handle)}});n={...n,subgraph:n.subgraph?{outputs:n.subgraph.outputs.map(e=>{if(e.nodeId!==r.id)return e;let t=a.subgraph.outputs.find(t=>t.id===e.handle);if(!t)throw Error(`Missing output ${e.handle} in subgraph ${i.name}`);let n=u(t.nodeId,t.handle);return{...e,nodeId:n.source,handle:n.sourceHandle}})}:void 0,nodes:[...n.nodes.filter(e=>e.id!==r.id),...d],edges:[...p,...f],params:[...n.params,...a.params.map(e=>({...e,name:o+e.name,builtinRole:void 0}))]}}return n}var Vh=new Set(`param.constant.textureSample.particleSubUV.uv.tilingOffset.multiply.add.subtract.divide.lerp.oneMinus.clamp.step.smoothstep.power.min.max.remap.split.combine.swizzle.desaturate.fresnel.sphereMask.gradientRamp.abs.frac.floor.ceil.round.sign.sqrt.length.normalize.dot.sine.cosine.if.noise.vectorNoise.antialiasedTextureMask.sphericalParticleOpacity.particleMacroUV.output`.split(`.`));function Hh(e,t){switch(t){case`R`:case`Param1`:return[e[0],e[0],e[0],e[0]];case`G`:case`Param2`:return[e[1],e[1],e[1],e[1]];case`B`:case`Param3`:return[e[2],e[2],e[2],e[2]];case`A`:case`Param4`:return[e[3],e[3],e[3],e[3]];default:return e}}var Uh=[.2126,.7152,.0722,0];function Wh(e){if(Array.isArray(e))return[e[0]??0,e[1]??0,e[2]??0,e[3]??0];if(typeof e==`number`)return[e,e,e,e];if(typeof e==`boolean`){let t=+!!e;return[t,t,t,t]}return[0,0,0,0]}function Gh(e,t){return[e[0]*t[0],e[1]*t[1],e[2]*t[2],e[3]*t[3]]}function Kh(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2],e[3]+t[3]]}function qh(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2],e[3]-t[3]]}function Jh(e,t){return[t[0]===0?0:e[0]/t[0],t[1]===0?0:e[1]/t[1],t[2]===0?0:e[2]/t[2],t[3]===0?0:e[3]/t[3]]}function Yh(e,t,n){return[zm(e[0],t[0],n[0]),zm(e[1],t[1],n[1]),zm(e[2],t[2],n[2]),zm(e[3],t[3],n[3])]}function Xh(e){return e-Math.floor(e)}function Zh(e,t){switch(t){case`g`:return e[1];case`b`:return e[2];case`a`:return e[3];default:return e[0]}}function Qh(e,t){if(e.length===0)return[1,1,1,1];let n=e[0];if(t<=n.position)return[...n.color];let r=e[e.length-1];if(t>=r.position)return[...r.color];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];if(t>=r.position&&t<=i.position){let e=i.position-r.position,n=e<=0?0:(t-r.position)/e;return lp(r.color,i.color,n)}}return[...r.color]}function $h(e){if(!Array.isArray(e))return[];let t=[];for(let n of e)if(n&&typeof n==`object`){let e=n;t.push({position:Rm(J(e.position,0),0,1),color:Wh(e.color)})}return t}function eg(e){return Array.isArray(e)?[e[0]??0,e[1]??0,e[2]??0,e[3]??0]:[1,1,1,1]}function tg(e,t,n,r){return e.params.find(e=>e.name===n&&e.type===`color`)?eg(vm(e,t,n)):r}function ng(e,t,n,r){if(!e.params.find(e=>e.name===n))return r;let i=vm(e,t,n);return typeof i==`number`?i:r}function rg(e,t,n,r,i){if(i.has(e.id))return[0,0,0,0];i.add(e.id);let a=og(e,t,n,r,i);return i.delete(e.id),a}function ig(e,t,n,r,i,a,o){let s=e.inputs[t];if(!s)return n;let c=a.get(s);if(!c)return n;let l=i.get(c.source);return l?Hh(rg(l,r,i,a,o),c.sourceHandle):n}function ag(e,t,n,r){return xm(t.graph,t.instance,e,n,r)}function og(e,t,n,r,i){let a=(a,o)=>ig(e,a,o,t,n,r,i),o=()=>{if(e.inputs.uv){let e=a(`uv`,[t.uv[0],t.uv[1],0,0]);return[e[0],e[1]]}return[t.uv[0],t.uv[1]]},s=e.params;switch(e.type){case`constant`:return Wh(s.value);case`param`:{let e=typeof s.name==`string`?s.name:``;return Wh(vm(t.graph,t.instance,e))}case`textureSample`:case`particleSubUV`:{let[i,a]=o(),s=ag(e,t,n,r);if(s.path&&!s.isMainTex&&t.samplerForPath){let n=t.samplerForPath(s.path,[i,a],e);if(n)return n}return[...t.source]}case`uv`:return[t.uv[0],t.uv[1],0,0];case`polarCoordinates`:{let e=a(`UV`,[t.uv[0],t.uv[1],0,0]),n=a(`Center`,Wh(s.center??[.5,.5,0,0])),r=a(`Radial Scale`,Wh(J(s.radialScale,1)))[0],i=a(`Length Scale`,Wh(J(s.lengthScale,1)))[0],o=e[0]-n[0],c=e[1]-n[1];return[Math.hypot(o,c)*2*r,Math.atan2(o,c)/6.28*i,0,0]}case`tilingOffset`:{let e=a(`uv`,[t.uv[0],t.uv[1],0,0]),n=a(`tile`,Wh(s.tile??[1,1,0,0])),r=a(`offset`,Wh(s.offset));return[e[0]*n[0]+r[0],e[1]*n[1]+r[1],0,0]}case`multiply`:return Gh(a(`a`,Wh(J(s.a,1))),a(`b`,Wh(J(s.b,1))));case`add`:return Kh(a(`a`,Wh(J(s.a,0))),a(`b`,Wh(J(s.b,0))));case`subtract`:return qh(a(`a`,Wh(J(s.a,0))),a(`b`,Wh(J(s.b,0))));case`divide`:return Jh(a(`a`,Wh(J(s.a,0))),a(`b`,Wh(J(s.b,1))));case`min`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]);return[Math.min(e[0],t[0]),Math.min(e[1],t[1]),Math.min(e[2],t[2]),Math.min(e[3],t[3])]}case`max`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]);return[Math.max(e[0],t[0]),Math.max(e[1],t[1]),Math.max(e[2],t[2]),Math.max(e[3],t[3])]}case`lerp`:return Yh(a(`a`,Wh(J(s.a,0))),a(`b`,Wh(J(s.b,1))),e.inputs.t?a(`t`,[0,0,0,0]):Wh(J(s.t,.5)));case`oneMinus`:{let e=a(`in`,[0,0,0,0]);return[1-e[0],1-e[1],1-e[2],1-e[3]]}case`clamp`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.min?a(`min`,[0,0,0,0])[0]:J(s.min,0),r=e.inputs.max?a(`max`,[1,1,1,1])[0]:J(s.max,1);return[Rm(t[0],n,r),Rm(t[1],n,r),Rm(t[2],n,r),Rm(t[3],n,r)]}case`step`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.edge?a(`edge`,[.5,0,0,0])[0]:J(s.edge,.5);return[+(t[0]>=n),+(t[1]>=n),+(t[2]>=n),+(t[3]>=n)]}case`smoothstep`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.edge0?a(`edge0`,[0,0,0,0])[0]:J(s.edge0,0),r=e.inputs.edge1?a(`edge1`,[1,1,1,1])[0]:J(s.edge1,1);return[Bm(n,r,t[0]),Bm(n,r,t[1]),Bm(n,r,t[2]),Bm(n,r,t[3])]}case`power`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.exp?a(`exp`,[1,1,1,1]):Wh(J(s.exponent,1));return[Math.max(0,t[0])**+n[0],Math.max(0,t[1])**+n[1],Math.max(0,t[2])**+n[2],Math.max(0,t[3])**+n[3]]}case`remap`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.inMin?a(`inMin`,[0,0,0,0])[0]:J(s.inMin,0),r=e.inputs.inMax?a(`inMax`,[1,1,1,1])[0]:J(s.inMax,1),i=e.inputs.outMin?a(`outMin`,[0,0,0,0])[0]:J(s.outMin,0),o=e.inputs.outMax?a(`outMax`,[1,1,1,1])[0]:J(s.outMax,1),c=r-n,l=e=>{let t=c===0?0:(e-n)/c;return i+t*(o-i)};return[l(t[0]),l(t[1]),l(t[2]),l(t[3])]}case`desaturate`:{let e=a(`in`,[0,0,0,0]),t=Rm(J(s.fraction,1),0,1),n=e[0]*Uh[0]+e[1]*Uh[1]+e[2]*Uh[2];return[zm(e[0],n,t),zm(e[1],n,t),zm(e[2],n,t),e[3]]}case`split`:{let e=Zh(a(`in`,[0,0,0,0]),typeof s.channel==`string`?s.channel:`r`);return[e,e,e,e]}case`combine`:return[a(`r`,[0,0,0,0])[0],a(`g`,[0,0,0,0])[0],a(`b`,[0,0,0,0])[0],e.inputs.a?a(`a`,[1,0,0,0])[0]:1];case`swizzle`:{let e=a(`in`,[0,0,0,0]),t=typeof s.pattern==`string`&&s.pattern.length>=4?s.pattern:`rgba`;return[Zh(e,t[0]),Zh(e,t[1]),Zh(e,t[2]),Zh(e,t[3])]}case`fresnel`:{let e=Wh(s.center),n=J(s.power,1),r=Math.hypot(t.uv[0]-e[0],t.uv[1]-e[1])*2,i=Math.max(0,1-Math.min(1,r))**+n;return[i,i,i,i]}case`sphereMask`:{let e=Wh(s.center),n=J(s.radius,.5),r=Rm(J(s.hardness,.5),0,1),i=Math.hypot(t.uv[0]-e[0],t.uv[1]-e[1]),a=n*(1-r)+1e-4,o=Rm(1-(i-(n-a))/a,0,1);return[o,o,o,o]}case`abs`:{let e=a(`in`,[0,0,0,0]);return[Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2]),Math.abs(e[3])]}case`frac`:{let e=a(`in`,[0,0,0,0]);return[Xh(e[0]),Xh(e[1]),Xh(e[2]),Xh(e[3])]}case`floor`:{let e=a(`in`,[0,0,0,0]);return[Math.floor(e[0]),Math.floor(e[1]),Math.floor(e[2]),Math.floor(e[3])]}case`ceil`:{let e=a(`in`,[0,0,0,0]);return[Math.ceil(e[0]),Math.ceil(e[1]),Math.ceil(e[2]),Math.ceil(e[3])]}case`round`:{let e=a(`in`,[0,0,0,0]);return[Math.round(e[0]),Math.round(e[1]),Math.round(e[2]),Math.round(e[3])]}case`sign`:{let e=a(`in`,[0,0,0,0]);return[Math.sign(e[0]),Math.sign(e[1]),Math.sign(e[2]),Math.sign(e[3])]}case`sqrt`:{let e=a(`in`,[0,0,0,0]);return[Math.sqrt(Math.max(0,e[0])),Math.sqrt(Math.max(0,e[1])),Math.sqrt(Math.max(0,e[2])),Math.sqrt(Math.max(0,e[3]))]}case`length`:{let e=a(`in`,[0,0,0,0]),t=Math.hypot(e[0],e[1],e[2]);return[t,t,t,t]}case`normalize`:{let e=a(`in`,[0,0,0,0]),t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t,e[3]]}case`dot`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]),n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2];return[n,n,n,n]}case`sine`:case`cosine`:{let t=a(`in`,[0,0,0,0]),n=J(s.period,1)||1,r=e.type===`sine`?Math.sin:Math.cos,i=2*Math.PI/n;return[r(t[0]*i),r(t[1]*i),r(t[2]*i),r(t[3]*i)]}case`if`:{let t=a(`a`,[0,0,0,0])[0],n=a(`b`,[0,0,0,0])[0],r=1e-6;return t>n+r?a(`aGreater`,[0,0,0,0]):t<n-r?a(`aLess`,[0,0,0,0]):e.inputs.aEqual?a(`aEqual`,[0,0,0,0]):a(`aGreater`,[0,0,0,0])}case`noise`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]),n=nh(Wm(s),e[0],e[1]);return[n,n,n,n]}case`vectorNoise`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]);return rh(Gm(s),e[0],e[1])}case`antialiasedTextureMask`:{let i=typeof s.channel==`string`?s.channel:`a`,[c,l]=o(),u=ag(e,t,n,r),d=Zh((u.path&&!u.isMainTex&&t.samplerForPath?t.samplerForPath(u.path,[c,l],e):null)??t.source,i),f=e.inputs.Threshold?a(`Threshold`,[.5,0,0,0])[0]:J(s.threshold,.5),p=Math.max(J(s.softness,.04),1e-4),m=Bm(f-p,f+p,d);return[m,m,m,m]}case`sphericalParticleOpacity`:{let n=s.center===void 0?[.5,.5,0,0]:Wh(s.center),r=Math.max(J(s.radius,.5),1e-4),i=e.inputs.Density?a(`Density`,[1,0,0,0])[0]:J(s.density,1),o=Math.hypot(t.uv[0]-n[0],t.uv[1]-n[1])/r,c=Rm(Math.max(0,1-o)**+i,0,1);return[c,c,c,c]}case`particleMacroUV`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]),n=Wh(s.center),r=J(s.radius,512)||1,i=Wh(s.tile),o=Wh(s.offset);return[(e[0]-n[0])/r*(i[0]||1)+o[0],(e[1]-n[1])/r*(i[1]||1)+o[1],0,0]}case`gradientRamp`:return Qh([...$h(s.stops)].sort((e,t)=>e.position-t.position),Rm(a(`t`,[t.source[0],0,0,0])[0],0,1));case`output`:return[0,0,0,0];default:return[...t.source]}}function sg(e,t,n={}){e=Bh(e);let r=new Map;for(let t of e.nodes)r.set(t.id,t);let i=new Map;for(let t of e.edges)i.set(t.id,t);let a=t=>{let n=e.outputs[t];if(!n)return null;let a=i.get(n);if(!a)return null;let o=r.get(a.source);return o?{node:o,handle:a.sourceHandle}:null},o=a(`baseColor`),s=a(`opacity`),c=a(`opacityMask`),l=a(`emissive`),u=Tm(e),d=u?tg(e,t,`Tint`,[1,1,1,1]):[1,1,1,1],f=u?ng(e,t,`Emissive`,0):0,p=u?ng(e,t,`Opacity`,1):1,m=(e,t,n)=>Hh(rg(e.node,t,r,i,n),e.handle);return(r,i)=>{let a={graph:e,instance:t,source:r,uv:i,samplerForPath:n.samplerForPath},u=new Set,h=o?m(o,a,u):[r[0],r[1],r[2],r[3]],g=[h[0],h[1],h[2],0];if(l){let e=1+m(l,a,u)[0];g=[g[0]*e,g[1]*e,g[2]*e,0]}let _=h[3];if(s&&(_=m(s,a,u)[0]),c){let t=e.opacityMaskClipValue??.333;_=m(c,a,u)[0]<t?0:e.blend===`masked`?1:_}else if(e.blend===`masked`){let t=e.opacityMaskClipValue??.333;_=_<t?0:1}return[Rm(g[0]*d[0]*(1+Math.max(0,f)),0,1),Rm(g[1]*d[1]*(1+Math.max(0,f)),0,1),Rm(g[2]*d[2]*(1+Math.max(0,f)),0,1),Rm(_*d[3]*p,0,1)]}}function cg(e,t,n,r,i,a={}){let o=sg(r,i,a),s=Math.max(1,t),c=Math.max(1,n);for(let t=0;t+3<e.length;t+=4){let n=t/4,r=n%s,i=Math.floor(n/s),a=o([e[t]/255,e[t+1]/255,e[t+2]/255,e[t+3]/255],[s<=1?0:r/(s-1),c<=1?0:i/(c-1)]);e[t]=a[0]*255,e[t+1]=a[1]*255,e[t+2]=a[2]*255,e[t+3]=a[3]*255}}var lg=new Set([`sceneColor`,`sceneDepth`,`pixelDepth`,`depthFade`,`ddx`,`ddy`,`ddxy`,`parallax`,`parallaxOcclusion`,`triplanar`,`fresnelTrue`,`refraction`,`modulate`,`alphaHoldout`,`metallic`,`roughness`,`specular`,`anisotropy`,`tangent`,`normal`,`normalFromHeight`,`worldPositionOffset`,`tessellation`,`displacement`,`custom`]),ug=new Set([`particleColor`,`particleRelativeTime`,`particleSpeed`,`particleRandom`,`particleSize`,`particleDirection`,`particlePosition`,`particleMacroUV`]),dg=new Set([`particleColor`,`particleRelativeTime`,`particleRandom`]),fg=new Set([`particleSpeed`,`particleSize`,`particleDirection`,`particlePosition`,`particleMacroUV`]),pg=new Set([`step`,`smoothstep`,`power`,`desaturate`,`fresnel`,`sphereMask`,`noise`,`vectorNoise`,`antialiasedTextureMask`,`sphericalParticleOpacity`]);function mg(e){return(e.type===`noise`||e.type===`vectorNoise`)&&e.params.runtime===!0}var hg=new Set([`panner`,`rotateUV`,`tilingOffset`]);function gg(e){let t=new Map;for(let n of e.nodes)t.set(n.id,n);let n=new Map,r=new Map;for(let t of e.edges)n.set(t.id,t),r.set(t.id,t.source);return{nodeById:t,edgeById:n,edgeSource:r}}function _g(e){let t=Object.keys(e.outputs);return e.shadingModel===`lit`?t:t.filter(e=>!lm.includes(e))}function vg(e,t){return e.shadingModel===`lit`&&lm.some(n=>{let r=e.outputs[n];return!!r&&t.edgeSource.has(r)})}function yg(e,t){let n=new Set,r=[];for(let n of _g(e)){let i=e.outputs[n];if(!i)continue;let a=t.edgeSource.get(i);a&&r.push(a)}for(;r.length>0;){let e=r.pop();if(n.has(e))continue;n.add(e);let i=t.nodeById.get(e);if(i)for(let e of Object.values(i.inputs)){if(!e)continue;let i=t.edgeSource.get(e);i&&!n.has(i)&&r.push(i)}}return n}function bg(e,t=gg(e)){let n=new Set(e.nodes.filter(e=>e.type===`particleColor`).map(e=>e.id)),r=yg(e,t),i=!1,a=!1,o=e=>{if(!e)return;let r=t.edgeById.get(e);if(r&&n.has(r.source))switch(r.sourceHandle){case`A`:case`Param4`:a=!0;break;case`R`:case`G`:case`B`:case`RGB`:i=!0;break;default:i=!0,a=!0}};for(let t of Object.values(e.outputs))o(t);for(let e of r){let n=t.nodeById.get(e);if(n){for(let e of Object.values(n.inputs))o(e);n.type===`particleRelativeTime`?a=!0:n.type===`particleRandom`&&(i=!0)}}return{rgb:i,alpha:a}}var xg={R:0,Param1:0,G:1,Param2:1,B:2,Param3:2,A:3,Param4:3};function Sg(e,t=gg(e)){let n=e.outputs.opacity;if(!n)return!0;let r=t.edgeById.get(n),i=r?t.nodeById.get(r.source):void 0;if(!r||!i)return!0;if(i.type!==`constant`)return!1;let a=i.params.value,o=xg[r.sourceHandle]??0;return typeof a==`number`?a===1:typeof a==`boolean`?a:Array.isArray(a)?a[o]===1:!1}function Cg(e,t,n=new Set){if(n.has(e.id))return!1;if(n.add(e.id),e.type===`panner`&&Og(e.params.speed)||e.type===`rotateUV`&&J(e.params.speed,0)!==0)return!0;for(let r of Object.values(e.inputs)){if(!r)continue;let e=t.edgeSource.get(r);if(!e)continue;let i=t.nodeById.get(e);if(i&&(i.type===`time`||Cg(i,t,n)))return!0}return!1}function wg(e,t,n,r=new Set){if(r.has(e))return!0;r.add(e);let i=!1;for(let a of t.edges){if(a.source!==e)continue;i=!0;let o=n.nodeById.get(a.target);if(!o)return!1;if(o.type!==`textureSample`&&o.type!==`particleSubUV`||a.targetHandle!==`uv`){if(hg.has(o.type)){if(!wg(o.id,t,n,r))return!1}else return!1}}return i}function Tg(e,t){for(let n of _g(e)){let r=e.outputs[n];if(!r)continue;let i=t.edgeSource.get(r);if(!i)continue;let a=t.nodeById.get(i);if(!a||a.type!==`textureSample`&&a.type!==`particleSubUV`)return!1}return!0}function Eg(e){try{e=Bh(e)}catch{return{tier:`tier3-defer`,deferredNodeIds:e.nodes.filter(e=>e.type===`subgraph`).map(e=>e.id),vertexUvNodeIds:[],perParticleNodeIds:[]}}let t=Object.values(e.outputs).every(e=>!e)||e.nodes.length===0;if(Tm(e)||t)return{tier:`tier1-fixed`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]};let n=gg(e),r=yg(e,n),i=[];for(let e of r){let t=n.nodeById.get(e);t&&lg.has(t.type)&&i.push(e)}if(i.length>0)return{tier:`tier3-defer`,deferredNodeIds:i,vertexUvNodeIds:[],perParticleNodeIds:[]};if([...r].some(e=>{let t=n.nodeById.get(e);return!!t&&fm.has(t.type)})||vg(e,n))return{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:Dg(e,n,r)};let a=[];for(let t of r){let r=n.nodeById.get(t);r&&(r.type===`panner`||r.type===`rotateUV`)&&Cg(r,n)&&wg(r.id,e,n)&&a.push(r.id)}let o=new Set(a),s=Dg(e,n,r),c=s.length>0;if([...r].some(e=>{let t=n.nodeById.get(e);return t?.type===`twoSidedSign`||t?.type===`polarCoordinates`||t?.type===`panner`&&!!t.inputs.speed&&n.edgeSource.has(t.inputs.speed)}))return{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:s};let l=!1;for(let e of r){let t=n.nodeById.get(e);if(t){if(hg.has(t.type)){if(Cg(t,n)&&!o.has(t.id)){l=!0;break}}else if(t.type===`dynamicParameter`||mg(t)||pg.has(t.type)&&Ag(t,n)){l=!0;break}}}let u=!0;for(let e of r){let t=n.nodeById.get(e);if(t&&!Vh.has(t.type)){u=!1;break}}return!c&&!l&&a.length===0&&u?{tier:`tier0-bake`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:Tg(e,n)?{tier:`tier1-fixed`,deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:s}:!c&&!l&&u?{tier:`tier0-bake`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:s}}function Dg(e,t,n){let r=[];for(let i of n){let n=t.nodeById.get(i);n&&(ug.has(n.type)||n.type===`dynamicParameter`||n.type===`param`&&kg(n,e))&&r.push(n.id)}return r}function Og(e){return typeof e==`number`?e!==0:Array.isArray(e)?e.some(e=>typeof e==`number`&&e!==0):!1}function kg(e,t){let n=typeof e.params.name==`string`?e.params.name:``;return t.params.find(e=>e.name===n)?.perParticle===!0}function Ag(e,t,n=new Set){if(n.has(e.id))return!1;n.add(e.id);for(let r of Object.values(e.inputs)){if(!r)continue;let e=t.edgeSource.get(r);if(!e)continue;let i=t.nodeById.get(e);if(i&&(i.type===`time`||i.type===`dynamicParameter`||ug.has(i.type)||Ag(i,t,n)))return!0}return!1}function jg(e){if(e.perParticleFeed)return e.perParticleFeed;if(e.sliderMin===void 0||e.sliderMax===void 0)return`spawn-color`;let t=e.clampMin??e.sliderMin??0,n=e.clampMax??e.sliderMax??1;return t===n?`spawn-color`:t>=0&&n<=1?`smuggle-8bit`:`mesh-attr`}function Mg(e){return Array.isArray(e)?[e[0]??0,e[1]??0,e[2]??0,e[3]??0]:[1,1,1,1]}function Ng(e,t,n,r){let i=vm(e,t,n);return typeof i==`number`?i:r}function Pg(e,t,n,r){let i=Tm(e),a={tint:i&&e.params.find(e=>e.name===`Tint`&&e.type===`color`)?Mg(vm(e,t,`Tint`)):[1,1,1,1],emissive:i&&e.params.some(e=>e.name===`Emissive`)?Ng(e,t,`Emissive`,0):0,opacity:i&&e.params.some(e=>e.name===`Opacity`)?Ng(e,t,`Opacity`,1):1,blend:e.blend};for(let e of r){let t=n.nodeById.get(e);if(t){if(t.type===`panner`){let e=t.params.speed;a.uvPan={speed:Array.isArray(e)?[J(e[0],0),J(e[1],0)]:[J(t.params.speedX,0),J(t.params.speedY,0)]}}else if(t.type===`rotateUV`){let e=t.params.center;a.uvRotate={speed:J(t.params.speed,0),center:Array.isArray(e)?[J(e[0],.5),J(e[1],.5)]:[.5,.5]}}}}return a}function Fg(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return(t>>>0).toString(16).padStart(8,`0`)}function Ig(e,t,n){return Fg(JSON.stringify({graph:Cm(e),instance:Du(t),mainTex:n??null}))}function Lg(e,t,n={}){let r=Rg(e,t,n),i=!1;try{let t=Bh(e),n=gg(t);for(let e of yg(t,n)){let t=n.nodeById.get(e);if(t&&fm.has(t.type)){i=!0;break}}}catch{i=!1}return{...r,shadingModel:e.shadingModel===`lit`?`lit`:`unlit`,usesSceneLighting:i}}function Rg(e,t,n){try{e=Bh(e)}catch(t){return{tier:`tier3-defer`,shaderId:Cu,blend:e.blend,perParticleFeeds:{},diagnostics:[t instanceof Error?t.message:String(t)],deferredNodeIds:e.nodes.filter(e=>e.type===`subgraph`).map(e=>e.id),usesParticleColorRGB:!1,usesParticleColorAlpha:!1,opacityIsConstantOne:!1}}let r=n.mainTexUid??null,i=Eg(e),a=gg(e);if(i.tier===`tier0-bake`||i.tier===`tier1-fixed`)for(let n of yg(e,a)){let r=a.nodeById.get(n);if(!r||r.type!==`textureSample`&&r.type!==`particleSubUV`&&r.type!==`antialiasedTextureMask`)continue;let o=xm(e,t,r,a.nodeById,a.edgeById);if(o.path&&!o.isMainTex){i.tier=`tier2-shader`,i.vertexUvNodeIds=[];break}}let o=bg(e,a),s=Sg(e,a),c=[],l={};for(let t of e.params)t.perParticle&&(l[t.name]=jg(t));switch(i.tier){case`tier3-defer`:{let t=i.deferredNodeIds.map(e=>a.nodeById.get(e)?.type??e).join(`, `);return c.push(`Tier 3: graph reaches deferred node(s) [${t}] \u2014 not rendered in preview, exported data-only (techspec \xA74.2).`),{tier:`tier3-defer`,shaderId:Cu,blend:e.blend,perParticleFeeds:l,diagnostics:c,deferredNodeIds:i.deferredNodeIds,usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s}}case`tier0-bake`:return{tier:`tier0-bake`,shaderId:Cu,blend:e.blend,bakeHash:Ig(e,t,r),fixed:Pg(e,t,a,[]),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s};case`tier1-fixed`:return{tier:`tier1-fixed`,shaderId:Cu,blend:e.blend,fixed:Pg(e,t,a,i.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s};case`tier2-shader`:{let n=`mat-${Fg(JSON.stringify(Cm(e)))}`;for(let[e,t]of Object.entries(l))t===`mesh-attr`&&c.push(`Tier 2 custom Mesh path required: DynamicParameter "${e}" needs an independent per-particle float attribute; ParticleContainer exposes only vertex/position/rotation/uvs/color.`);let r=i.perParticleNodeIds.map(e=>a.nodeById.get(e)).filter(e=>!!e&&fg.has(e.type));for(let e of r)c.push(`Tier 2 custom Mesh path required: ${e.type} needs a per-particle attribute that ParticleContainer does not expose.`);let u=i.perParticleNodeIds.map(e=>a.nodeById.get(e)).filter(e=>!!e&&ug.has(e.type)&&!dg.has(e.type)&&!fg.has(e.type));for(let e of u)c.push(`Tier 2 custom Mesh path required: ${e.type} is not available on the ParticleContainer shader path.`);return{tier:`tier2-shader`,shaderId:n,blend:e.blend,fixed:Pg(e,t,a,i.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s}}}}var zg=`
precision mediump float;

varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec4 uFixedTint;
uniform float uFixedEmissive;
uniform float uFixedOpacity;
uniform float uClipValue;
uniform vec2 uSheetTiles;
uniform vec4 uSubUv;
uniform float uSubUvFromAttr;
uniform vec4 uDynamicParams;

float materialLuminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

float materialHash(vec2 p, float seed) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031 + seed * 0.00317);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float materialValueNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = materialHash(i, seed);
  float b = materialHash(i + vec2(1.0, 0.0), seed);
  float c = materialHash(i + vec2(0.0, 1.0), seed);
  float d = materialHash(i + vec2(1.0, 1.0), seed);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float materialGradientNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a0 = materialHash(i, seed) * 6.2831853;
  float a1 = materialHash(i + vec2(1.0, 0.0), seed) * 6.2831853;
  float a2 = materialHash(i + vec2(0.0, 1.0), seed) * 6.2831853;
  float a3 = materialHash(i + vec2(1.0, 1.0), seed) * 6.2831853;
  float n00 = dot(vec2(cos(a0), sin(a0)), f);
  float n10 = dot(vec2(cos(a1), sin(a1)), f - vec2(1.0, 0.0));
  float n01 = dot(vec2(cos(a2), sin(a2)), f - vec2(0.0, 1.0));
  float n11 = dot(vec2(cos(a3), sin(a3)), f - vec2(1.0, 1.0));
  return clamp(mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y) * 0.7071 + 0.5, 0.0, 1.0);
}

float materialVoronoiNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  float minD = 100000.0;
  for (int oy = -1; oy <= 1; oy++) {
    for (int ox = -1; ox <= 1; ox++) {
      vec2 cell = i + vec2(float(ox), float(oy));
      vec2 feature = cell + vec2(
        materialHash(cell, seed),
        materialHash(cell, seed + 37.719)
      );
      vec2 diff = feature - p;
      minD = min(minD, dot(diff, diff));
    }
  }
  return min(1.0, sqrt(minD));
}

float materialScalarNoise(vec2 uv, float scale, float seed, float outputMin, float outputMax, float mode) {
  vec2 p = uv * max(scale, 0.0001);
  float n = mode > 1.5
    ? materialVoronoiNoise(p, seed)
    : (mode > 0.5 ? materialValueNoise(p, seed) : materialGradientNoise(p, seed));
  return mix(outputMin, outputMax, n);
}

vec4 materialSampleMain(vec2 uv) {
  return texture2D(uTexture, uSubUv.xy + fract(uv) * uSubUv.zw);
}

vec4 materialSampleSubUvBlend(vec2 uv) {
  vec4 current = materialSampleMain(uv);
  if (uSubUvFromAttr > 0.5) return current;
  vec2 tiles = max(floor(uSheetTiles + 0.5), vec2(1.0, 1.0));
  float total = max(1.0, tiles.x * tiles.y);
  if (total <= 1.0) return current;
  vec2 scaled = (uSubUv.xy + fract(uv) * uSubUv.zw) * tiles;
  vec2 cell = floor(scaled);
  vec2 local = fract(scaled);
  float frame = mod((tiles.y - 1.0 - cell.y) * tiles.x + cell.x, total);
  float nextFrame = mod(frame + 1.0, total);
  vec2 nextCell = vec2(
    mod(nextFrame, tiles.x),
    tiles.y - 1.0 - floor(nextFrame / tiles.x)
  );
  vec2 nextUv = (nextCell + local) / tiles;
  return mix(current, texture2D(uTexture, nextUv), clamp(vColor.a, 0.0, 1.0));
}
`,Bg=`
const float NFX_RECIPROCAL_PI = 0.3183098861837907;

#ifdef NFX_SCENE_LIGHTS
varying vec3 vNfxViewPosition;
varying vec3 vNfxViewNormal;
varying vec3 vNfxWorldPosition;

vec3 nfxGeometryViewNormal() {
  vec3 n = normalize(vNfxViewNormal);
  return gl_FrontFacing ? n : -n;
}
vec3 nfxViewPosition() { return -vNfxViewPosition; }
vec3 nfxViewDirectionView() {
  return isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(vNfxViewPosition);
}
vec3 nfxViewToWorld(vec3 v) { return normalize((vec4(v, 0.0) * viewMatrix).xyz); }
vec3 nfxWorldPosition() { return vNfxWorldPosition; }
vec3 nfxApplyTangentNormal(vec3 n, vec3 tangentNormal) {
  vec3 p = -vNfxViewPosition;
  vec3 dp1 = dFdx(p);
  vec3 dp2 = dFdy(p);
  vec2 duv1 = dFdx(vUV);
  vec2 duv2 = dFdy(vUV);
  vec3 dp2perp = cross(dp2, n);
  vec3 dp1perp = cross(n, dp1);
  vec3 t = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 b = dp2perp * duv1.y + dp1perp * duv2.y;
  float det = max(dot(t, t), dot(b, b));
  if (det <= 0.0) return n;
  float scale = inversesqrt(det) * (gl_FrontFacing ? 1.0 : -1.0);
  return normalize(mat3(t * scale, b * scale, n) * tangentNormal);
}
#else
vec3 nfxGeometryViewNormal() { return vec3(0.0, 0.0, 1.0); }
vec3 nfxViewPosition() { return vec3(vUV * 2.0 - 1.0, 0.0); }
vec3 nfxViewDirectionView() { return vec3(0.0, 0.0, 1.0); }
vec3 nfxViewToWorld(vec3 v) { return v; }
vec3 nfxWorldPosition() { return vec3(vUV - 0.5, 0.0); }
vec3 nfxApplyTangentNormal(vec3 n, vec3 tangentNormal) {
  return normalize(tangentNormal);
}
#endif

vec3 nfxMainLightDirectionView() {
#ifdef NFX_SCENE_LIGHTS
#if NUM_DIR_LIGHTS > 0
  return directionalLights[0].direction;
#else
  return normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  return normalize(vec3(3.0, 6.0, 5.0));
#else
  return vec3(0.0, 0.0, 1.0);
#endif
}

vec3 nfxMainLightColor() {
#ifdef NFX_SCENE_LIGHTS
#if NUM_DIR_LIGHTS > 0
  return directionalLights[0].color * NFX_RECIPROCAL_PI;
#else
  return vec3(0.0);
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  return vec3(2.2 * NFX_RECIPROCAL_PI);
#else
  return vec3(1.0);
#endif
}

vec3 nfxAmbientIrradiance(vec3 viewNormal) {
#ifdef NFX_SCENE_LIGHTS
  vec3 irradiance = ambientLightColor;
#if NUM_HEMI_LIGHTS > 0
  for (int i = 0; i < NUM_HEMI_LIGHTS; i++) {
    irradiance += getHemisphereLightIrradiance(hemisphereLights[i], viewNormal);
  }
#endif
  return irradiance;
#elif defined(NFX_PREVIEW_LIGHTS)
  float w = 0.5 * viewNormal.y + 0.5;
  return mix(vec3(0.0823, 0.1170, 0.1590), vec3(0.9301, 0.9473, 1.0), w) * 1.15;
#else
  return vec3(0.0);
#endif
}

vec3 nfxSpecularGGX(vec3 l, vec3 v, vec3 n, vec3 f0, float roughness) {
  float alpha = max(roughness * roughness, 0.0025);
  vec3 h = normalize(l + v);
  float dotNL = clamp(dot(n, l), 0.0, 1.0);
  float dotNV = clamp(dot(n, v), 0.0, 1.0);
  float dotNH = clamp(dot(n, h), 0.0, 1.0);
  float dotVH = clamp(dot(v, h), 0.0, 1.0);
  vec3 fresnel = f0 + (vec3(1.0) - f0) * pow(1.0 - dotVH, 5.0);
  float a2 = alpha * alpha;
  float visV = dotNL * sqrt(a2 + (1.0 - a2) * dotNV * dotNV);
  float visL = dotNV * sqrt(a2 + (1.0 - a2) * dotNL * dotNL);
  float visibility = 0.5 / max(visV + visL, 0.000001);
  float denom = dotNH * dotNH * (a2 - 1.0) + 1.0;
  float distribution = NFX_RECIPROCAL_PI * a2 / max(denom * denom, 0.000001);
  return fresnel * (visibility * distribution);
}

vec3 nfxLightContribution(vec3 l, vec3 color, vec3 n, vec3 v, vec3 diffuseColor, vec3 f0, float roughness, float specular) {
  float dotNL = clamp(dot(n, l), 0.0, 1.0);
  vec3 irradiance = dotNL * color;
  return irradiance * (diffuseColor * NFX_RECIPROCAL_PI + specular * nfxSpecularGGX(l, v, n, f0, roughness));
}

vec3 nfxShadeSurface(vec3 albedo, vec3 n, vec3 v, vec3 p, float roughness, float metallic, float specular) {
  vec3 diffuseColor = albedo * (1.0 - metallic);
  vec3 f0 = mix(vec3(0.04), albedo, metallic);
  vec3 color = vec3(0.0);
#ifdef NFX_SCENE_LIGHTS
  IncidentLight light;
#if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    getDirectionalLightInfo(directionalLights[i], light);
    color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#if NUM_POINT_LIGHTS > 0
  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    getPointLightInfo(pointLights[i], p, light);
    if (light.visible) color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#if NUM_SPOT_LIGHTS > 0
  for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
    getSpotLightInfo(spotLights[i], p, light);
    if (light.visible) color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  color += nfxLightContribution(normalize(vec3(3.0, 6.0, 5.0)), vec3(2.2), n, v, diffuseColor, f0, roughness, specular);
  color += nfxLightContribution(normalize(vec3(-4.0, 2.5, -3.0)), vec3(0.3467, 0.4851, 1.0) * 0.55, n, v, diffuseColor, f0, roughness, specular);
#endif
  color += nfxAmbientIrradiance(n) * diffuseColor * NFX_RECIPROCAL_PI;
  return color;
}

/** Lit shading model: BaseColor lit by the scene (unlit passthrough on Pixi). */
vec3 nfxShadeLit(vec3 albedo, vec3 tangentNormal, float roughness, float metallic) {
#if defined(NFX_SCENE_LIGHTS) || defined(NFX_PREVIEW_LIGHTS)
  vec3 n = nfxApplyTangentNormal(nfxGeometryViewNormal(), tangentNormal);
  return nfxShadeSurface(albedo, n, nfxViewDirectionView(), nfxViewPosition(), clamp(roughness, 0.0, 1.0), clamp(metallic, 0.0, 1.0), 1.0);
#else
  return albedo;
#endif
}

/** Diffuse irradiance (direct + ambient) at the surface, multiply-ready. */
vec3 nfxDiffuseLighting() {
#if defined(NFX_SCENE_LIGHTS) || defined(NFX_PREVIEW_LIGHTS)
  vec3 n = nfxGeometryViewNormal();
  return nfxShadeSurface(vec3(1.0), n, nfxViewDirectionView(), nfxViewPosition(), 1.0, 0.0, 0.0);
#else
  return vec3(1.0);
#endif
}

/** Normal-map texel (0..1) to a tangent-space normal, Unity "Normal Unpack". */
vec4 nfxUnpackNormal(vec4 texel, float strength) {
  vec3 n = texel.xyz * 2.0 - 1.0;
  n.xy *= strength;
  return vec4(normalize(vec3(n.xy, max(n.z, 0.0001))), 1.0);
}

vec3 nfxAmbientColor() {
  return nfxAmbientIrradiance(nfxGeometryViewNormal()) * NFX_RECIPROCAL_PI;
}
`;function Vg(e){return e.tier===`tier2-shader`&&!e.diagnostics.some(e=>e.includes(`custom Mesh path required`))}function Hg({artifact:e,graph:t,instance:n}){if(e.tier===`tier3-defer`)return null;let r=new Ug(t,n);return{fragment:r.fragmentSource(e.fixed),samplers:r.samplerBindings(),diagnostics:r.samplerDiagnostics()}}var Ug=class e{constructor(e,t){q(this,`graph`,e),q(this,`instance`,t),q(this,`authoredGraph`),q(this,`nodeById`,new Map),q(this,`edgeById`,new Map),q(this,`nodeSamplerUniform`,new Map),q(this,`samplers`,[]),q(this,`samplerDiagnosticMessages`,[]),this.authoredGraph=e,e=Bh(e),this.graph=e;for(let t of e.nodes)this.nodeById.set(t.id,t);for(let t of e.edges)this.edgeById.set(t.id,t);this.collectSamplers()}samplerBindings(){return this.samplers.map(e=>({...e}))}samplerDiagnostics(){return[...this.samplerDiagnosticMessages]}collectSamplers(){let e=this.graph.nodes.filter(e=>e.type===`textureSample`||e.type===`particleSubUV`||e.type===`antialiasedTextureMask`).filter(e=>{let t=this.resolveNodeTexBinding(e);return t.path!==``&&!t.isMainTex}).sort((e,t)=>e.id<t.id?-1:+(e.id>t.id)),t=0;for(let n of e){if(t>=7){this.samplerDiagnosticMessages.push(`Material uses more than 7 per-node textures; node "${n.id}" falls back to MainTex.`);continue}let e=`uTex${t}`;t+=1,this.nodeSamplerUniform.set(n.id,e),this.samplers.push({nodeId:n.id,uniform:e,path:this.resolveNodeTexBinding(n).path})}}resolveNodeTexBinding(e){return xm(this.graph,this.instance,e,this.nodeById,this.edgeById)}header(){let e=this.graph.shadingModel===`lit`||this.graph.nodes.some(e=>fm.has(e.type)||e.type===`unpackNormal`)?`${zg}${Bg}`:zg;return this.graph.nodes.some(e=>e.type===`twoSidedSign`)?`${e}
float materialTwoSidedSign() {
#ifdef FLIP_SIDED
  return gl_FrontFacing ? -1.0 : 1.0;
#else
  return gl_FrontFacing ? 1.0 : -1.0;
#endif
}
`:e}surfaceColorLine(){if(this.graph.shadingModel!==`lit`)return`outColor.rgb = outColor.rgb * uFixedTint.rgb + emissiveColor.rgb;`;let e=this.slotExpr(`normal`),t=this.slotScalarExpr(`roughness`)??.62.toFixed(8),n=this.slotScalarExpr(`metallic`)??0 .toFixed(8);return`outColor.rgb = nfxShadeLit(outColor.rgb * uFixedTint.rgb, ${e?`(${e}).xyz`:`vec3(0.0, 0.0, 1.0)`}, ${t}, ${n}) + emissiveColor.rgb;`}samplerUniformDeclarations(){return this.samplers.length===0?``:`${this.samplers.map(e=>`uniform sampler2D ${e.uniform};`).join(`
`)}
`}fragmentSource(e){let t=this.slotExpr(`baseColor`),n=this.slotExpr(`emissive`),r=this.slotScalarExpr(`opacity`),i=this.slotExpr(`opacityMask`),a=t!==null,o=n!==null,s=t??`materialSampleMain(vUV)`,c=n??`vec4(0.0)`,l=r??(a?`(${s}).a`:o?`materialLuminance((${c}).rgb)`:`materialSampleMain(vUV).a`),u=i??`vec4(1.0)`,d=e?`uFixedEmissive`:`0.0`;if(this.graph.blend===`opaque`)return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 baseColor = ${s};
  vec4 emissiveColor = ${c};
  vec4 outColor = baseColor;
  ${this.surfaceColorLine()}
  outColor.rgb *= (1.0 + max(0.0, ${d}));
  outColor *= vColor;
  outColor.a = 1.0;
  gl_FragColor = outColor;
}
`;let f=this.graph.blend===`masked`&&i===null?`opacityValue`:`(${u}).r`,p=this.graph.blend===`masked`?`outColor *= vColor;
  outColor.a = 1.0;`:`outColor.a = opacityValue * uFixedTint.a * uFixedOpacity;
  outColor *= vColor;`;return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 baseColor = ${s};
  vec4 emissiveColor = ${c};
  float opacityValue = clamp((${l}), 0.0, 1.0);
  float maskValue = ${f};
  if (maskValue < uClipValue) discard;
  vec4 outColor = baseColor;
  ${this.surfaceColorLine()}
  outColor.rgb *= (1.0 + max(0.0, ${d}));
  ${p}
  gl_FragColor = outColor;
}
`}nodePreviewFragmentSource(t,n=`out`){let r=this.authoredGraph.nodes.find(e=>e.id===t);if(r?.type===`subgraph`){let i=r.params.graph,a=n===`out`?i.subgraph?.outputs[0]?.id:n;if(!a)return null;let o=`preview:${t}`,s=Bh({...this.authoredGraph,edges:[...this.authoredGraph.edges,{id:o,source:t,sourceHandle:a,target:`preview-output`,targetHandle:`baseColor`}],outputs:{baseColor:o}}),c=s.edges.find(e=>e.id===o);return new e(s,this.instance).nodePreviewFragmentSource(c.source,c.sourceHandle)}let i=this.nodeById.get(t);if(!i)return null;let a=this.evalNode(i,new Set),o=this.select(a,Wg(i,n));return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 value = ${o};
  gl_FragColor = vec4(clamp(value.rgb, 0.0, 1.0), ${i.type===`polarCoordinates`?`1.0`:`clamp(value.a, 0.0, 1.0)`});
}
`}slotExpr(e){let t=this.graph.outputs[e];if(!t)return null;let n=this.edgeById.get(t),r=n?this.nodeById.get(n.source):void 0;return!n||!r?null:this.select(this.evalNode(r,new Set),n.sourceHandle)}slotScalarExpr(e){let t=this.slotExpr(e);return t?`((${t}).r)`:null}evalNode(e,t){if(t.has(e.id))return`vec4(0.0)`;t.add(e.id);let n=this.evalInner(e,t);return t.delete(e.id),n}evalInner(e,t){let n=e.params,r=(n,r)=>{let i=e.inputs[n];if(!i)return r;let a=this.edgeById.get(i),o=a?this.nodeById.get(a.source):void 0;return!a||!o?r:this.select(this.evalNode(o,t),a.sourceHandle)},i=(e,t)=>`(${r(e,this.scalar(t))}).r`,a=()=>e.inputs.uv?`(${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy`:`vUV`;switch(e.type){case`constant`:return this.constVec4(n.value);case`time`:return`vec4(uTime)`;case`twoSidedSign`:return`vec4(materialTwoSidedSign())`;case`param`:{let e=typeof n.name==`string`?n.name:``;return this.constVec4(vm(this.graph,this.instance,e))}case`textureSample`:return this.sampleTexture(e,a());case`particleSubUV`:{let t=this.nodeSamplerUniform.get(e.id);return t?`texture2D(${t}, fract(${a()}))`:n.blend===!0?`materialSampleSubUvBlend(${a()})`:`materialSampleMain(${a()})`}case`uv`:return`vec4(vUV, 0.0, 0.0)`;case`tilingOffset`:return`vec4((${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy * (${r(`tile`,this.constVec4(n.tile,[1,1,0,0]))}).xy + (${r(`offset`,this.constVec4(n.offset))}).xy, 0.0, 0.0)`;case`panner`:return`vec4((${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy + (${e.inputs.time?i(`time`,0):`uTime`}) * (${r(`speed`,this.constVec4(n.speed))}).xy, 0.0, 0.0)`;case`polarCoordinates`:{let e=r(`UV`,`vec4(vUV, 0.0, 0.0)`),t=r(`Center`,this.constVec4(n.center,[.5,.5,0,0])),a=i(`Radial Scale`,this.number(n.radialScale,1)),o=i(`Length Scale`,this.number(n.lengthScale,1)),s=`((${e}).xy - (${t}).xy)`;return`vec4(length(${s}) * 2.0 * (${a}), ${`(dot(${s}, ${s}) == 0.0 ? 0.0 : atan((${s}).x, (${s}).y))`} / 6.28 * (${o}), 0.0, 0.0)`}case`rotateUV`:{let e=r(`uv`,`vec4(vUV, 0.0, 0.0)`),t=this.constVec4(n.center,[.5,.5,0,0]),i=this.number(n.speed,0);return`(vec4(((${t}).xy) + mat2(cos(${i.toFixed(8)} * uTime * 6.2831853), sin(${i.toFixed(8)} * uTime * 6.2831853), -sin(${i.toFixed(8)} * uTime * 6.2831853), cos(${i.toFixed(8)} * uTime * 6.2831853)) * ((${e}).xy - (${t}).xy), 0.0, 0.0))`}case`fresnel`:return`vec4(pow(max(0.0, 1.0 - clamp(length(vUV - (${this.constVec4(n.center,[.5,.5,0,0])}).xy) * 2.0, 0.0, 1.0)), ${Math.max(0,this.number(n.power,1)).toFixed(8)}))`;case`sphereMask`:{let e=this.constVec4(n.center,[.5,.5,0,0]),t=Math.max(1e-4,this.number(n.radius,.5)),r=t*(1-Math.max(0,Math.min(1,this.number(n.hardness,.5))))+1e-4;return`vec4(clamp(1.0 - ((length(vUV - (${e}).xy) - ${(t-r).toFixed(8)}) / ${r.toFixed(8)}), 0.0, 1.0))`}case`particleColor`:return`vColor`;case`particleRelativeTime`:return`vec4(clamp(vColor.a, 0.0, 1.0))`;case`particleRandom`:return`vec4(fract(vColor.r + vColor.g * 13.17 + vColor.b * 7.31))`;case`particleSpeed`:case`particleSize`:case`particleDirection`:case`particlePosition`:case`particleMacroUV`:return`vec4(0.0)`;case`dynamicParameter`:return`uDynamicParams`;case`sceneWorldNormal`:return`vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)`;case`sceneWorldPosition`:return`vec4(nfxWorldPosition(), 1.0)`;case`sceneViewDirection`:return`vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)`;case`mainLightDirection`:return`vec4(nfxViewToWorld(nfxMainLightDirectionView()), 0.0)`;case`mainLightColor`:return`vec4(nfxMainLightColor(), 1.0)`;case`sceneAmbientColor`:return`vec4(nfxAmbientColor(), 1.0)`;case`sceneDiffuseLighting`:return`vec4(nfxDiffuseLighting(), 1.0)`;case`unpackNormal`:{let t=e.inputs.strength?i(`strength`,1):this.number(n.strength,1).toFixed(8);return`nfxUnpackNormal(${r(`in`,`vec4(0.5, 0.5, 1.0, 1.0)`)}, ${t})`}case`multiply`:return`((${r(`a`,this.scalar(this.number(n.a,1)))}) * (${r(`b`,this.scalar(this.number(n.b,1)))}))`;case`add`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) + (${r(`b`,this.scalar(this.number(n.b,0)))}))`;case`subtract`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) - (${r(`b`,this.scalar(this.number(n.b,0)))}))`;case`divide`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) / max(abs(${r(`b`,this.scalar(this.number(n.b,1)))}), vec4(0.000001)))`;case`min`:return`min(${r(`a`,`vec4(0.0)`)}, ${r(`b`,`vec4(0.0)`)})`;case`max`:return`max(${r(`a`,`vec4(0.0)`)}, ${r(`b`,`vec4(0.0)`)})`;case`lerp`:{let t=e.inputs.t?r(`t`,`vec4(0.5)`):this.scalar(this.number(n.t,.5));return`mix(${r(`a`,this.scalar(this.number(n.a,0)))}, ${r(`b`,this.scalar(this.number(n.b,1)))}, ${t})`}case`oneMinus`:return`(vec4(1.0) - (${r(`in`,`vec4(0.0)`)}))`;case`clamp`:{let t=e.inputs.min?i(`min`,0):this.number(n.min,0).toFixed(8),a=e.inputs.max?i(`max`,1):this.number(n.max,1).toFixed(8);return`clamp(${r(`in`,`vec4(0.0)`)}, vec4(${t}), vec4(${a}))`}case`step`:return`step(vec4(${e.inputs.edge?i(`edge`,.5):this.number(n.edge,.5).toFixed(8)}), ${r(`in`,`vec4(0.0)`)})`;case`smoothstep`:return`smoothstep(vec4(${e.inputs.edge0?i(`edge0`,0):this.number(n.edge0,0).toFixed(8)}), vec4(${e.inputs.edge1?i(`edge1`,1):this.number(n.edge1,1).toFixed(8)}), ${r(`in`,`vec4(0.0)`)})`;case`power`:{let t=e.inputs.exp?r(`exp`,`vec4(1.0)`):this.scalar(this.number(n.exponent,1));return`pow(max(${r(`in`,`vec4(0.0)`)}, vec4(0.0)), ${t})`}case`remap`:{let t=r(`in`,`vec4(0.0)`),a=e.inputs.inMin?i(`inMin`,0):this.number(n.inMin,0).toFixed(8),o=e.inputs.inMax?i(`inMax`,1):this.number(n.inMax,1).toFixed(8),s=e.inputs.outMin?i(`outMin`,0):this.number(n.outMin,0).toFixed(8);return`(vec4(${s}) + (((${t}) - vec4(${a})) / max(vec4(${o}) - vec4(${a}), vec4(0.000001))) * (vec4(${e.inputs.outMax?i(`outMax`,1):this.number(n.outMax,1).toFixed(8)}) - vec4(${s})))`}case`desaturate`:{let e=r(`in`,`vec4(0.0)`);return`vec4(mix((${e}).rgb, vec3(materialLuminance((${e}).rgb)), ${Math.max(0,Math.min(1,this.number(n.fraction,1))).toFixed(8)}), (${e}).a)`}case`split`:{let e=this.channel(n.channel);return`((${r(`in`,`vec4(0.0)`)}).${e}${e}${e}${e})`}case`combine`:return`vec4((${r(`r`,`vec4(0.0)`)}).r, (${r(`g`,`vec4(0.0)`)}).r, (${r(`b`,`vec4(0.0)`)}).r, (${e.inputs.a?r(`a`,`vec4(1.0)`):`vec4(1.0)`}).r)`;case`swizzle`:{let e=String(n.pattern??`rgba`).toLowerCase().replace(/[^rgba]/g,``).padEnd(4,`a`).slice(0,4);return`((${r(`in`,`vec4(0.0)`)}).${e})`}case`abs`:return`abs(${r(`in`,`vec4(0.0)`)})`;case`frac`:return`fract(${r(`in`,`vec4(0.0)`)})`;case`floor`:return`floor(${r(`in`,`vec4(0.0)`)})`;case`ceil`:return`ceil(${r(`in`,`vec4(0.0)`)})`;case`round`:return`floor(${r(`in`,`vec4(0.0)`)} + vec4(0.5))`;case`sign`:return`sign(${r(`in`,`vec4(0.0)`)})`;case`sqrt`:return`sqrt(max(${r(`in`,`vec4(0.0)`)}, vec4(0.0)))`;case`length`:return`vec4(length((${r(`in`,`vec4(0.0)`)}).xyz))`;case`normalize`:return`vec4(normalize((${r(`in`,`vec4(0.0)`)}).xyz), (${r(`in`,`vec4(0.0)`)}).a)`;case`dot`:return`vec4(dot((${r(`a`,`vec4(0.0)`)}).xyz, (${r(`b`,`vec4(0.0)`)}).xyz))`;case`sine`:{let e=Math.max(1e-4,this.number(n.period,1));return`sin((${r(`in`,`vec4(0.0)`)}) * ${(Math.PI*2/e).toFixed(8)})`}case`cosine`:{let e=Math.max(1e-4,this.number(n.period,1));return`cos((${r(`in`,`vec4(0.0)`)}) * ${(Math.PI*2/e).toFixed(8)})`}case`if`:{let e=i(`a`,0),t=i(`b`,0);return`((${e}) > (${t}) + 0.000001 ? ${r(`aGreater`,`vec4(0.0)`)} : ((${e}) < (${t}) - 0.000001 ? ${r(`aLess`,`vec4(0.0)`)} : ${r(`aEqual`,r(`aGreater`,`vec4(0.0)`))}))`}case`noise`:{let e=r(`Position`,`vec4(vUV, 0.0, 0.0)`),t=Math.max(1e-4,this.number(n.scale,16)),i=this.number(n.seed,0),a=this.number(n.outputMin,0),o=this.number(n.outputMax,1),s=n.function===`value`?1:n.function===`voronoi`?2:0;return`vec4(materialScalarNoise((${e}).xy, ${t.toFixed(8)}, ${i.toFixed(8)}, ${a.toFixed(8)}, ${o.toFixed(8)}, ${s.toFixed(1)}))`}case`vectorNoise`:{let e=r(`Position`,`vec4(vUV, 0.0, 0.0)`),t=Math.max(1e-4,this.number(n.scale,8)),i=this.number(n.seed,0),a=n.function===`cellnoise`?1:n.function===`voronoi`?2:0;return`vec4(materialScalarNoise((${e}).xy + vec2(17.0, 31.0), ${t.toFixed(8)}, ${i.toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), materialScalarNoise((${e}).xy + vec2(73.0, 11.0), ${t.toFixed(8)}, ${(i+1).toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), materialScalarNoise((${e}).xy + vec2(5.0, 47.0), ${t.toFixed(8)}, ${(i+2).toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), 1.0)`}case`antialiasedTextureMask`:{let t=this.sampleTexture(e,a()),r=this.channel(n.channel??`a`),o=e.inputs.Threshold?i(`Threshold`,.5):this.number(n.threshold,.5).toFixed(8),s=Math.max(1e-4,this.number(n.softness,.04));return`vec4(smoothstep((${o}) - ${s.toFixed(8)}, (${o}) + ${s.toFixed(8)}, (${t}).${r}))`}case`sphericalParticleOpacity`:{let t=this.constVec4(n.center,[.5,.5,0,0]),r=Math.max(1e-4,this.number(n.radius,.5)),a=e.inputs.Density?i(`Density`,1):this.number(n.density,1).toFixed(8);return`vec4(clamp(pow(max(0.0, 1.0 - length((vUV - (${t}).xy) / ${r.toFixed(8)})), ${a}), 0.0, 1.0))`}case`gradientRamp`:{let t=e.inputs.t?i(`t`,0):`vUV.x`;return this.gradientExpr(n.stops,t)}default:return`materialSampleMain(vUV)`}}sampleTexture(e,t){let n=this.nodeSamplerUniform.get(e.id);return n?`texture2D(${n}, fract(${t}))`:`materialSampleMain(${t})`}select(e,t){switch(t){case`R`:case`Param1`:return`((${e}).rrrr)`;case`G`:case`Param2`:return`((${e}).gggg)`;case`B`:case`Param3`:return`((${e}).bbbb)`;case`A`:case`Param4`:return`((${e}).aaaa)`;default:return`(${e})`}}constVec4(e,t=[0,0,0,0]){return`vec4(${Gg(e,t).map(e=>this.number(e,0).toFixed(8)).join(`, `)})`}scalar(e){return`vec4(${this.number(e,0).toFixed(8)})`}number(e,t){return J(e,t)}channel(e){let t=typeof e==`string`?e.toLowerCase():`r`;return t===`g`||t===`b`||t===`a`?t:`r`}gradientExpr(e,t){let n=(Array.isArray(e)?e:[]).map(e=>{let t=typeof e==`object`&&e?e:{};return{position:Math.max(0,Math.min(1,this.number(t.position,0))),color:Gg(t.color,[1,1,1,1])}}).sort((e,t)=>e.position-t.position);if(n.length===0)return`vec4(${t})`;let r=this.constVec4(n[0].color);for(let e=1;e<n.length;e++){let i=n[e-1],a=n[e],o=Math.max(1e-4,a.position-i.position),s=`clamp(((${t}) - ${i.position.toFixed(8)}) / ${o.toFixed(8)}, 0.0, 1.0)`;r=`mix(${r}, ${this.constVec4(a.color)}, ${s})`}return r}};function Wg(e,t){return t===`out`&&e.type===`dynamicParameter`?`Param1`:t}function Gg(e,t){if(typeof e==`number`)return[e,e,e,e];if(typeof e==`boolean`){let t=+!!e;return[t,t,t,t]}return Array.isArray(e)?[J(e[0],t[0]),J(e[1],t[1]),J(e[2],t[2]),J(e[3],t[3])]:[...t]}function Kg(e,t={}){let n=new Map,r=new Set,i=e=>{e&&!n.has(e)&&n.set(e,Yg(e,r))};for(let n of e.emitters)if(n.enabled){i(n.render.texture);for(let e of[n.render.material,...n.modules.trails?[n.advanced.trails.material]:[]]){let n=e?t.materialGraphProvider?.(e.shaderId):void 0;if(i(e&&bm(n,e)||null),e&&n)for(let t of qg(n,e))i(t)}n.modules.trails&&i(n.advanced.trails.texture)}return[...n.values()]}function qg(e,t){let n=new Set,r=new Map(e.nodes.map(e=>[e.id,e])),i=new Map(e.edges.map(e=>[e.id,e]));for(let a of e.nodes){if(a.type!==`textureSample`&&a.type!==`particleSubUV`&&a.type!==`antialiasedTextureMask`)continue;let o=xm(e,t,a,r,i);o.path&&!o.isMainTex&&n.add(o.path)}return[...n]}function Jg(e){return{type:`texture`,id:Xg(e),path:e}}function Yg(e,t){let n=Xg(e),r=n,i=2;for(;t.has(r);)r=`${n}-${i}`,i++;return t.add(r),{type:`texture`,id:r,path:e}}function Xg(e){return(e.split(`/`).pop()??e).replace(/\.[^.]+$/,``).trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`texture`}var Zg=new Set([`velocity`,`limitVelocityOverLifetime`,`inheritVelocity`,`color`,`size`,`rotation`,`lifetimeByEmitterSpeed`,`forceOverLifetime`,`colorBySpeed`,`sizeBySpeed`,`rotationBySpeed`,`externalForces`,`noise`,`collision`,`triggers`,`subEmitters`,`textureSheetAnimation`,`lights`,`trails`,`customData`]);function Qg(e){let t=[];return e.emitters.forEach((e,n)=>{for(let r of Ou)e.modules[r]&&!Zg.has(r)&&t.push({emitterId:e.id,emitterIndex:n,moduleKey:r,path:`emitters.${n}.modules.${r}`})}),t}function $g(e){let t=[];return e.emitters.forEach((e,n)=>{e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`?t.push({emitterId:e.id,emitterIndex:n,featureKey:`mode.meshAsset`,path:`emitters.${n}.mesh.asset`,reason:`Mesh particle assets require the Three 3D/world backend; Pixi does not render prepared 3D mesh geometry.`}):e.mode===`mesh`&&t.push({emitterId:e.id,emitterIndex:n,featureKey:`mode.mesh`,path:`emitters.${n}.mode`,reason:`Mesh mode renders as Pixi 2D shard geometry, not true 3D mesh rendering.`}),e.spawn.shape===`mesh`&&t.push({emitterId:e.id,emitterIndex:n,featureKey:`spawn.shape.mesh`,path:`emitters.${n}.spawn.shape`,reason:`Mesh spawn shape requires the Three 3D/world backend to load emission geometry; Pixi falls back to point emission.`}),e.render.depthWrite&&t.push({emitterId:e.id,emitterIndex:n,featureKey:`render.depthWrite`,path:`emitters.${n}.render.depthWrite`,reason:`depthWrite renders as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer writing.`}),e.render.shading===`lit`&&t.push({emitterId:e.id,emitterIndex:n,featureKey:`render.shading.lit`,path:`emitters.${n}.render.shading`,reason:`Lit particle shading requires the Three 3D/world backend; Pixi keeps unlit particle compositing.`}),e.modules.customData&&e.advanced.customData.channels.some(e=>e.mode!==`constant`)&&t.push({emitterId:e.id,emitterIndex:n,featureKey:`module.customData.dynamicParameters`,path:`emitters.${n}.advanced.customData.channels`,reason:`Pixi delivers Shader Custom Data DynamicParameter channels as an emitter-level representative uniform; per-particle random/curve channels require the Three world-3D backend.`})}),t}function e_(e){return Jg(e)}var t_={backend:`three3d`,label:`Three World / 3D`,coordinateSpace:`world-3d`,supportsTrue3dQuads:!0,supportsMeshParticles:!0,supportsGpuDepth:!0,supportsProjectedDepthSort:!1,supportsParticleContainerTier2:!1,supportsInstancedMaterialStreams:!0,supportsRuntimeSamplerBindings:!0};function n_(e,t){return t.length>0?`blocked`:e.length>0?`partial`:`supported`}var r_=new Set([`subEmitters`,`lights`]);function i_(e,t){let n=a_(t,`three3d`),r=c_(t);return e.emitters.forEach((e,t)=>{let i=`emitters.${t}`;e.mode===`mesh`&&e.mesh.renderMode===`pixiShard`&&n.push({code:`mode.mesh.pixiShard`,path:`${i}.mesh.renderMode`,message:`Old mesh mode is Pixi shard geometry; Three renders true mesh particles only when mesh.renderMode is meshAsset.`,emitterId:e.id,emitterIndex:t}),e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`&&(e.mesh.asset||r.push({code:`mode.meshAsset.missing`,path:`${i}.mesh.asset`,message:`Three mesh particles require a prepared mesh asset ref.`,emitterId:e.id,emitterIndex:t}));for(let[n,a]of Object.entries(e.modules))a&&r_.has(n)&&r.push({code:`module.${n}`,path:`${i}.modules.${n}`,message:`${n} is not implemented in the Three renderer MVP yet; keep it backend-gated until the Three draw path owns it.`,emitterId:e.id,emitterIndex:t});e.render.material&&e.render.material.shaderId!==`sprite-master`&&n.push({code:`material.threeAdapter`,path:`${i}.render.material`,message:`Three MVP uses the fixed-function particle material adapter; custom graph lowering is backend-gated until the Three material compiler lands.`,emitterId:e.id,emitterIndex:t})}),{backend:t_.backend,status:n_(n,r),warnings:l_(n),blockers:l_(r),...o_(t,`three3d`)}}function a_(e,t){return(e?.warnings??[]).filter(e=>!e.backend||e.backend===t).map(e=>({code:e.code,path:e.path,message:e.message}))}function o_(e,t){let n=l_(s_(e,t));return n.length>0?{notes:n}:{}}function s_(e,t){return(e?.infos??[]).filter(e=>!e.backend||e.backend===t).map(e=>({code:e.code,path:e.path,message:e.message}))}function c_(e){return e?.blockers.map(e=>({code:e.code,path:e.path,message:e.message}))??[]}function l_(e){let t=new Set,n=[];for(let r of e){let e=`${r.code}:${r.path}:${r.message}`;t.has(e)||(t.add(e),n.push(r))}return n}function u_(e){let t=e.getAttribute(`position`);if(!t||t.itemSize!==3||t.count===0)return null;let n=t.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3+0]=t.getX(e),r[e*3+1]=t.getY(e),r[e*3+2]=t.getZ(e);let i=null,a=e.getAttribute(`normal`);if(a&&a.itemSize===3&&a.count>=n){i=new Float32Array(n*3);for(let e=0;e<n;e++)i[e*3+0]=a.getX(e),i[e*3+1]=a.getY(e),i[e*3+2]=a.getZ(e)}let o=e.getIndex(),s=null;if(o&&o.count>=3){s=new Uint32Array(o.count);for(let e=0;e<o.count;e++)s[e]=o.getX(e)}return{positions:r,indices:s,normals:i}}function d_(e,t,n,r){if(!Em(t))return{texture:null,owned:!1};if(t!==`constant`){let r=f_(e,t,n);if(r)return{texture:r,owned:!0}}return t===`constant`||n?{texture:null,owned:!1}:{texture:e,owned:!1}}function f_(e,t,n,r){let i=typeof document<`u`?document:void 0;if(!i)return null;let a=e.image,o=p_(a),s=m_(a);if(!a||o<=0||s<=0)return null;let c=i.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`,{willReadFrequently:!0});if(!l)return null;try{l.drawImage(a,0,0,o,s);let e=l.getImageData(0,0,o,s);Am(e.data,t,n),l.putImageData(e,0,0)}catch{return null}let u=new Ki(c);return u.colorSpace=e.colorSpace,u.flipY=e.flipY,u.wrapS=e.wrapS,u.wrapT=e.wrapT,u.minFilter=e.minFilter,u.magFilter=e.magFilter,u.generateMipmaps=e.generateMipmaps,u.needsUpdate=!0,u}function p_(e){return e?`naturalWidth`in e&&typeof e.naturalWidth==`number`?e.naturalWidth:`videoWidth`in e&&typeof e.videoWidth==`number`?e.videoWidth:`width`in e&&typeof e.width==`number`?e.width:0:0}function m_(e){return e?`naturalHeight`in e&&typeof e.naturalHeight==`number`?e.naturalHeight:`videoHeight`in e&&typeof e.videoHeight==`number`?e.videoHeight:`height`in e&&typeof e.height==`number`?e.height:0:0}var h_=64,g_=1.25,__=.44,v_=.42,y_=new Map;function b_(e,t,n=h_){return`proc:${e}:${E_(t).toFixed(3)}:${n}`}function x_(e,t,n=h_){let r=b_(e,t,n),i=y_.get(r);if(i)return i;let a=S_(e,t,n);return y_.set(r,a),a}function S_(e,t,n){let r=Math.max(4,Math.round(n)),i=new Uint8Array(r*r*4),a=r/2,o=E_(t);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let s=n+.5-a,c=t+.5-a,l=e===`square`?w_(s,c,r,o):C_(s,c,r,o),u=(t*r+n)*4;i[u+0]=255,i[u+1]=255,i[u+2]=255,i[u+3]=Math.round(l*255)}let s=new Di(i,r,r,Ne);return s.colorSpace=Dt,s.magFilter=ge,s.minFilter=ve,s.generateMipmaps=!0,s.needsUpdate=!0,s}function C_(e,t,n,r){let i=n*__,a=Math.max(r*i,g_);return T_(Math.hypot(e,t),i,a)}function w_(e,t,n,r){let i=n*v_,a=Math.max(r*i,g_);return T_(Math.max(Math.abs(e),Math.abs(t)),i,a)}function T_(e,t,n){let r=Math.min(1,Math.max(0,(e-(t-n))/n));return 1-r*r*(3-2*r)}function E_(e){return Math.round((Number.isFinite(e)?Math.min(1,Math.max(0,e)):0)*1e3)/1e3}function D_(e){let t=e.source.version,n=e.clone();return n.source.version=t,n}var O_=new WeakMap;function k_(e){if(e.colorSpace===``)return e;let t=O_.get(e);if(t)return t;let n=D_(e);return n.colorSpace=``,O_.set(e,n),e.addEventListener(`dispose`,()=>{O_.delete(e),n.dispose()}),n}function A_(e){let t=[];for(let n in e.uniforms){let r=e.uniforms[n].value;r?.isTexture&&(t.push([n,r]),e.uniforms[n].value=null)}let n;try{n=e.clone()}finally{for(let[n,r]of t)e.uniforms[n].value=r}for(let[e,r]of t)n.uniforms[e].value=r;return n}function j_(e){return e===`opaque`?0:e===`additive`?2:1}function M_(e,t){let n=e.advanced.trails;if(!n.material)return null;let r=N_({...e,modules:{...e.modules,textureSheetAnimation:!1},render:{...e.render,material:n.material,texture:n.texture,blend:`alpha`,shading:`unlit`,depthTest:n.depthTest,depthWrite:n.depthWrite,opacitySource:`textureAlpha`,opacityInvert:!1}},t),i=r.material;if(i.vertexColors=!0,!(i instanceof oa)&&i.map&&(n.textureMode===`tile`||r.fixed?.uvPan||r.fixed?.uvRotate)){let e=D_(i.map);e.wrapS=N,e.wrapT=N,i.map=e,r.ownedTextures.push(e)}return i instanceof oa&&(i.vertexShader=i.vertexShader.replace(`uniform vec4 uDynamicParams;`,`attribute vec4 trailDynamicParams;
varying vec4 uDynamicParams;`).replace(`void main() {`,`void main() {
  uDynamicParams = trailDynamicParams;`).replace(`vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);`,`vColor = vec4(color.rgb * color.a, color.a);`),i.fragmentShader=i.fragmentShader.replace(`uniform vec4 uDynamicParams;`,`varying vec4 uDynamicParams;`)),r.unsupportedFeatures=r.unsupportedFeatures.map(e=>e.replace(`.render.material`,`.advanced.trails.material`)),r}function N_(e,t){let n=e.render.material,r=n?t.materialGraphProvider?.(n.shaderId):void 0,i=P_(e,r),a=R_(e,t,r),o=a.texture,s=[],c=null,l=null,u={rgb:!0,alpha:!0},d=!0,f=null,p=!1,m=o,h=[...a.ownedTextures],g=[I_(e)??L_(e)??``,e.render.opacitySource,Number(e.render.opacityInvert),i?`lit`:`unlit`].join(`:`);if(n){if(g=`${g}:${n.shaderId}`,!r)c=n.shaderId;else{let i=Lg(r,n,{mainTexUid:o?o.id:null});if(d=i.opacityIsConstantOne,f=n.shaderId!==`sprite-master`||hm(i.blend)?i.blend:null,n.shaderId!==`sprite-master`&&(u={rgb:i.usesParticleColorRGB,alpha:i.usesParticleColorAlpha}),g=`${g}:${r.side??`double`}:${i.blend}:${i.tier}:${i.bakeHash??i.shaderId}`,i.tier===`tier0-bake`&&o){let a=z_(o,r,n,t);a?(m=a,h.push(a),l=null,p=!0):(l=i.fixed??null,s.push(`${e.id}.render.material: Three could not bake the material texture yet.`))}else l=i.fixed??null;if(i.tier===`tier2-shader`){let a=B_(e,o,r,n,i,t);if(a)return m=null,l=null,h.push(...a.ownedTextures),{material:a.material,ownedTextures:h,fixed:l,particleColorUsage:u,opacityIsConstantOne:d,materialBlend:f,missingMaterialRef:c,unsupportedFeatures:s,key:g};s.push(`${e.id}.render.material: Three preview uses fixed-function material fallback for unsupported Tier-2 shader graphs.`)}i.tier===`tier3-defer`&&s.push(...i.diagnostics)}}let _=n||!m?{texture:null,owned:!1}:d_(m,e.render.opacitySource,e.render.opacityInvert);_.owned&&_.texture&&h.push(_.texture);let v=gm(e.render.blend,f),y=hm(v),b=p?.001:Math.max(.001,r?.opacityMaskClipValue??.333),x={color:16777215,map:m??null,alphaMap:_.texture,opacity:1,transparent:!y,alphaTest:v===`masked`?b:_.texture?.001:0,depthTest:e.render.depthTest,depthWrite:y?!0:Ff({...e.render,blend:v===`additive`?`additive`:v===`premultiplied`?`premultiplied`:`alpha`}),blending:j_(v),premultipliedAlpha:v===`premultiplied`,side:V_(r)};return{material:i?new ca({...x,metalness:0,roughness:.62}):new fi(x),ownedTextures:h,fixed:l,particleColorUsage:u,opacityIsConstantOne:d,materialBlend:f,missingMaterialRef:c,unsupportedFeatures:s,key:g}}function P_(e,t){return e.render.shading===`lit`||!!e.render.material&&t?.shadingModel===`lit`}function F_(e){return e instanceof fi||e instanceof ca||e instanceof oa}function I_(e,t){let n=e.render.material;return n&&bm(t,n)||e.render.texture}function L_(e,t){return e.mode!==`billboard`||e.render.material||I_(e,t)?null:b_(e.billboard.shape,e.billboard.softness)}function R_(e,t,n){let r=I_(e,n);if(!r){if(e.render.material){let e=K_();return{texture:e,ownedTextures:e?[e]:[]}}return e.mode===`billboard`?{texture:x_(e.billboard.shape,e.billboard.softness),ownedTextures:[]}:{texture:null,ownedTextures:[]}}return{texture:t.textureProvider?.getTexture(Jg(r))??null,ownedTextures:[]}}function z_(e,t,n,r){let i=J_(e);if(!i)return null;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;let o=a.getImageData(0,0,i.width,i.height);cg(o.data,i.width,i.height,t,n,{samplerForPath:(e,t)=>q_(e,t,r)??null}),a.putImageData(o,0,0);let s=new Ki(i);return s.colorSpace=e.colorSpace,s.flipY=e.flipY,s.wrapS=e.wrapS,s.wrapT=e.wrapT,s.minFilter=e.minFilter,s.magFilter=e.magFilter,s.generateMipmaps=e.generateMipmaps,s.needsUpdate=!0,s}function B_(e,t,n,r,i,a){if(!Vg(i))return null;let o=Hg({artifact:i,graph:n,instance:r});if(!o)return null;let s=i.fixed??{tint:[1,1,1,1],emissive:0,opacity:1,blend:n.blend},c=e=>e?k_(e):null,l={};for(let e of o.samplers)l[e.uniform]={value:c(a.textureProvider?.getTexture(Jg(e.path))??t)};let u=gm(e.render.blend,i.blend),d=hm(u),f=n.shadingModel===`lit`||!!i.usesSceneLighting;return{material:new oa({vertexShader:f?U_:H_,fragmentShader:f?`${W_}${o.fragment}`:o.fragment,lights:f,uniforms:{...f?ra.clone(K.lights):{},uTexture:{value:c(t)},uTime:{value:0},uFixedTint:{value:new bn(...s.tint)},uFixedEmissive:{value:Math.max(0,s.emissive)},uFixedOpacity:{value:s.opacity},uClipValue:{value:n.opacityMaskClipValue??.333},uSheetTiles:{value:new en(...G_(e))},uSubUv:{value:new bn(0,0,1,1)},uSubUvFromAttr:{value:0},uParticleColor:{value:new bn(1,1,1,1)},uDynamicParams:{value:new bn(0,0,0,0)},...l},transparent:!d,depthTest:e.render.depthTest,depthWrite:d?!0:i.opacityIsConstantOne?Ff({...e.render,blend:u===`additive`?`additive`:u===`premultiplied`?`premultiplied`:`alpha`}):!1,blending:j_(u),premultipliedAlpha:u===`premultiplied`,side:V_(n),forceSinglePass:!(e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`&&!d&&u!==`additive`&&V_(n)===2)}),ownedTextures:[]}}function V_(e){return e?.side===`front`?0:e?.side===`back`?1:2}var H_=`
varying vec2 vUV;
varying vec4 vColor;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,U_=`
varying vec2 vUV;
varying vec4 vColor;
varying vec3 vNfxViewPosition;
varying vec3 vNfxViewNormal;
varying vec3 vNfxWorldPosition;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vNfxViewPosition = -mvPosition.xyz;
  vNfxViewNormal = normalize(normalMatrix * normal);
  vNfxWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`,W_=`#define NFX_SCENE_LIGHTS
#include <common>
#include <lights_pars_begin>
`;function G_(e){if(!e.modules.textureSheetAnimation)return[1,1];let t=e.advanced.textureSheetAnimation;return[Math.max(1,Math.round(t.tiles[0])),Math.max(1,Math.round(t.tiles[1]))]}function K_(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=1,e.height=1;let t=e.getContext(`2d`);if(!t)return null;t.fillStyle=`#ffffff`,t.fillRect(0,0,1,1);let n=new Ki(e);return n.needsUpdate=!0,n}function q_(e,t,n){let r=n.textureProvider?.getTexture(Jg(e)),i=r?J_(r):null;if(!i)return null;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;let o=Math.min(i.width-1,Math.max(0,Math.round(t[0]*(i.width-1)))),s=Math.min(i.height-1,Math.max(0,Math.round(t[1]*(i.height-1)))),c=a.getImageData(o,s,1,1).data;return[(c[0]??0)/255,(c[1]??0)/255,(c[2]??0)/255,(c[3]??0)/255]}function J_(e){if(typeof document>`u`)return null;let t=e.image,n=Y_(t),r=X_(t);if(!t||n<=0||r<=0)return null;let i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});return a?(a.drawImage(t,0,0,n,r),i):null}function Y_(e){return e?`naturalWidth`in e?e.naturalWidth:`videoWidth`in e?e.videoWidth:`displayWidth`in e?e.displayWidth:`width`in e?Z_(e.width):0:0}function X_(e){return e?`naturalHeight`in e?e.naturalHeight:`videoHeight`in e?e.videoHeight:`displayHeight`in e?e.displayHeight:`height`in e?Z_(e.height):0:0}function Z_(e){return typeof e==`number`?e:e&&typeof e==`object`&&`baseVal`in e&&typeof e.baseVal?.value==`number`?e.baseVal.value:0}function Q_(e,t,n,r){let i=sv(r);if(!n.modules.textureSheetAnimation){let n=[rv(e,i)],r=[rv(t,i)];return{mapFrames:n,alphaMapFrames:r,shaderMap:e,ownedTextures:i?[...iv(n),...iv(r)]:[]}}let a=n.advanced.textureSheetAnimation,o=Math.max(1,Math.round(a.tiles[0])),s=Math.max(1,Math.round(a.tiles[1]));if(o*s<=1){let n=[rv(e,i)],r=[rv(t,i)];return{mapFrames:n,alphaMapFrames:r,shaderMap:e,ownedTextures:i?[...iv(n),...iv(r)]:[]}}let c=nv(e,o,s),l=nv(t,o,s);return{mapFrames:c,alphaMapFrames:l,shaderMap:e,ownedTextures:[...iv(c),...iv(l)]}}function $_(e,t,n,r){return e.modules.textureSheetAnimation?Nh(e.advanced.textureSheetAnimation,t,n,r).frame:0}function ev(e,t,n,r,i){let a=av(t.mapFrames,n),o=av(t.alphaMapFrames,n),s=a.texture,c=o.texture;ov(a,r,i),ov(o,r,i),e.map!==s&&(e.map=s,e.needsUpdate=!0),e.alphaMap!==c&&(e.alphaMap=c,e.alphaTest=c?.001:0,e.needsUpdate=!0)}function tv(e,t,n,r,i){let a=av(t.mapFrames,n);ov(a,r,i);let o=e.uniforms.uSubUv?.value,s=a.texture;o&&(o.set(s?.offset.x??a.offsetX,s?.offset.y??a.offsetY,s?.repeat.x??a.repeatX,s?.repeat.y??a.repeatY),e.uniformsNeedUpdate=!0);let c=e.uniforms.uTexture,l=t.shaderMap??a.texture;c&&c.value!==l&&(c.value=l,e.uniformsNeedUpdate=!0)}function nv(e,t,n){if(!e)return[rv(null,!1)];let r=[];for(let i=0;i<t*n;i++){let a=i%t,o=Math.floor(i/t);r.push(rv(e,!0,{offsetX:e.offset.x+a*e.repeat.x/t,offsetY:e.offset.y+(n-o-1)*e.repeat.y/n,repeatX:e.repeat.x/t,repeatY:e.repeat.y/n}))}return r}function rv(e,t,n){let r=t&&e?D_(e):e;return{texture:r,offsetX:n?.offsetX??r?.offset.x??0,offsetY:n?.offsetY??r?.offset.y??0,repeatX:n?.repeatX??r?.repeat.x??1,repeatY:n?.repeatY??r?.repeat.y??1,centerX:r?.center.x??0,centerY:r?.center.y??0,rotation:r?.rotation??0}}function iv(e){return e.map(e=>e.texture).filter(e=>!!e)}function av(e,t){return e[cv(t,e.length)]??e[0]}function ov(e,t,n){let r=e.texture;if(!r)return;let i=t?.uvPan,a=t?.uvRotate;r.repeat.set(e.repeatX,e.repeatY),r.offset.set(e.offsetX+(i?.speed[0]??0)*n*e.repeatX,e.offsetY+(i?.speed[1]??0)*n*e.repeatY),a?(r.center.set(e.offsetX+a.center[0]*e.repeatX,e.offsetY+a.center[1]*e.repeatY),r.rotation=a.speed*n*Math.PI*2):(r.center.set(e.centerX,e.centerY),r.rotation=e.rotation)}function sv(e){let t=e?.uvPan,n=e?.uvRotate;return!!(t&&(Math.abs(t.speed[0])>1e-6||Math.abs(t.speed[1])>1e-6)||n&&Math.abs(n.speed)>1e-6)}function cv(e,t){return t<=0?0:(e%t+t)%t}function lv(e){let t=e.getIndex();if(t){for(let e=0;e<t.count-2;e+=3){let n=t.getX(e+1);t.setX(e+1,t.getX(e+2)),t.setX(e+2,n)}t.needsUpdate=!0}else for(let t of Object.values(e.attributes))uv(t,1,2);dv(e.getAttribute(`normal`),3),dv(e.getAttribute(`tangent`),3)}function uv(e,t,n){if(!(e instanceof Br))return;let r=e.itemSize,i=e.array;for(let a=0;a<e.count-2;a+=3){let e=(a+t)*r,o=(a+n)*r;for(let t=0;t<r;t++){let n=i[e+t];i[e+t]=i[o+t],i[o+t]=n}}e.needsUpdate=!0}function dv(e,t){if(!(e instanceof Br))return;let n=e.itemSize,r=e.array,i=Math.min(n,t);for(let t=0;t<e.count;t++){let e=t*n;for(let t=0;t<i;t++)r[e+t]=-(r[e+t]??0)}e.needsUpdate=!0}var fv=65472,pv=Math.log2(1+fv),mv=1.6,hv=.65;function gv(e,t){return _v(e,t,[0,0,0])}function _v(e,t,n){let r=2**wv(t,-2,2),i=e[0]*r,a=e[1]*r,o=e[2]*r,s=Math.max(i,a,o);if(s<=1)return n[0]=i,n[1]=a,n[2]=o,n;let c=i*.59719+a*.35458+o*.04823,l=i*.076+a*.90834+o*.01566,u=i*.0284+a*.13383+o*.83777,d=yv(c),f=yv(l),p=yv(u),m=wv(d*1.60475+f*-.53108+p*-.07367,0,1),h=wv(d*-.10208+f*1.10813+p*-.00605,0,1),g=wv(d*-.00327+f*-.07276+p*1.07602,0,1);if(i>=s){let e=wv((i-Math.max(a,o))/i,0,1),t=Math.log2(Math.max(1,s)),n=e*wv((t-1)/8,0,1);n>0&&(m=bv(m,1,n),h=bv(h,.92*(1-Math.exp(-t/10)),n),g=bv(g,.62*(1-Math.exp(-t/16)),n))}return n[0]=m,n[1]=h,n[2]=g,n}function vv(e,t,n,r=.5){let i=gv(e,n),a=xv(e,t,r),o=Math.max(a[0],a[1],a[2]);if(o<=0)return i;let s=Math.max(e[0],e[1],e[2])>1?1/o:1,c=1+Cv(o)*hv;return[Math.max(i[0],a[0]*s*c),Math.max(i[1],a[1]*s*c),Math.max(i[2],a[2]*s*c)]}function yv(e){let t=Math.max(0,e),n=t*(t+.0245786)-90537e-9,r=t*(.983729*t+.432951)+.238081;return r>0?n/r:0}function bv(e,t,n){return e+(t-e)*n}function xv(e,t,n){let r=Math.max(e[0],e[1],e[2]);if(r<=0)return[0,0,0];let i=Sv(r,t,n);return[e[0]*i,e[1]*i,e[2]*i]}function Sv(e,t,n){if(t<=0)return 1;let r=Math.max(0,t*n),i=Math.max(e-t,0);if(r<=0)return wv(i/e,0,1);let a=wv(e-t+r,0,r*2),o=a*a/(4*r);return wv(Math.max(i,o)/e,0,1)}function Cv(e){let t=wv(Math.max(0,e),0,fv);return pv>0?(Math.log2(1+t)/pv)**+mv:0}function wv(e,t,n){return Math.min(n,Math.max(t,e))}var Tv=`
attribute vec3 aInstanceColor;
attribute float aInstanceAlpha;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vUv = uv;
  vInstanceColor = vec4(aInstanceColor, aInstanceAlpha);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,Ev=`
uniform sampler2D uTexture;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vec4 sampled = texture2D(uTexture, vUv);
  vec4 color = sampled * vInstanceColor;
  if (color.a <= 0.001) discard;
  gl_FragColor = color;
  #include <colorspace_fragment>
}
`;function Dv(e,t){return!(!t||e.mode!==`billboard`||e.render.shading!==`unlit`||e.render.material||e.modules.trails||e.modules.textureSheetAnimation||e.render.opacitySource!==`textureAlpha`||e.render.opacityInvert||e.render.blend!==`alpha`&&e.render.blend!==`additive`)}var Ov=class{constructor(e,t,n,r){q(this,`mesh`),q(this,`geometry`),q(this,`material`),q(this,`colors`),q(this,`alphas`),q(this,`depths`),q(this,`colorAttribute`),q(this,`alphaAttribute`),q(this,`sortScratch`,null),q(this,`depthWriteAuthored`);let i=Math.max(1,Math.floor(n));this.geometry=e.clone(),this.colors=new Float32Array(i*3),this.alphas=new Float32Array(i),this.depths=new Float32Array(i),this.colorAttribute=new Oi(this.colors,3),this.alphaAttribute=new Oi(this.alphas,1),this.colorAttribute.setUsage(Nt),this.alphaAttribute.setUsage(Nt),this.geometry.setAttribute(`aInstanceColor`,this.colorAttribute),this.geometry.setAttribute(`aInstanceAlpha`,this.alphaAttribute),this.depthWriteAuthored=Ff(r.render),this.material=new oa({vertexShader:Tv,fragmentShader:Ev,uniforms:{uTexture:{value:t}},transparent:!0,depthTest:r.render.depthTest,depthWrite:this.depthWriteAuthored,blending:r.render.blend===`additive`?2:1,side:2,toneMapped:!1}),this.mesh=new Ii(this.geometry,this.material,i),this.mesh.instanceMatrix.setUsage(Nt),this.mesh.count=0,this.mesh.visible=!1,this.mesh.frustumCulled=!1}setRenderState(e){this.material.depthTest=e.render.depthTest,this.depthWriteAuthored=Ff(e.render),this.material.depthWrite=this.depthWriteAuthored,this.material.blending=e.render.blend===`additive`?2:1}write(e,t,n,r,i=0){this.mesh.setMatrixAt(e,t);let a=e*3;this.colors[a+0]=n.r,this.colors[a+1]=n.g,this.colors[a+2]=n.b,this.alphas[e]=r,this.depths[e]=i}sortByCameraDistance(e,t){if(e<=1)return;let n=this.ensureSortScratch(),r=n.order;for(let t=0;t<e;t++)r[t]=t;let i=this.depths;r.subarray(0,e).sort(t?(e,t)=>(i[t]??0)-(i[e]??0):(e,t)=>(i[e]??0)-(i[t]??0));let a=!0;for(let t=0;t<e;t++)if(r[t]!==t){a=!1;break}if(a)return;let o=this.mesh.instanceMatrix.array;n.matrices.set(o.subarray(0,e*16)),n.colors.set(this.colors.subarray(0,e*3)),n.alphas.set(this.alphas.subarray(0,e));for(let t=0;t<e;t++){let e=r[t]??t,i=e*16,a=t*16;for(let e=0;e<16;e++)o[a+e]=n.matrices[i+e]??0;let s=e*3,c=t*3;this.colors[c+0]=n.colors[s+0]??0,this.colors[c+1]=n.colors[s+1]??0,this.colors[c+2]=n.colors[s+2]??0,this.alphas[t]=n.alphas[e]??0}}ensureSortScratch(){if(!this.sortScratch){let e=this.alphas.length;this.sortScratch={order:new Uint32Array(e),matrices:new Float32Array(e*16),colors:new Float32Array(e*3),alphas:new Float32Array(e)}}return this.sortScratch}commit(e){if(this.mesh.count=e,this.mesh.visible=e>0,!(e<=0)){if(this.depthWriteAuthored){let t=!0;for(let n=0;n<e;n++)if((this.alphas[n]??0)<.999){t=!1;break}this.material.depthWrite=t}this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0}}setRenderOrder(e){this.mesh.renderOrder=e}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}},kv=2135587861,Av=1/60,jv=new Zi(1,1),Mv=new H(...Pm),Nv=new H(...Nm),Pv=class{constructor(e){q(this,`options`,e),q(this,`root`,new $n),q(this,`stats`,dy()),q(this,`effect`),q(this,`runner`),q(this,`emitterViews`,[]),q(this,`debugTransforms`,[]),q(this,`emitterLayerRanks`,[]),q(this,`position`),q(this,`seed`),q(this,`timeSeconds`),q(this,`paused`,!1),q(this,`destroyed`,!1),q(this,`visible`,!0),q(this,`captureDebugTransforms`),q(this,`renderOrder`,0),q(this,`camera`),q(this,`previewBloomEnabled`),q(this,`previewBloomThreshold`),q(this,`previewExposureStops`),q(this,`scratchWorld`,new H),q(this,`scratchAlignmentAxis`,new H),q(this,`scratchRight`,new H),q(this,`scratchForward`,new H),q(this,`scratchQuaternion`,new tn),q(this,`scratchRollQuaternion`,new tn),q(this,`scratchEuler`,new Fn),q(this,`scratchMatrix`,new Tn),q(this,`scratchBasisMatrix`,new Tn),q(this,`scratchPivotMatrix`,new Tn),q(this,`scratchScale`,new H),q(this,`scratchColor`,new W),q(this,`motionScratch`,{position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]}),q(this,`motionModuleScratch`,{seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:this.motionScratch.position,velocity:this.motionScratch.velocity}),q(this,`sampleSizeScratch`,{x:1,y:1,z:1}),q(this,`initialColorScratch`,[1,1,1,1]),q(this,`secondaryColorScratch`,[1,1,1,1]),q(this,`moduleColorScratch`,[1,1,1,1]),q(this,`hdrColorScratch`,[1,1,1]),q(this,`renderColorScratch`,[1,1,1]),q(this,`analyticVelocityScratch`,[0,0,0]),q(this,`preCollisionWorldScratch`,[0,0,0]),q(this,`effectiveAlignmentVelocity`,[0,0,0]),q(this,`emissionOverrides`,new Map),q(this,`renderGeometryOverrides`,new Map),q(this,`renderGeometryGeneration`,0),q(this,`emitterDrawParameters`,new Map),q(this,`emissionBoundSources`,new Map),q(this,`sampleScratch`,{visible:!0,position:[0,0,0],velocity:[0,0,0],speed:0,normalizedAge:0,loopAge:0,start:0,seed:0,width:1,height:1,depthScale:1,depth:0,rotation:[0,0,0],color:new W,shaderColor:[1,1,1],trailColor:[1,1,1,1],alpha:1,alignmentAxis:new H,normal:new H,emissiveStrength:0,textureFrameIndex:0}),this.effect=Iv(e.effect),this.camera=e.camera,this.runner=new kp(this.effect),this.position=hy(e.position??[0,0,0]),this.captureDebugTransforms=e.captureDebugTransforms!==!1,this.seed=vy(e.seed),this.timeSeconds=Math.max(0,e.timeSeconds??0),this.previewBloomThreshold=Math.max(0,e.previewBloomThreshold??1),this.previewBloomEnabled=e.previewBloomEnabled===!0,this.previewExposureStops=_y(e.previewExposureStops??0,-2,2),this.runner.setRuntimeParameters(e.runtimeParameters??{}),this.syncEmissionGeometries(),this.setTransform({position:this.position,rotation:e.rotation,scale:e.scale}),e.autoStart!==!1&&this.play()}get isActive(){return this.runner.isActive}play(){this.destroyed||(this.paused=!1,this.runner.isActive?this.runner.resumeEmission():this.runner.reset(this.effect,this.position,this.timeSeconds,this.seed),this.draw(this.timeSeconds))}pause(){this.paused=!0}stop(){this.runner.stop(),this.clearViews(),this.syncStats(0,0,0,0,0)}allowCompletion(){this.runner.allowCompletion()}setRuntimeParameters(e){this.runner.setRuntimeParameters(e)}setRenderOrder(e){this.renderOrder=Number.isFinite(e)?e:0,this.root.renderOrder=this.renderOrder;for(let e=0;e<this.emitterViews.length;e++){let t=this.emitterViews[e];if(!t)continue;let n=this.emitterLayerRanks[e]??e;t.instanced?.setRenderOrder(this.renderOrder+n),t.trailMesh.renderOrder=this.renderOrder+n}}seek(e){if(this.destroyed)return;let t=Math.max(0,Number.isFinite(e)?e:0);this.timeSeconds=0,this.runner.reset(this.effect,this.position,0,this.seed);let n=0;for(;n<t;){let e=Math.min(Av,t-n);n+=e,this.runner.update(e,n)}this.timeSeconds=t,this.draw(t)}update(e){if(this.destroyed||this.paused)return;let t=Math.max(0,Number.isFinite(e)?e:0);this.timeSeconds+=t,this.syncEmissionGeometries(),t>0&&this.runner.update(t,this.timeSeconds),this.draw(this.timeSeconds)}setEmitterRuntimeParameters(e,t){if(this.destroyed)return;let{sizeMultiplier:n,colorTint:r,sizeMultiplierValue:i,colorOverLifetimeGradient:a,...o}=t;if((o.emissionRateMultiplier!==void 0||o.initialVelocityMultiplier!==void 0)&&this.runner.setEmitterRuntimeParameters(e,o),n===void 0&&r===void 0&&i===void 0&&a===void 0)return;let s=this.emitterDrawParameters.get(e)??{sizeMultiplier:1,colorTint:[1,1,1,1],sizeMultiplierValue:null,colorOverLifetimeGradient:null};n!==void 0&&(s.sizeMultiplier=Number.isFinite(n)?Math.max(0,n):1),r!==void 0&&(s.colorTint=[gy(r[0]),gy(r[1]),gy(r[2]),gy(r[3])]),i!==void 0&&(s.sizeMultiplierValue=i?ep($f(i,1,0,100)):null),a!==void 0&&(s.colorOverLifetimeGradient=a?rp(a,[1,1,1,1],[1,1,1,1]):null),this.emitterDrawParameters.set(e,s)}emitBurst(e,t={}){return this.destroyed?0:(this.paused=!1,this.runner.isActive||this.play(),this.syncEmissionGeometries(),this.runner.emitBurst(e,t))}restart(){this.destroyed||(this.paused=!1,this.seek(0))}setRenderGeometry(e,t){if(!this.destroyed){if(t)this.renderGeometryOverrides.set(e,{geometry:t,generation:++this.renderGeometryGeneration});else{if(!this.renderGeometryOverrides.has(e))return;this.renderGeometryOverrides.delete(e)}this.ensureViews()}}setEmissionGeometry(e,t){this.destroyed||(t?this.emissionOverrides.set(e,t):this.emissionOverrides.delete(e),this.emissionBoundSources.delete(e),this.syncEmissionGeometries())}syncEmissionGeometries(){for(let e of this.effect.emitters){if(e.spawn.shape!==`mesh`)continue;let t=this.emissionOverrides.get(e.id),n=!t&&e.spawn.meshAsset?this.options.meshProvider?.getMeshGeometry(e.spawn.meshAsset)??null:null,r=t??n;if(this.emissionBoundSources.get(e.id)===r&&this.emissionBoundSources.has(e.id))continue;let i=r?u_(r):null;this.runner.setEmissionGeometry(e.id,i),this.emissionBoundSources.set(e.id,r)}}setTransform(e){e.position&&(this.position[0]=e.position[0],this.position[1]=e.position[1],this.position[2]=e.position[2],this.runner.setPosition(this.position),this.root.position.set(e.position[0],e.position[1],e.position[2])),e.rotation&&this.root.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),e.scale&&this.root.scale.set(e.scale[0],e.scale[1],e.scale[2])}setVisible(e){this.visible=e,this.root.visible=e}setCamera(e){this.camera=e,this.draw(this.timeSeconds)}setPreviewBloomOptions(e){typeof e.enabled==`boolean`&&(this.previewBloomEnabled=e.enabled),this.previewBloomThreshold=Math.max(0,e.threshold??this.previewBloomThreshold),this.previewExposureStops=_y(e.exposureStops??this.previewExposureStops,-2,2),this.draw(this.timeSeconds)}updateDefinition(e,t={}){return this.effect=Iv(e),this.runner.updateDefinition(this.effect),this.emissionBoundSources.clear(),this.syncEmissionGeometries(),t.preserveViews||this.rebuildViews(),this.effect}getParticleDebugTransforms(e=[]){return e.push(...this.debugTransforms),e}destroy(){this.destroyed||(this.destroyed=!0,this.stop(),this.rebuildViews(),this.root.removeFromParent())}draw(e){if(!this.visible)return;this.ensureViews(),this.debugTransforms.length=0,Jv(this.runner.definition.emitters,this.emitterLayerRanks);let t=0,n=0,r=0,i=0,a=0;for(let o=0;o<this.effect.emitters.length;o++){let s=this.runner.definition.emitters[o],c=this.runner.states[o],l=this.emitterViews[o];if(!s||!c||!l||!s.enabled){l&&(ly(l,0),l.instanced?.commit(0),Wv(l),l.trailMesh.removeFromParent());continue}let u=this.drawEmitter(l,s,c,o,e);t+=u.visibleParticles,n+=u.bloomSourceParticles,r+=u.drawCalls,i+=u.instancedDrawCalls,a+=u.legacyParticleDrawCalls}this.syncStats(t,n,r,i,a)}drawEmitter(e,t,n,r,i){if(t.mode===`mesh`&&t.mesh.renderMode===`meshAsset`&&!this.renderGeometryOverrides.has(t.id)&&(!t.mesh.asset||!this.options.meshProvider?.getMeshGeometry(t.mesh.asset)))return ly(e,0),e.instanced?.commit(0),Wv(e),e.trailMesh.removeFromParent(),fy();let a=gm(t.render.blend,e.materialBlend),o=hm(a);e.material.depthTest=t.render.depthTest;let s=o?!0:Ff({...t.render,blend:a===`additive`?`additive`:a===`premultiplied`?`premultiplied`:`alpha`}),c=j_(a),l=a===`premultiplied`;e.material.depthWrite=s,e.material.blending=c,e.material.premultipliedAlpha=l,e.instanced?.setRenderState(t),e.trailResolution||(e.trailMaterial.depthTest=t.render.depthTest,e.trailMaterial.depthWrite=s,e.trailMaterial.blending=c,e.trailMaterial.premultipliedAlpha=l,o&&(e.trailMaterial.transparent=!1)),o&&(e.material.transparent=!1),Hv(e,t,this.position);let u=0,d=0,f=0,p=0;e.instanced&&ay(n,t.render.sortMode,e.particleOrder);for(let a=0;a<n.activeCount;a++){let o=e.instanced?e.particleOrder[a]??a:a,s=this.sampleParticle(t,n,o,i,e.materialFixed,e.materialParticleColorUsage);if(s?.visible){if(e.instanced){let n=this.applySampleToInstanced(e.instanced,s,e,t,r,o,u);f+=n,p+=s.start}else{let n=this.acquireMesh(e,u);this.applySampleToMesh(n,s,e,t,r,o,i)}u++,Vv(e,t,s,i),s.emissiveStrength>this.previewBloomThreshold&&d++}}ly(e,u),e.instanced&&u>1&&(t.render.sortMode===`distanceFarFirst`?e.instanced.sortByCameraDistance(u,!0):t.render.sortMode===`distanceNearFirst`&&e.instanced.sortByCameraDistance(u,!1)),e.instanced?.commit(u),e.instanced?.setRenderOrder(Yv(this.renderOrder+(this.emitterLayerRanks[r]??r),t.render.sortMode,u>0?f/u:0,u>0?p/u:0));let m=0;return t.modules.trails?(e.trailMesh.parent||this.root.add(e.trailMesh),e.trailMesh.renderOrder=this.renderOrder+(this.emitterLayerRanks[r]??r),Uv(e,t,this.camera,i),m=+!!e.trailMesh.visible):(Wv(e),e.trailMesh.removeFromParent()),{visibleParticles:u,bloomSourceParticles:d,drawCalls:(u>0?e.instanced?1:u:0)+m,instancedDrawCalls:u>0&&e.instanced?1:0,legacyParticleDrawCalls:e.instanced?0:u}}sampleParticle(e,t,n,r,i,a){let o=t.instanceData,s=n*18,c=o[s+3]??0,l=Math.max(.001,o[s+7]??.001),u=r-c,d=u/l;if(d<-1e-6||d>1.000001)return;let f=_y(d,0,1),p=Math.max(0,u),m=_y(t.age/Math.max(.001,e.duration),0,1),h=o[s+8]??.5,g=Mp(e,t,n,p,f,this.position,this.motionScratch,this.runner.effectiveInitialVelocityMultiplier(e.id)),_=g.velocity,v=g.position,y=Math.hypot(_[0],_[1],_[2]),b=e.render.alignAxis===`velocity`;b&&(this.analyticVelocityScratch[0]=_[0],this.analyticVelocityScratch[1]=_[1],this.analyticVelocityScratch[2]=_[2]);let x=this.motionModuleScratch;if(x.seed=h,x.normalizedAge=f,x.loopAge=m,x.ageSeconds=p,x.timeSeconds=r,x.world=v,x.velocity=_,ph(e,x),Lp(e,t,n,v,_,this.position),b&&(Pp(e,t,n,this.analyticVelocityScratch),this.preCollisionWorldScratch[0]=v[0],this.preCollisionWorldScratch[1]=v[1],this.preCollisionWorldScratch[2]=v[2]),e.modules.collision&&!wh(e,x))return;let S=oy(e,t,n,f,y,h,m,this.sampleSizeScratch),C=(o[s+13]??0)+p*(o[s+15]??0),w=(o[s+14]??0)+p*(o[s+16]??0),T=Fm(o[s+9]??0,o[s+10]??0,p,kh(e,y,p,h,m)),E=pf(e.initializeParticle.color,h,f,m,this.initialColorScratch,this.secondaryColorScratch),D=Math.max(0,Y(e.initializeParticle.color.intensity,f,h,m)),O=this.emitterDrawParameters.get(e.id),k=O?.colorOverLifetimeGradient?sy(O.colorOverLifetimeGradient,f,this.moduleColorScratch):!e.modules.colorBySpeed&&!e.modules.lights?cy(e,f,this.moduleColorScratch):Dh(e,f,y,h,void 0,m),A=i?.tint??[1,1,1,1],ee=i?1+Math.max(0,i.emissive):1,j=i?.opacity??1,M=a.rgb?E[0]*D*k[0]:1,te=a.rgb?E[1]*D*k[1]:1,ne=a.rgb?E[2]*D*k[2]:1,re=a.alpha?E[3]*k[3]:1,ie=this.hdrColorScratch;ie[0]=Math.max(0,M*A[0]*ee),ie[1]=Math.max(0,te*A[1]*ee),ie[2]=Math.max(0,ne*A[2]*ee);let ae=this.previewBloomEnabled?vv(ie,this.previewBloomThreshold,this.previewExposureStops):_v(ie,this.previewExposureStops,this.renderColorScratch),oe=this.scratchColor.setRGB(ae[0],ae[1],ae[2],Dt),se=_y(re*A[3]*j,0,1),ce=_,le=y;if(b){let i=Th(e,t,n,p,l,r,h,m,this.position,this.runner.effectiveInitialVelocityMultiplier(e.id),this.preCollisionWorldScratch,this.effectiveAlignmentVelocity);i[0]+=_[0]-this.analyticVelocityScratch[0],i[1]+=_[1]-this.analyticVelocityScratch[1],i[2]+=_[2]-this.analyticVelocityScratch[2],ce=i,le=Math.hypot(i[0],i[1],i[2])}let ue=this.resolveParticleAlignmentAxis(e,t,n,ce,le),N=this.sampleScratch;N.visible=!0,N.position[0]=v[0],N.position[1]=v[1],N.position[2]=v[2],N.velocity[0]=_[0],N.velocity[1]=_[1],N.velocity[2]=_[2],N.speed=y,N.normalizedAge=f,N.loopAge=m,N.start=c,N.seed=h;let de=Np(t,n);if(N.width=S.x*(de?e.spawn.scale[0]:1),N.height=S.y*(de?e.spawn.scale[1]:1),N.depthScale=S.z*(de?e.spawn.scale[2]:1),N.depth=v[2],N.rotation[0]=C,N.rotation[1]=w,N.rotation[2]=T+(de&&e.render.alignAxis===`screen`?e.spawn.rotation[2]*Math.PI/180:0),N.color.copy(oe),N.shaderColor[0]=ae[0],N.shaderColor[1]=ae[1],N.shaderColor[2]=ae[2],N.alpha=se,e.modules.trails&&e.advanced.trails.material&&(N.trailColor[0]=E[0]*D*k[0],N.trailColor[1]=E[1]*D*k[1],N.trailColor[2]=E[2]*D*k[2],N.trailColor[3]=E[3]*k[3]),N.alignmentAxis.copy(ue),N.normal.copy(ue),N.emissiveStrength=Math.max(ie[0],ie[1],ie[2]),N.textureFrameIndex=$_(e,f,h,m),O){let e=O.sizeMultiplier;O.sizeMultiplierValue&&(e*=Math.max(0,tp(O.sizeMultiplierValue,f,h))),N.width*=e,N.height*=e,N.depthScale*=e;let t=O.colorTint;N.color.r*=t[0],N.color.g*=t[1],N.color.b*=t[2],N.shaderColor[0]*=t[0],N.shaderColor[1]*=t[1],N.shaderColor[2]*=t[2],N.alpha*=t[3];for(let e=0;e<4;e++)N.trailColor[e]*=t[e]}return N}resolveParticleAlignmentAxis(e,t,n,r,i){let a=this.scratchAlignmentAxis;if(e.render.alignAxis===`screen`)return a.copy(Nv).applyQuaternion(this.camera.quaternion),py(a,Nv);if(e.render.alignAxis===`velocity`){if(a.set(r[0],r[1],r[2]),i>1e-6)return py(a,Mv);let o=n*3;a.set(t.spawnDirectionData[o+0]??0,t.spawnDirectionData[o+1]??1,t.spawnDirectionData[o+2]??0);let s=[a.x,a.y,a.z];return Pp(e,t,n,s),a.set(...s),py(a,Mv)}if(e.render.alignAxis===`spawnDirection`){let r=n*3;a.set(t.spawnDirectionData[r+0]??0,t.spawnDirectionData[r+1]??1,t.spawnDirectionData[r+2]??0);let i=[a.x,a.y,a.z];return Pp(e,t,n,i),a.set(...i),py(a,Mv)}return a.set(e.render.alignmentVector[0],e.render.alignmentVector[1],e.render.alignmentVector[2]),py(a,Nv)}applySampleOrientation(e,t){if(t.render.alignAxis===`screen`&&t.render.facing===`cameraPlane`){this.scratchQuaternion.copy(this.camera.quaternion),this.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1),e.normal.copy(py(this.scratchForward,Mv));return}let n=py(this.scratchAlignmentAxis.copy(e.alignmentAxis),Nv);if(t.render.facing===`off`){this.scratchQuaternion.setFromUnitVectors(Mv,n),e.normal.copy(n);return}t.render.facing===`cameraPosition`?this.scratchForward.set(this.camera.position.x-e.position[0],this.camera.position.y-e.position[1],this.camera.position.z-e.position[2]):(this.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1));let r=py(this.scratchForward,Mv),i=this.scratchRight.crossVectors(n,r);i.lengthSq()<=1e-6?(my(n,i),r.crossVectors(i,n)):(i.normalize(),r.crossVectors(i,n)),py(r,Mv),this.scratchBasisMatrix.makeBasis(i,n,r),this.scratchQuaternion.setFromRotationMatrix(this.scratchBasisMatrix),e.normal.copy(r)}applySampleToMesh(e,t,n,r,i,a,o){let s=Array.isArray(e.material)?e.material[0]:e.material;if(!s||!F_(s))return;if(s instanceof oa)zv(s,r,n.textureFrames,t,t.textureFrameIndex,n.materialFixed,n.materialBlend,n.materialOpacityIsConstantOne,o);else{ev(s,n.textureFrames,t.textureFrameIndex,n.materialFixed,o);let e=gm(r.render.blend,n.materialBlend);s.depthTest=r.render.depthTest,s.color.copy(t.color),hm(e)?(s.depthWrite=!0,s.blending=j_(e),s.opacity=e===`opaque`?1:t.alpha,s.transparent=!1):(s.depthWrite=Ff({...r.render,blend:e===`additive`?`additive`:e===`premultiplied`?`premultiplied`:`alpha`},t.alpha),s.blending=j_(e),s.premultipliedAlpha=e===`premultiplied`,s.opacity=t.alpha,s.transparent=t.alpha<1||e===`additive`||e===`premultiplied`||Rv(s,r)),`emissive`in s&&(s.emissive.copy(t.color),s.emissiveIntensity=Math.max(0,t.emissiveStrength-1)),s.needsUpdate=!0}this.scratchWorld.set(t.position[0],t.position[1],t.position[2]),e.renderOrder=Yv(this.renderOrder+(this.emitterLayerRanks[i]??i),r.render.sortMode,this.scratchWorld.distanceToSquared(this.camera.position),t.start);let c=this.writeSampleMatrix(t,n,r,i,a);e.matrixAutoUpdate=!1,e.matrix.copy(c),e.matrixWorldNeedsUpdate=!0,e.visible=!0}applySampleToInstanced(e,t,n,r,i,a,o){let s=this.writeSampleMatrix(t,n,r,i,a),c=t.position[0]-this.camera.position.x,l=t.position[1]-this.camera.position.y,u=t.position[2]-this.camera.position.z,d=c*c+l*l+u*u;return e.write(o,s,t.color,t.alpha,d),d}writeSampleMatrix(e,t,n,r,i){this.applySampleOrientation(e,n),this.scratchEuler.set(e.rotation[0],e.rotation[1],e.rotation[2]),this.scratchRollQuaternion.setFromEuler(this.scratchEuler),this.scratchQuaternion.multiply(this.scratchRollQuaternion),this.scratchScale.set(e.width,e.height,n.mode===`mesh`&&n.mesh.renderMode===`meshAsset`?e.depthScale:1),this.scratchWorld.set(e.position[0]-this.position[0],e.position[1]-this.position[1],e.position[2]-this.position[2]),this.scratchMatrix.compose(this.scratchWorld,this.scratchQuaternion,this.scratchScale);let a=n.mode===`mesh`?n.mesh.pivot[0]*t.pivotBoundsSize[0]:n.billboard.pivot[0]*t.pivotBoundsSize[0],o=n.mode===`mesh`?n.mesh.pivot[1]*t.pivotBoundsSize[1]:n.billboard.pivot[1]*t.pivotBoundsSize[1],s=n.mode===`mesh`?n.mesh.pivot[2]*t.pivotBoundsSize[2]:0;return(a!==0||o!==0||s!==0)&&(this.scratchPivotMatrix.makeTranslation(-a,-o,-s),this.scratchMatrix.multiply(this.scratchPivotMatrix)),this.captureDebugTransforms&&this.debugTransforms.push({emitterId:n.id,emitterIndex:r,particleIndex:i,mode:n.mode===`billboard`?`billboard`:n.mesh.renderMode===`meshAsset`?`meshAsset`:`pixiShard`,position:[...e.position],normal:[e.normal.x,e.normal.y,e.normal.z],width:e.width,height:e.height,depth:e.depth,localBounds:t.debugBounds,matrix:this.scratchMatrix.toArray()}),this.scratchMatrix}acquireMesh(e,t){let n=e.meshes[t];if(n)return n;let r=e.material instanceof oa?A_(e.material):e.material.clone();return n=new wi(e.geometry,r),n.frustumCulled=!1,e.meshes[t]=n,this.root.add(n),n}ensureViews(){for(let e=0;e<this.effect.emitters.length;e++){let t=this.effect.emitters[e],n={effect:this.effect,renderGeometryOverride:this.renderGeometryOverrides.get(t.id)??null},r=ry(t,this.options,n);if(this.emitterViews[e]?.staticKey===r)continue;this.emitterViews[e]&&uy(this.emitterViews[e]);let i=Lv(t,this.options,n);this.emitterViews[e]=i,i.instanced&&this.root.add(i.instanced.mesh)}for(;this.emitterViews.length>this.effect.emitters.length;){let e=this.emitterViews.pop();e&&uy(e)}}rebuildViews(){for(let e of this.emitterViews)uy(e);this.emitterViews.length=0}clearViews(){for(let e of this.emitterViews)ly(e,0),e.instanced?.commit(0)}syncStats(e,t,n,r,i){this.stats.activeParticles=this.runner.stats.activeParticles,this.stats.visibleParticles=e,this.stats.capacity=this.runner.stats.capacity,this.stats.emittedLastFrame=this.runner.stats.emittedLastFrame,this.stats.bloomSourceParticles=t,this.stats.drawCalls=n,this.stats.instancedDrawCalls=r,this.stats.legacyParticleDrawCalls=i,this.stats.missingMeshRefs=this.collectMissingMeshRefs(),this.stats.missingMaterialRefs=this.collectMissingMaterialRefs();let a=this.emitterViews.flatMap(e=>e.unsupportedFeatures);this.stats.unsupportedFeatures=[...i_(this.effect).blockers.map(e=>`${e.path}: ${e.message}`),...a]}collectMissingMeshRefs(){let e=[];for(let t of this.effect.emitters)t.mode===`mesh`&&t.mesh.renderMode===`meshAsset`&&t.mesh.asset&&!this.renderGeometryOverrides.has(t.id)&&!this.options.meshProvider?.getMeshGeometry(t.mesh.asset)&&e.push(t.mesh.asset),t.spawn.shape===`mesh`&&t.spawn.meshAsset&&!this.emissionOverrides.has(t.id)&&!this.options.meshProvider?.getMeshGeometry(t.spawn.meshAsset)&&e.push(t.spawn.meshAsset);return e}collectMissingMaterialRefs(){let e=new Set;for(let t of this.emitterViews)t.missingMaterialRef&&e.add(t.missingMaterialRef),t.trailResolution?.missingMaterialRef&&e.add(t.trailResolution.missingMaterialRef);return[...e]}},Fv=class{constructor(e){q(this,`options`,e),q(this,`backendId`,`three3d`),q(this,`capabilities`,t_),q(this,`root`,new $n),q(this,`stats`,{...dy(),effectCount:0}),q(this,`instances`,new Set),q(this,`camera`),q(this,`previewBloomEnabled`),q(this,`previewBloomThreshold`),q(this,`previewExposureStops`),q(this,`destroyed`,!1),this.camera=e.camera,this.previewBloomThreshold=Math.max(0,e.previewBloomThreshold??1),this.previewBloomEnabled=e.previewBloomEnabled===!0,this.previewExposureStops=_y(e.previewExposureStops??0,-2,2);let t=e.parent??e.scene;t&&this.mount(t)}mount(e){this.root.parent!==e&&e.add(this.root)}unmount(){this.root.removeFromParent()}createEffect(e,t={}){if(this.destroyed)throw Error(`ThreeVfxRenderer is destroyed.`);let n=new Pv({effect:e,camera:this.camera,textureProvider:this.options.textureProvider,meshProvider:this.options.meshProvider,materialProvider:this.options.materialProvider,materialGraphProvider:this.options.materialGraphProvider,position:t.position,rotation:t.rotation,scale:t.scale,seed:t.seed,timeSeconds:t.timeSeconds,autoStart:t.autoStart,runtimeParameters:t.runtimeParameters,previewBloomEnabled:this.previewBloomEnabled,previewBloomThreshold:this.previewBloomThreshold,previewExposureStops:this.previewExposureStops,captureDebugTransforms:this.options.captureDebugTransforms});return this.instances.add(n),this.root.add(n.root),this.refreshStats(),n}removeEffect(e,t=!0){this.instances.delete(e)&&(this.root.remove(e.root),t&&e.destroy(),this.refreshStats())}update(e){for(let t of this.instances)t.update(e);this.refreshStats()}getSupport(e){return i_(e)}setCamera(e){this.camera=e;for(let t of this.instances)t.setCamera(e)}setPreviewBloomOptions(e){typeof e.enabled==`boolean`&&(this.previewBloomEnabled=e.enabled),this.previewBloomThreshold=Math.max(0,e.threshold??this.previewBloomThreshold),this.previewExposureStops=_y(e.exposureStops??this.previewExposureStops,-2,2);for(let e of this.instances)e.setPreviewBloomOptions({enabled:this.previewBloomEnabled,threshold:this.previewBloomThreshold,exposureStops:this.previewExposureStops});this.refreshStats()}destroy(){if(!this.destroyed){this.destroyed=!0;for(let e of[...this.instances])this.removeEffect(e,!0);this.unmount()}}refreshStats(){let e=dy();for(let t of this.instances)e.activeParticles+=t.stats.activeParticles,e.visibleParticles+=t.stats.visibleParticles,e.capacity+=t.stats.capacity,e.emittedLastFrame+=t.stats.emittedLastFrame,e.bloomSourceParticles+=t.stats.bloomSourceParticles,e.drawCalls+=t.stats.drawCalls,e.instancedDrawCalls+=t.stats.instancedDrawCalls,e.legacyParticleDrawCalls+=t.stats.legacyParticleDrawCalls,e.missingMeshRefs.push(...t.stats.missingMeshRefs),e.missingMaterialRefs.push(...t.stats.missingMaterialRefs),e.unsupportedFeatures.push(...t.stats.unsupportedFeatures);Object.assign(this.stats,e,{effectCount:this.instances.size})}};function Iv(e){return yy(e)?mf({app:`vfx-editor`,kind:`particle-effect`,version:1,targetProfile:e.targetProfile,id:e.id,name:e.name,timeline:e.timeline,emitters:e.emitters}):mf(e)}function Lv(e,t,n){let r=e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`,i=r?e.mesh.asset:null,a=(r?n.renderGeometryOverride?.geometry??(i?t.meshProvider?.getMeshGeometry(i):null):null)??jv,o=r&&(e.mesh.flipWinding||e.mesh.recomputeNormals)?a.clone():null,s=o??a;o&&e.mesh.flipWinding&&lv(o),o&&e.mesh.recomputeNormals&&o.computeVertexNormals();let c=Xv(s),l=Zv(s),u=t.materialProvider?.getParticleMaterial?.(n.effect,e.id)??null,d=u&&F_(u)?u:null,f=N_(e,t);d&&f.material.dispose();let p=d?null:f.material instanceof oa?qv(f.material,`uTexture`):f.material.map,m=Q_(p,d||f.material instanceof oa?null:f.material.alphaMap,e,d?null:f.fixed),h=!d&&Dv(e,p)?new Ov(s,p,e.maxParticles,e):null,g=new ti,_=M_(e,t),v=_?.material??new fi({transparent:!0,vertexColors:!0,depthTest:e.render.depthTest,depthWrite:Ff(e.render),blending:e.render.blend===`additive`?2:1,premultipliedAlpha:e.render.blend===`premultiplied`,side:2}),y=_&&!(v instanceof oa)?Q_(v.map,v.alphaMap,{...e,modules:{...e.modules,textureSheetAnimation:!1}},_.fixed):null,b=new wi(g,v);return b.frustumCulled=!1,b.visible=!1,{key:iy(e,d?`host`:f.key),staticKey:ry(e,t,n),meshes:[],instanced:h,particleOrder:new Uint32Array(Math.max(1,e.maxParticles)),geometry:s,ownedGeometry:o,pivotBoundsSize:c,debugBounds:l,trailMesh:b,trailGeometry:g,trailMaterial:v,trailResolution:_,trailTextureFrames:y,trailHistories:new Map,trailEmitterPosition:[0,0,0],material:d??f.material,ownedTextures:[...f.ownedTextures,...m.ownedTextures,..._?.ownedTextures??[],...y?.ownedTextures??[]],textureFrames:m,materialFixed:d?null:f.fixed,materialParticleColorUsage:d?{rgb:!0,alpha:!0}:f.particleColorUsage,materialOpacityIsConstantOne:!d&&f.opacityIsConstantOne,materialBlend:d?null:f.materialBlend,missingMaterialRef:d?null:f.missingMaterialRef,unsupportedFeatures:[...f.unsupportedFeatures,..._?.unsupportedFeatures??[]],hostMaterial:d!==null}}function Rv(e,t){return e.alphaMap!==null||e.map!==null&&t.render.opacitySource===`textureAlpha`}function zv(e,t,n,r,i,a,o,s,c){tv(e,n,i,a,c),(e.uniforms.uParticleColor?.value)?.set(r.shaderColor[0],r.shaderColor[1],r.shaderColor[2],r.alpha);let l=gm(t.render.blend,o);e.depthTest=t.render.depthTest,hm(l)?(e.transparent=!1,e.depthWrite=!0,e.blending=j_(l)):(e.transparent=!s||r.alpha<1||l===`additive`||l===`premultiplied`,e.depthWrite=Ff({...t.render,blend:l===`additive`?`additive`:l===`premultiplied`?`premultiplied`:`alpha`},s?r.alpha:0),e.blending=j_(l),e.premultipliedAlpha=l===`premultiplied`),e.needsUpdate=!0;let u=e.uniforms.uDynamicParams?.value,d=Bv(t,r);u?.set(d[0],d[1],d[2],d[3]),e.uniforms.uTime&&(e.uniforms.uTime.value=c),e.uniformsNeedUpdate=!0}function Bv(e,t){if(!e.modules.customData)return[0,0,0,0];let n=e.advanced.customData.channels;return[Y(n[0],t.normalizedAge,t.seed,t.loopAge),Y(n[1],t.normalizedAge,t.seed,t.loopAge),Y(n[2],t.normalizedAge,t.seed,t.loopAge),Y(n[3],t.normalizedAge,t.seed,t.loopAge)]}function Vv(e,t,n,r){if(!t.modules.trails)return;let i=t.advanced.trails;if(n.seed>=i.ratio)return;let a=Math.max(.001,Y(i.lifetime,n.normalizedAge,n.seed,n.loopAge)),o=Math.max(0,Y(i.length,n.normalizedAge,n.seed,n.loopAge)),s=Math.max(.001,Y(i.width,n.normalizedAge,n.seed,n.loopAge)),c=`${n.start.toFixed(6)}:${n.seed.toFixed(6)}`,l=e.trailHistories.get(c);l||(l={points:[],lastSeenFrame:r},e.trailHistories.set(c,l));let u=new H(n.position[0],n.position[1],n.position[2]),d=e.trailResolution?n.trailColor:[n.color.r,n.color.g,n.color.b,n.alpha],f=l.points,p=f[f.length-1];!p||p.position.distanceTo(u)>=i.minVertexDistance?f.push({dynamicParams:e.trailResolution?Bv(t,n):null,position:u,timeSeconds:r,lifetimeSeconds:a,distanceFromHead:0,color:[d[0],d[1],d[2]],alpha:d[3],width:s,maxLength:o>0?o:void 0,seed:n.seed}):(p.dynamicParams=e.trailResolution?Bv(t,n):null,p.position.copy(u),p.timeSeconds=r,p.lifetimeSeconds=a,p.color=[d[0],d[1],d[2]],p.alpha=d[3],p.width=s,p.maxLength=o>0?o:void 0,p.seed=n.seed),l.lastSeenFrame=r,Kv(f,o>0?o:void 0,r)}function Hv(e,t,n){let r=e.trailEmitterPosition;if(t.modules.trails&&!t.advanced.trails.worldSpace&&e.trailHistories.size>0){let t=n[0]-r[0],i=n[1]-r[1],a=n[2]-r[2];if(t!==0||i!==0||a!==0)for(let n of e.trailHistories.values())for(let e of n.points)e.position.x+=t,e.position.y+=i,e.position.z+=a}r[0]=n[0],r[1]=n[1],r[2]=n[2]}function Uv(e,t,n,r){if(!t.modules.trails){Wv(e);return}let i=[],a=[],o=[],s=[],c=[],l=[],u=t.advanced.trails,d=[1,1,1,1],f=e.trailResolution,p=e.trailMaterial instanceof oa;e.trailMaterial instanceof oa&&e.trailMaterial.uniforms.uTime&&(e.trailMaterial.uniforms.uTime.value=r),e.trailTextureFrames&&!(e.trailMaterial instanceof oa)&&ev(e.trailMaterial,e.trailTextureFrames,0,f?.fixed??null,r);let m=new W;for(let[t,h]of e.trailHistories){if(Kv(h.points,void 0,r),h.points.length<2){h.points.length===0&&e.trailHistories.delete(t);continue}let g=h.points,_=Math.max(g[0]?.distanceFromHead??1,1),v=i.length/3;for(let e=0;e<g.length;e++){let t=g[e],l=g[Math.min(e+1,g.length-1)]??t,h=g[Math.max(e-1,0)]??t,v=t.maxLength;if(v!==void 0&&t.distanceFromHead>v)continue;let y=_y(t.distanceFromHead/(v??_),0,1),b=1-_y((r-t.timeSeconds)/t.lifetimeSeconds,0,1),x=t.color[0],S=t.color[1],C=t.color[2],w=t.alpha;if(!u.inheritColor){let e=Mm(u,1-b,y,d);m.setRGB(e[0],e[1],e[2],f?void 0:Dt),x=m.r,S=m.g,C=m.b,w=e[3]}else if(u.color){let e=ap(u.color,y);m.setRGB(e[0],e[1],e[2],f?void 0:Dt),x=m.r,S=m.g,C=m.b,w=up(u.color,y)}if(f&&(f.particleColorUsage.rgb||(x=1,S=1,C=1),f.particleColorUsage.alpha||(w=1)),f&&!p){let e=f.particleColorUsage,t=f.fixed,n=t?.tint??[1,1,1,1],r=1+Math.max(0,t?.emissive??0);m.setRGB((e.rgb?x:1)*n[0]*r,(e.rgb?S:1)*n[1]*r,(e.rgb?C:1)*n[2]*r,Dt),x=m.r,S=m.g,C=m.b,w=(e.alpha?w:1)*n[3]*(t?.opacity??1)}w*=(1-y)*b;let T=t.width*Math.max(0,Y(u.widthOverTrail,y,t.seed));if(w<=.01||T<=1e-4)continue;let E=new H().subVectors(l.position,h.position);E.lengthSq()<=1e-7&&E.set(0,1,0),E.normalize();let D=new H().subVectors(n.position,t.position);D.lengthSq()<=1e-7&&D.set(0,0,1),D.normalize();let O=new H().crossVectors(E,D);if(O.lengthSq()<=1e-7&&O.copy(Nv),O.normalize().multiplyScalar(T*.5),i.push(t.position.x-O.x,t.position.y-O.y,t.position.z-O.z,t.position.x+O.x,t.position.y+O.y,t.position.z+O.z),a.push(x,S,C,w,x,S,C,w),f){let e=u.textureMode===`tile`?t.distanceFromHead:t.distanceFromHead/Math.max(g[0].distanceFromHead,1e-6);o.push(e,0,e,1),t.dynamicParams&&c.push(...t.dynamicParams,...t.dynamicParams),s.push(D.x,D.y,D.z,D.x,D.y,D.z)}}let y=i.length/3-v;for(let e=0;e<y/2-1;e++){let t=v+e*2;l.push(t,t+1,t+2,t+1,t+3,t+2)}}i.length===0||l.length===0?Gv(e):(e.trailGeometry.setAttribute(`position`,new Ur(i,3)),e.trailGeometry.setAttribute(`color`,new Ur(a,4)),f&&(e.trailGeometry.setAttribute(`trailDynamicParams`,new Ur(c,4)),e.trailGeometry.setAttribute(`uv`,new Ur(o,2)),e.trailGeometry.setAttribute(`normal`,new Ur(s,3))),e.trailGeometry.setIndex(l),e.trailGeometry.computeBoundingSphere(),e.trailMesh.visible=!0)}function Wv(e){e.trailHistories.clear(),Gv(e)}function Gv(e){e.trailMesh.visible=!1,e.trailGeometry.setIndex([]),e.trailGeometry.deleteAttribute(`position`),e.trailGeometry.deleteAttribute(`color`),e.trailGeometry.deleteAttribute(`trailDynamicParams`),e.trailGeometry.deleteAttribute(`uv`),e.trailGeometry.deleteAttribute(`normal`)}function Kv(e,t,n){let r=0;for(let t=e.length-1;t>=0;t--){let n=e[t],i=e[t+1];i&&(r+=n.position.distanceTo(i.position)),n.distanceFromHead=r}for(;e.length>0&&(t!==void 0&&e[0].distanceFromHead>t&&e.length>1||n-e[0].timeSeconds>e[0].lifetimeSeconds);)e.shift()}function qv(e,t){let n=e.uniforms[t]?.value;return n&&n instanceof yn?n:null}function Jv(e,t){t.length=e.length;let n=e.map((e,t)=>({index:t,orderInLayer:e.render.orderInLayer}));n.sort((e,t)=>e.orderInLayer-t.orderInLayer||e.index-t.index);let r=-1,i=null;for(let e of n)(i===null||e.orderInLayer!==i)&&(r+=1,i=e.orderInLayer),t[e.index]=r}function Yv(e,t,n,r){let i=e;switch(t){case`distanceNearFirst`:return i+Math.min(.999999,Math.max(0,n)/(1+Math.max(0,n)));case`oldestFirst`:return i+.5-.499999*Math.tanh(r);case`youngestFirst`:return i+.5+.499999*Math.tanh(r);default:return i}}function Xv(e){e.boundingBox||e.computeBoundingBox();let t=e.boundingBox;return t?[Math.max(0,t.max.x-t.min.x),Math.max(0,t.max.y-t.min.y),Math.max(0,t.max.z-t.min.z)]:[1,1,0]}function Zv(e){e.boundingBox||e.computeBoundingBox();let t=e.boundingBox;return t?{min:[t.min.x,t.min.y,t.min.z],max:[t.max.x,t.max.y,t.max.z]}:{min:[-.5,-.5,0],max:[.5,.5,0]}}var Qv=new WeakMap;function $v(e){if(!e)return``;let t=Qv.get(e);return t===void 0&&(t=JSON.stringify(e),Qv.set(e,t)),t}var ey=new WeakMap,ty=1;function ny(e){if(!e)return 0;let t=ey.get(e);return t===void 0&&(t=ty++,ey.set(e,t)),t}function ry(e,t,n){let r=e.render.material?t.materialGraphProvider?.(e.render.material.shaderId):void 0,i=t.materialProvider?.getParticleMaterial?.(n.effect,e.id);return[e.mode,e.maxParticles,e.mesh.renderMode,e.mesh.asset?.path??``,n.renderGeometryOverride?`hostgeo:${n.renderGeometryOverride.generation}`:``,i?`hostmat:${i.uuid}`:``,Number(e.mesh.flipWinding),Number(e.mesh.recomputeNormals),I_(e)??L_(e)??``,e.render.material?.shaderId??``,$v(e.advanced.trails.material),e.advanced.trails.material?JSON.stringify([e.advanced.trails.texture,e.advanced.trails.textureMode,e.advanced.trails.depthTest,e.advanced.trails.depthWrite,ny(t.materialGraphProvider?.(e.advanced.trails.material.shaderId))]):``,r?.side??`double`,r?.blend??`normal`,e.render.shading,e.render.blend,Number(e.render.depthTest),Number(Ff(e.render))].join(`|`)}function iy(e,t){return[e.mode,e.maxParticles,e.mesh.renderMode,e.mesh.asset?.path??``,Number(e.mesh.flipWinding),Number(e.mesh.recomputeNormals),t,e.render.shading,e.render.blend,Number(e.render.depthTest),Number(Ff(e.render))].join(`|`)}function ay(e,t,n){let r=Math.min(e.activeCount,n.length);for(let e=0;e<r;e++)n[e]=e;if(t!==`oldestFirst`&&t!==`youngestFirst`)return;let i=t===`oldestFirst`?(e,t)=>e>t:(e,t)=>e<t,a=e.instanceData;for(let e=1;e<r;e++){let t=n[e]??e,r=a[t*18+3]??0,o=e;for(;o>0;){let e=n[o-1]??o-1;if(!i(a[e*18+3]??0,r))break;n[o]=e,--o}n[o]=t}}function oy(e,t,n,r,i,a,o,s){let c=n*18,l=Math.max(0,t.instanceData[c+11]??1),u=Math.max(0,t.instanceData[c+12]??l),d=e.mode===`mesh`?Math.max(0,t.instanceData[c+17]??l):l,f=e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue,p=e.mode===`billboard`?e.billboard.separateAxes?e.billboard.sizeValueY:f:e.mesh.separateAxes?e.mesh.sizeValueY:f,m=e.mode===`mesh`&&e.mesh.separateAxes?e.mesh.sizeValueZ:f,h=e.modules.size?Math.max(0,Y(f,r,a,o)):1,g=e.modules.size?Math.max(0,Y(p,r,a,o)):1,_=e.modules.size?Math.max(0,Y(m,r,a,o)):1,v=Oh(e,i,a,o);return s.x=Math.max(1e-4,l*h*v),s.y=Math.max(1e-4,u*g*v),s.z=Math.max(1e-4,d*_*v),s}function sy(e,t,n){return ap(e,t,n),n[3]=up(e,t),n}function cy(e,t,n){return e.modules.color?(ap(e.color.gradient,t,n),n[3]=up(e.color.gradient,t),n):(n[0]=1,n[1]=1,n[2]=1,n[3]=1,n)}function ly(e,t){for(let n=t;n<e.meshes.length;n++){let t=e.meshes[n];t&&(t.visible=!1)}}function uy(e){for(let t of e.meshes)if(t.removeFromParent(),Array.isArray(t.material))for(let e of t.material)e.dispose();else t.material.dispose();e.meshes.length=0,e.instanced?.dispose(),e.trailMesh.removeFromParent(),e.trailGeometry.dispose(),e.trailMaterial.dispose(),e.trailHistories.clear(),e.hostMaterial||e.material.dispose(),e.ownedGeometry?.dispose();for(let t of e.ownedTextures)t.dispose();e.ownedTextures.length=0}function dy(){return{activeParticles:0,visibleParticles:0,capacity:0,emittedLastFrame:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0,missingMeshRefs:[],missingMaterialRefs:[],unsupportedFeatures:[]}}function fy(){return{visibleParticles:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0}}function py(e,t){return e.lengthSq()>1e-6?e.normalize():e.copy(t)}function my(e,t){return Math.abs(e.y)<.9?t.set(0,1,0):t.set(1,0,0),t.cross(e).normalize()}function hy(e){return[e[0],e[1],e[2]]}function gy(e){return Number.isFinite(e)?Math.min(8,Math.max(0,e)):1}function _y(e,t,n){return Math.min(n,Math.max(t,e))}function vy(e){return Number.isFinite(e)?Math.floor(e):kv}function yy(e){return!!(e&&typeof e==`object`&&e.kind===`vfx-effect`)}var by=new WeakMap;function xy(e,n,r,i){let a=i??(typeof document<`u`?document:void 0);if(!a)return null;let o=e.source,s=o?.resource,c=e.frame,l=c?.x??0,u=c?.y??0,d=c?.width??o?.pixelWidth??0,f=c?.height??o?.pixelHeight??0;if(!s||d<=0||f<=0)return null;let p=a.createElement(`canvas`);p.width=d,p.height=f;let m=p.getContext(`2d`,{willReadFrequently:!0});if(!m)return null;try{m.drawImage(s,l,u,d,f,0,0,d,f);let e=m.getImageData(0,0,d,f);Am(e.data,n,r),m.putImageData(e,0,0)}catch{return null}return t.from(p)}function Sy(e){let n=e.source,r=n?.resource;if(!r||n.alphaMode===`premultiplied-alpha`)return e;let i=by.get(n);if(!i){let t={resource:r,alphaMode:`premultiplied-alpha`};if(ee.test(r))i=new ee(t);else if(c.test(r))i=new c(t);else return e;by.set(n,i);let a=i;typeof n.once==`function`&&n.once(`destroy`,()=>{a.destroy(),by.delete(n)})}return new t({source:i,frame:e.frame})}function Cy(e,n,r,i){let a=i?.documentRef??(typeof document<`u`?document:void 0);if(!a)return null;let o=e.source,s=o?.resource,c=e.frame,l=c?.x??0,u=c?.y??0,d=c?.width??o?.pixelWidth??0,f=c?.height??o?.pixelHeight??0;if(!s||d<=0||f<=0)return null;let p=a.createElement(`canvas`);p.width=d,p.height=f;let m=p.getContext(`2d`,{willReadFrequently:!0});if(!m)return null;try{m.drawImage(s,l,u,d,f,0,0,d,f);let e=m.getImageData(0,0,d,f);cg(e.data,d,f,n,r,{samplerForPath:i?.samplerForPath}),m.putImageData(e,0,0)}catch{return null}return t.from(p)}var wy=class extends au{constructor(e){super(e),q(this,`numericTint`,16777215),q(this,`numericAlpha`,1),this.tint=au.defaultOptions.tint??16777215,this.alpha=au.defaultOptions.alpha??1}get tint(){return this.numericTint}set tint(e){typeof e==`number`?this.numericTint=e:(super.tint=e,this.numericTint=super.tint),this.updateNumericColor()}get alpha(){return this.numericAlpha}set alpha(e){this.numericAlpha=Math.min(Math.max(e,0),1),this.updateNumericColor()}updateNumericColor(){let e=this.numericTint,t=(e&255)<<16|e&65280|e>>>16&255;this.color=t+((this.numericAlpha*255|0)<<24)}};function Ty(e){if(!e.enabled)return 0;let t=Math.max(0,Ey(e.initializeParticle.lifetime)),n=e.loop?t:Math.min(t,e.duration),r=0;for(let t of e.spawn.bursts)r+=t.count*t.cycles;return e.loop&&(r*=Math.max(1,Math.ceil(t/Math.max(.001,e.duration)))),Math.min(e.maxParticles,Math.ceil(Math.max(0,Ey(e.spawn.rateValue))*n)+r)}function Ey(e){if(e.mode===`constant`)return e.value;if(e.mode===`random`)return Math.max(e.min,e.max);let t=0;for(let n of e.curve)t=Math.max(t,n.y);if(e.mode===`randomCurve`)for(let n of e.curveB)t=Math.max(t,n.y);return t*(e.multiplier??1)}function Dy(e={}){let t=Oy(e.originX,0),n=Oy(e.originY,0),r=Math.max(1e-6,Oy(e.pixelsPerUnit,1)),i=e.yAxis===`down`?1:-1;return{project(e,a){let o=a??{x:0,y:0,visible:!0};return o.x=t+e[0]*r,o.y=n+e[1]*r*i,o.visible=!0,o},pixelsPerWorldUnit(){return r},depth(e){return e[2]}}}function Oy(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}var ky=96;function Ay(e={}){let t=Math.max(4,Math.round(e.size??ky)),n=e.document??document;return{circle:jy(n,t,My),square:jy(n,t,Ny),triangleShard:jy(n,t,Py),quadShard:jy(n,t,Fy),grassShard:jy(n,t,Iy)}}function jy(e,n,r){let i=e.createElement(`canvas`);i.width=n,i.height=n;let a=i.getContext(`2d`);if(!a)throw Error(`Unable to create particle texture context`);return r(a,n),t.from(i)}function My(e,t){let n=t*.5,r=t*.44,i=e.createRadialGradient(n,n,r*.12,n,n,r);i.addColorStop(0,`rgba(255,255,255,1)`),i.addColorStop(.72,`rgba(255,255,255,0.82)`),i.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=i,e.beginPath(),e.arc(n,n,r,0,Math.PI*2),e.fill()}function Ny(e,t){e.fillStyle=`white`,e.fillRect(t*.08,t*.08,t*.84,t*.84)}function Py(e,t){e.fillStyle=`white`,e.beginPath(),e.moveTo(t*.5,t*.08),e.lineTo(t*.92,t*.86),e.lineTo(t*.08,t*.86),e.closePath(),e.fill()}function Fy(e,t){e.fillStyle=`white`,e.beginPath(),e.moveTo(t*.28,t*.1),e.lineTo(t*.78,t*.18),e.lineTo(t*.72,t*.9),e.lineTo(t*.22,t*.82),e.closePath(),e.fill()}function Iy(e,t){e.fillStyle=`white`,e.beginPath(),e.moveTo(t*.5,t*.04),e.lineTo(t*.66,t*.48),e.lineTo(t*.58,t*.96),e.lineTo(t*.34,t*.52),e.closePath(),e.fill()}var Ly=`
attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;
attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 materialRoundPixels(vec2 position, vec2 targetSize) {
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void) {
  float c = cos(aRotation);
  float s = sin(aRotation);
  vec2 local = vec2(
    aVertex.x * c - aVertex.y * s,
    aVertex.x * s + aVertex.y * c
  ) + aPosition;
  gl_Position = vec4((uTranslationMatrix * vec3(local, 1.0)).xy, 0.0, 1.0);
  if (uRound == 1.0) {
    gl_Position.xy = materialRoundPixels(gl_Position.xy, uResolution);
  }
  vUV = aUV;
  vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`;function Ry({graph:n,instance:r,artifact:i,texture:a,textureSheetTiles:o,samplerTextures:s}){if(!Vg(i))return null;let c=Hg({artifact:i,graph:n,instance:r});if(!c)return null;let l=c.fragment,u=i.fixed??Vy(n.blend),d=[Math.max(1,Math.round(o?.[0]??1)),Math.max(1,Math.round(o?.[1]??1))],f=(a??t.WHITE).source,p={};for(let e of c.samplers)p[e.uniform]=(s?.get(e.path)??t.WHITE).source;return y.from({gl:{vertex:Ly,fragment:l,name:`vfx-tier2-${i.shaderId}`},resources:{uTexture:f,uSampler:f.style,...p,uniforms:{uTranslationMatrix:{value:new e,type:`mat3x3<f32>`},uColor:{value:new Float32Array([1,1,1,1]),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}},materialUniforms:{uTime:{value:0,type:`f32`},uFixedTint:{value:new Float32Array(u.tint),type:`vec4<f32>`},uFixedEmissive:{value:Math.max(0,u.emissive),type:`f32`},uFixedOpacity:{value:u.opacity,type:`f32`},uClipValue:{value:n.opacityMaskClipValue??.333,type:`f32`},uSheetTiles:{value:new Float32Array(d),type:`vec2<f32>`},uSubUv:{value:new Float32Array([0,0,1,1]),type:`vec4<f32>`},uSubUvFromAttr:{value:1,type:`f32`},uDynamicParams:{value:new Float32Array([0,0,0,0]),type:`vec4<f32>`}}}})}function zy(e,t){let n=e?.resources?.materialUniforms?.uniforms;n&&(n.uTime=Number.isFinite(t)?Math.max(0,t):0)}function By(e,t){let n=e?.resources?.materialUniforms?.uniforms?.uDynamicParams;n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3])}function Vy(e){return{tint:[1,1,1,1],emissive:0,opacity:1,blend:e}}function Hy(e){return{kind:`missing-material-graph`,shaderId:e,reason:`Material shader "${e}" could not be resolved to a ShaderGraph.`}}function Uy(e,t){let n=t.diagnostics.filter(Boolean);return{kind:`unsupported-tier2-particle-shader`,shaderId:e,artifactShaderId:t.shaderId,diagnostics:n,reason:n[0]??`Material shader "${e}" compiled to a Tier-2 variant the Pixi ParticleContainer runtime cannot render.`}}function Wy(e){return e?e.kind===`missing-material-graph`?`materialBlocked:missing:${e.shaderId}`:`materialBlocked:unsupported-tier2:${e.shaderId}:${e.artifactShaderId}:${e.diagnostics.join(`;`)}`:``}function Gy(e){return e?.kind===`missing-material-graph`?e.shaderId:void 0}function Ky(e,t,n){if(e&&e.kind!==`missing-material-graph`)return{emitterId:t.id,emitterIndex:n,featureKey:`render.material.tier2ParticleShader`,path:`emitters.${n}.render.material`,reason:e.reason}}var qy=[0,0,0],Jy={x:0,y:0,visible:!0},Yy={x:0,y:0,visible:!0};function Xy(e,t,n,r=0){let i=Math.hypot(t[0],t[1],t[2]);if(i<=1e-6)return r;let a=1/i,o=qy;o[0]=e[0]+t[0]*a,o[1]=e[1]+t[1]*a,o[2]=e[2]+t[2]*a;let s=n.project(e,Jy),c=n.project(o,Yy);if(!s||!c||s.visible===!1)return r;let l=c.x-s.x,u=c.y-s.y;return Math.hypot(l,u)<=1e-6?r:Math.atan2(u,l)}var Zy=.25,Qy=1,$y=4,eb=26,tb=.5,nb=.03125,rb=4,ib=5,ab={enabled:!1,quality:`low`,renderScale:Zy,threshold:Qy,intensity:$y,radius:eb,softKnee:tb,exposure:0},ob={enabled:!1,threshold:Qy,intensity:0,radius:0,softKnee:tb,exposure:0};function sb(e){let t=e?.quality===`high`||e?.quality===`off`?e.quality:`low`,n=!!e?.enabled&&t!==`off`,r=t===`high`?.5:ab.renderScale,i=t===`high`?12:ab.radius;return{enabled:n,quality:t===`high`?`high`:`low`,renderScale:mb(pb(e?.renderScale,r),.125,1),threshold:Math.max(0,pb(e?.threshold,ab.threshold)),intensity:mb(pb(e?.intensity,ab.intensity),0,4),radius:mb(pb(e?.radius,i),0,64),softKnee:mb(pb(e?.softKnee,ab.softKnee),0,1),exposure:mb(pb(e?.exposure,ab.exposure),-2,2)}}function cb(e){return e.enabled&&e.intensity>0?{enabled:!0,threshold:e.threshold,intensity:e.intensity,radius:e.radius,softKnee:e.softKnee,exposure:e.exposure}:ob}var lb=class{constructor(e){q(this,`renderer`,e),q(this,`outputSprite`,new O),q(this,`sourceTexture`),q(this,`outputTexture`),q(this,`compositeRoot`,new O),q(this,`outputLayers`,[]),q(this,`levels`,[]),q(this,`width`,0),q(this,`height`,0),q(this,`renderScale`,0),q(this,`quality`,ab.quality),q(this,`levelCount`,0),q(this,`passCount`,0),this.outputSprite.visible=!1}render(e,t,n){if(!n.enabled||n.intensity<=0||t<=0)return this.outputSprite.visible=!1,0;let r=this.renderer.screen,i=Math.max(1,Math.ceil(r.width)),a=Math.max(1,Math.ceil(r.height));if(i<=1||a<=1||(this.ensureTextures(i,a,n),!this.sourceTexture||!this.outputTexture))return this.outputSprite.visible=!1,0;this.renderer.render({container:e,target:this.sourceTexture,clear:!0,clearColor:0});let o=this.sourceTexture;for(let e=0;e<this.levels.length;e++){let t=this.levels[e];t.sourceSprite.texture=o,t.sourceSprite.width=i,t.sourceSprite.height=a,t.compositeSprite.alpha=fb(e,n.radius),this.applyLevelFilterConfig(t,n,e),this.renderer.render({container:t.blurRoot,target:t.outputTexture,clear:!0,clearColor:0}),o=t.outputTexture}return this.renderer.render({container:this.compositeRoot,target:this.outputTexture,clear:!0,clearColor:0}),this.configureOutputLayers(this.outputTexture,n.intensity,i,a),this.outputSprite.visible=!0,this.passCount}destroy(){this.destroyLevels(),this.compositeRoot.destroy({children:!1}),this.outputSprite.destroy({children:!0}),this.sourceTexture?.destroy(!0),this.outputTexture?.destroy(!0),this.sourceTexture=void 0,this.outputTexture=void 0}configureOutputLayers(e,n,r,i){let a=Math.max(0,n),o=Math.max(1,Math.ceil(a));for(;this.outputLayers.length<o;){let e=new k(t.EMPTY);e.blendMode=`add`,this.outputLayers.push(e),this.outputSprite.addChild(e)}for(let t=0;t<this.outputLayers.length;t++){let n=this.outputLayers[t],o=Math.min(1,a);n.texture=e,n.alpha=o,n.width=r,n.height=i,n.visible=o>0,a-=o}}ensureTextures(e,t,n){let r=n.renderScale,i=db(n);if(this.sourceTexture&&this.outputTexture&&this.width===e&&this.height===t&&this.renderScale===r&&this.quality===n.quality&&this.levelCount===i)this.applyFilterConfig(n);else{this.sourceTexture?.destroy(!0),this.outputTexture?.destroy(!0),this.destroyLevels(),this.width=e,this.height=t,this.renderScale=r,this.quality=n.quality,this.levelCount=i,this.sourceTexture=ie.create({width:e,height:t,resolution:r}),this.outputTexture=ie.create({width:e,height:t,resolution:1});for(let n=0;n<i;n++){let i=ub(e,t,r,n);this.levels.push(i),this.compositeRoot.addChild(i.compositeSprite)}this.applyFilterConfig(n)}}applyFilterConfig(e){let t=0;for(let n=0;n<this.levels.length;n++)t+=this.applyLevelFilterConfig(this.levels[n],e,n);this.passCount=2+this.levels.length+t}applyLevelFilterConfig(e,t,n){let r=this.ensureLevelBlurFilter(e);if(!r)return e.sourceSprite.filters=null,0;let i=.55+n*.35;return r.strength=Math.max(.5,t.radius*i),r.quality=t.quality===`high`?4:2,r.resolution=e.scale,e.filterList??=[r],e.sourceSprite.filters=e.filterList,r.quality*2}ensureLevelBlurFilter(e){if(e.blurFilter)return e.blurFilter;if(!e.blurFilterUnsupported)try{return e.blurFilter=new Vl({strength:ab.radius,quality:2,kernelSize:5}),e.blurFilter}catch{e.blurFilterUnsupported=!0;return}}destroyLevels(){for(let e of this.levels)e.sourceSprite.filters=null,e.blurFilter?.destroy(),e.blurRoot.destroy({children:!1}),e.compositeSprite.destroy(),e.outputTexture.destroy(!0);this.levels.length=0,this.compositeRoot.removeChildren()}};function ub(e,n,r,i){let a=Math.max(nb,r/2**i),o=ie.create({width:e,height:n,resolution:a}),c=new k(t.EMPTY),l=new O,u=new s(0,0,e,n);c.x=0,c.y=0,c.width=e,c.height=n,l.filterArea=u,l.addChild(c);let d=new k(o);return d.blendMode=`add`,d.width=e,d.height=n,{sourceSprite:c,blurRoot:l,compositeSprite:d,outputTexture:o,filterArea:u,scale:a,blurFilterUnsupported:!1}}function db(e){if(e.radius<=0)return 1;let t=e.quality===`high`?ib:rb,n=Math.ceil(2+e.radius/8);return Math.max(2,Math.min(t,n))}function fb(e,t){let n=mb(t/16,.18,.95);return e===0?.45:n**(e*.42)}function pb(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function mb(e,t,n){return Math.max(t,Math.min(n,e))}var hb={rgb:!0,alpha:!0},gb=new s(-1e6,-1e6,2e6,2e6),_b=2135587861,vb=512,yb=65472,bb=Math.log2(1+yb),xb=1.6,Sb=512,Cb=.28,wb=[0,0,0],Tb=[0,0,0],Eb=[0,0,0],Db=class e{constructor(e){q(this,`root`,new O),q(this,`bloomRoot`,new O),q(this,`stats`,Wx()),q(this,`runner`),q(this,`emitterViews`,[]),q(this,`childInstances`,new Set),q(this,`derivedTextures`,new Map),q(this,`premultipliedTextures`,new Map),q(this,`materialSamplerPaths`,new WeakMap),q(this,`materialArtifacts`,new Map),q(this,`spriteMasterGraph`,wm()),q(this,`effect`),q(this,`textureProvider`),q(this,`effectProvider`),q(this,`materialGraphProvider`),q(this,`fallbackTextures`),q(this,`projection`),q(this,`boundsArea`),q(this,`position`),q(this,`seed`),q(this,`currentTimeSeconds`),q(this,`subEmitterDepth`),q(this,`maxSubEmitterDepth`),q(this,`maxSubEmitterInstances`),q(this,`spawnedSubEmittersLastFrame`,0),q(this,`ownVisibleParticles`,0),q(this,`ownRenderGroupsLastFrame`,0),q(this,`ownDebugQuads`,[]),q(this,`debugQuadPool`,[]),q(this,`ownMissingTextureRefs`,[]),q(this,`ownMissingSubEmitterRefs`,[]),q(this,`ownMissingMaterialRefs`,[]),q(this,`ownUnsupportedModules`,[]),q(this,`ownUnsupportedFeatures`,[]),q(this,`ownMaterialUnsupportedFeatures`,[]),q(this,`destroyed`,!1),this.effect=kb(e.effect),this.textureProvider=e.textureProvider,this.effectProvider=e.effectProvider,this.materialGraphProvider=e.materialGraphProvider,this.subEmitterDepth=Math.max(0,Math.floor(e.subEmitterDepth??0)),this.maxSubEmitterDepth=Math.max(this.subEmitterDepth,Math.floor(e.maxSubEmitterDepth??4)),this.maxSubEmitterInstances=Math.max(0,Math.floor(e.maxSubEmitterInstances??vb)),this.runner=new kp(this.effect,{subEmitterDepth:this.subEmitterDepth,maxSubEmitterDepth:this.maxSubEmitterDepth,maxEventsPerFrame:e.maxEventsPerFrame,maxSubEmitterRequestsPerFrame:e.maxSubEmitterRequestsPerFrame}),this.fallbackTextures=e.fallbackTextures??Ay(),this.projection=e.projection??Dy(),this.boundsArea=e.boundsArea??gb.clone(),this.position=Kx(e.position??[0,0,0]),this.seed=Gx(e.seed),this.currentTimeSeconds=Math.max(0,e.timeSeconds??0),this.refreshUnsupportedModules(),this.ensureEmitterViews(),e.autoStart!==!1&&this.spawn({position:this.position,seed:this.seed,timeSeconds:this.currentTimeSeconds})}get definition(){return this.effect}get isActive(){return this.runner.isActive||this.childInstances.size>0}setTextureProvider(e){this.textureProvider=e,this.ensureEmitterViews();for(let t of this.childInstances)t.setTextureProvider(e)}setEffectProvider(e){this.effectProvider=e;for(let t of this.childInstances)t.setEffectProvider(e)}setMaterialGraphProvider(e){this.materialGraphProvider=e,this.materialArtifacts.clear(),this.ensureEmitterViews();for(let t of this.childInstances)t.setMaterialGraphProvider(e)}resolveEmitterMaterial(e,t){let n=e.render.material;if(!n)return null;let r=n.shaderId===`sprite-master`?this.spriteMasterGraph:this.materialGraphProvider?.(n.shaderId);if(!r)return{artifact:null,graph:null,block:Hy(n.shaderId)};let i=r,a=Ig(i,n,t),o=this.materialArtifacts.get(a);return o||(o=Lg(i,n,{mainTexUid:t}),this.materialArtifacts.set(a,o)),{artifact:o,graph:i}}resolveEmitterMaterialFixed(e){let t=this.resolveEmitterMaterial(e,null);return!t||t.artifact?.tier!==`tier1-fixed`?null:t.artifact.fixed??null}resolveEmitterParticleColorUsage(e){let t=e.render.material;if(!t||t.shaderId===`sprite-master`)return hb;let n=this.resolveEmitterMaterial(e,null);return n?.artifact?{rgb:n.artifact.usesParticleColorRGB,alpha:n.artifact.usesParticleColorAlpha}:hb}setFallbackTextures(e){this.fallbackTextures=e,this.ensureEmitterViews();for(let t of this.childInstances)t.setFallbackTextures(e)}setProjection(e){this.projection=e;for(let t of this.childInstances)t.setProjection(e)}setBoundsArea(e){this.boundsArea=e;for(let t of this.emitterViews)t.container.boundsArea=e,t.trailContainer.boundsArea=e,t.bloomContainer.boundsArea=e;for(let t of this.childInstances)t.setBoundsArea(e)}setPosition(e){this.position=Kx(e),this.runner.setPosition(this.position)}updateDefinition(e){return this.effect=kb(e),this.runner.updateDefinition(this.effect),this.refreshUnsupportedModules(),this.ensureEmitterViews(),this.effect}preloadTextures(){let e=Ab(this.effect,this.materialGraphProvider);return this.textureProvider?.preload?.(e)}spawn(e={}){this.destroyed||(e.effect!==void 0&&this.updateDefinition(e.effect),e.position&&(this.position=Kx(e.position)),typeof e.seed==`number`&&(this.seed=Gx(e.seed)),typeof e.timeSeconds==`number`&&(this.currentTimeSeconds=Math.max(0,e.timeSeconds)),this.runner.reset(this.effect,this.position,this.currentTimeSeconds,this.seed),this.clearSubEmitterInstances(),this.spawnedSubEmittersLastFrame=0,this.ownMissingSubEmitterRefs=[],this.syncRunnerStats(0),this.draw(this.currentTimeSeconds))}reset(e={}){this.spawn(e)}stop(){this.runner.stop(),this.clearSubEmitterInstances(),this.hideEmitterViews(),this.syncRunnerStats(0)}update(e,t={},n=ob){if(this.destroyed)return!1;let r=typeof t==`number`?{timeSeconds:t}:t;r.position&&this.setPosition(r.position);let i=Math.max(0,Zx(e,0));this.currentTimeSeconds=typeof r.timeSeconds==`number`&&Number.isFinite(r.timeSeconds)?Math.max(0,r.timeSeconds):this.currentTimeSeconds+i;let a=i>0?this.runner.update(i,this.currentTimeSeconds):this.runner.isActive;return this.spawnedSubEmittersLastFrame=0,this.ownMissingSubEmitterRefs=[],this.updateSubEmitterInstances(i,this.currentTimeSeconds),i>0&&this.spawnSubEmitterRequests(this.currentTimeSeconds),r.draw===!1?(kx(this.runner.states),this.syncRunnerStats(this.ownVisibleParticles)):this.draw(this.currentTimeSeconds,n),a||this.childInstances.size>0}draw(e=this.currentTimeSeconds,t=ob){this.currentTimeSeconds=Math.max(0,Zx(e,0)),this.ownVisibleParticles=this.drawParticleViews(this.currentTimeSeconds,t);for(let e of this.childInstances)e.draw(this.currentTimeSeconds,t);this.syncRunnerStats(this.ownVisibleParticles)}getRuntimeEvents(){let e=[...this.runner.events],t=[...this.runner.subEmitterRequests];for(let n of this.childInstances){let r=n.getRuntimeEvents();e.push(...r.events),t.push(...r.subEmitterRequests)}return{events:e,subEmitterRequests:t}}getParticleDebugQuads(e=[]){for(let t of this.ownDebugQuads)e.push({...t});for(let t of this.childInstances)t.getParticleDebugQuads(e);return e}destroy(){if(!this.destroyed){this.destroyed=!0,this.stop();for(let e of this.emitterViews)fx(this.root,this.bloomRoot,e);this.emitterViews.length=0;for(let e of this.derivedTextures.values())e.destroy(!0);this.derivedTextures.clear();for(let e of this.premultipliedTextures.values())e.destroy(!0);this.premultipliedTextures.clear(),this.bloomRoot.destroy({children:!0}),this.root.destroy({children:!0})}}spawnSubEmitterRequests(t){if(!(!this.effectProvider||this.maxSubEmitterInstances<=0))for(let n of this.runner.subEmitterRequests){if(this.childInstances.size>=this.maxSubEmitterInstances)break;let r=this.effectProvider.getEffect(n.effectFile);if(!r){this.ownMissingSubEmitterRefs.push(n.effectFile);continue}let i=new e({effect:Ax(r,n),textureProvider:this.textureProvider,effectProvider:this.effectProvider,materialGraphProvider:this.materialGraphProvider,fallbackTextures:this.fallbackTextures,projection:this.projection,boundsArea:this.boundsArea,position:n.position,seed:Nx(n),timeSeconds:n.timeSeconds,subEmitterDepth:n.nextDepth,maxSubEmitterDepth:n.maxDepth,maxSubEmitterInstances:this.maxSubEmitterInstances,autoStart:!0});this.childInstances.add(i),this.root.addChild(i.root),this.bloomRoot.addChild(i.bloomRoot),this.spawnedSubEmittersLastFrame++;let a=Math.max(0,t-n.timeSeconds);a>0&&i.update(a,{timeSeconds:t,draw:!1})}}updateSubEmitterInstances(e,t){for(let n of[...this.childInstances])n.update(e,{timeSeconds:t,draw:!1})||n.stats.activeParticles>0||(this.childInstances.delete(n),this.root.removeChild(n.root),this.bloomRoot.removeChild(n.bloomRoot),n.destroy())}clearSubEmitterInstances(){for(let e of[...this.childInstances])this.root.removeChild(e.root),this.bloomRoot.removeChild(e.bloomRoot),e.destroy();this.childInstances.clear()}drawParticleViews(e,t){if(!this.runner.isActive)return this.hideEmitterViews(),kx(this.runner.states),this.ownRenderGroupsLastFrame=0,this.ownDebugQuads.length=0,this.stats.bloomSourceParticles=0,0;this.textureProvider?.staticAssets||this.ensureEmitterViews(),this.ownDebugQuads.length=0;let n=0,r=0,i=0;for(let a=0;a<this.emitterViews.length;a++){let o=this.runner.definition.emitters[a],s=this.runner.states[a],c=this.emitterViews[a];if(!o||!s||!c||!o.enabled){c&&dx(c),s&&(s.uploadBytesLastFrame=0);continue}let l=jb(c,o,s,e,this.projection,this.position,t,this.ownDebugQuads,a,c.materialFixed,c.particleColorUsage,this.debugQuadPool);n+=l.visibleParticles,r+=l.renderGroups,i+=l.bloomSourceParticles}return this.ownRenderGroupsLastFrame=r,this.stats.bloomSourceParticles=i,n}hideEmitterViews(){for(let e of this.emitterViews)dx(e);this.stats.bloomSourceParticles=0}ensureEmitterViews(){let e=[],t=[],n=[];for(let r=0;r<this.effect.emitters.length;r++){let i=this.effect.emitters[r],a=this.resolveEmitterRender(i);e.push(...a.missingMaterialTextureRefs),a.missingRef&&e.push(a.missingRef),a.missingTrailRef&&e.push(a.missingTrailRef);let o=Gy(a.materialBlock);o&&t.push(o);let s=Ky(a.materialBlock,i,r);s&&n.push(s),a.materialRenderFace&&a.materialRenderFace!==`double`&&n.push({emitterId:i.id,emitterIndex:r,featureKey:`material.renderFaces`,path:`emitters.${r}.render.material`,reason:`Material Render Faces has no effect in the Pixi flat-particle backend; use the Three 3D/world backend for front/back face culling.`});let c=this.emitterViews[r];if(c?.key===a.key){c.materialFixed=this.resolveEmitterMaterialFixed(i),c.particleColorUsage=this.resolveEmitterParticleColorUsage(i);continue}c&&fx(this.root,this.bloomRoot,c);let l=Hb(a.tier2Material,a.texture),u=Hb(a.tier2Material,a.trailTexture),d=Hb(a.tier2Material,a.texture),f=new lu({texture:a.texture,shader:l??void 0,dynamicProperties:{vertex:!0,position:!0,rotation:!0,uvs:a.dynamicUvs,color:!0},boundsArea:this.boundsArea}),p=new lu({texture:a.trailTexture,shader:u??void 0,dynamicProperties:{vertex:!0,position:!0,rotation:!0,uvs:!1,color:!0},boundsArea:this.boundsArea}),m=new lu({texture:a.texture,shader:d??void 0,dynamicProperties:{vertex:!0,position:!0,rotation:!0,uvs:a.dynamicUvs,color:!0},boundsArea:this.boundsArea});m.blendMode=`add`,this.root.addChild(p),this.root.addChild(f),this.bloomRoot.addChild(m);let h=[],g=[];if(this.textureProvider?.staticAssets){let e=Ty(i);for(let t=0;t<e;t++){let e=mx(a.frameTextures[0]??a.texture);h.push(e),g.push({particle:e,depth:0,start:0,seed:0})}}this.emitterViews[r]={key:a.key,texture:a.texture,container:f,pool:h,depthSort:[],depthSortPool:g,drawResult:{visibleParticles:0,renderGroups:0,bloomSourceParticles:0},particleScratch:Lx(a.texture),materialFixed:this.resolveEmitterMaterialFixed(i),particleColorUsage:this.resolveEmitterParticleColorUsage(i),dynamicParams:[0,0,0,0],trailContainer:p,trailTexture:a.trailTexture,trailPool:[],bloomContainer:m,bloomPool:[],trailHistories:new Map,trailEmitterPosition:Kx(this.position),frameTextures:a.frameTextures,ownedFrameTextures:a.ownedFrameTextures,animatedUvFrames:a.animatedUvFrames,materialUv:a.materialUv,materialBlock:a.materialBlock,materialShaders:[l,u,d].filter(e=>e!==null),dynamicUvs:a.dynamicUvs,effectiveBlend:a.effectiveBlend}}for(;this.emitterViews.length>this.effect.emitters.length;){let e=this.emitterViews.pop();e&&fx(this.root,this.bloomRoot,e)}this.ownMissingTextureRefs=e,this.ownMissingMaterialRefs=Hx(t),this.ownMaterialUnsupportedFeatures=n,this.applyEmitterRenderOrder()}applyEmitterRenderOrder(){let e=this.effect.emitters.map((e,t)=>({index:t,orderInLayer:e.render.orderInLayer})).sort((e,t)=>e.orderInLayer-t.orderInLayer||e.index-t.index),t=0;for(let{index:n}of e){let e=this.emitterViews[n];e&&(this.root.setChildIndex(e.trailContainer,t++),this.root.setChildIndex(e.container,t++))}}resolveEmitterRender(e){let t=px(e),n=this.fallbackTextures[t],r=e.render.material,i=r?.shaderId===`sprite-master`?this.spriteMasterGraph:r?this.materialGraphProvider?.(r.shaderId):void 0,a=r&&bm(i,r)||e.render.texture,o=[`mode:${e.mode}`,`blend:${e.render.blend}`,`depth:${Number(e.render.depthTest)}${Number(e.render.depthWrite)}${Number(e.render.depthInk)}`,`opacity:${e.render.opacitySource}:${Number(e.render.opacityInvert)}`,rx(e)],s=n,c=`fallback:${t}:uid:${n.uid}`,l,u=null,d=null,f=null,p=null;if(a){let r=e_(a),i=this.textureProvider?.getTexture(r);if(i){s=i;let t=this.resolveEmitterMaterial(e,i.uid);d=t,u=t?.artifact??null,f=t?.block??null,p=i.uid,c=`texture:${a}:uid:${i.uid}`}else c=`fallback:${t}:missing:${a}:uid:${n.uid}`,l=r}!d&&r&&(d=this.resolveEmitterMaterial(e,s.uid),u=d?.artifact??null,f=d?.block??null,p=s.uid),!f&&r&&u?.tier===`tier2-shader`&&!Vg(u)&&(f=Uy(r.shaderId,u));let m=!!r&&r.shaderId!==`sprite-master`,h=!f&&r&&d?.graph&&u?.tier===`tier0-bake`?this.resolveMaterialBakeTexture(s,d.graph,r,u):s,g=f||m||u?.tier===`tier0-bake`?h:this.resolveDerivedTexture(h,e,a);!f&&!m&&u?.tier!==`tier0-bake`&&e.render.blend===`premultiplied`&&(g=this.resolvePremultipliedTexture(g));let _=qb(g,e),v=f?Wy(f):r&&u&&d?.graph?`materialShaderId:${u.shaderId}`+(u.tier===`tier0-bake`&&u.bakeHash?`:bake:${u.bakeHash}`:``)+(u.tier===`tier2-shader`?`:material:${Ig(d.graph,r,p)}`:``):``,y=!f&&r&&u?Wb(u):null,b=new Map,x=[],S=[];if(r&&d?.graph&&u?.tier===`tier2-shader`){let e=this.materialSamplerPaths.get(u);if(!e){let t=Hg({graph:d.graph,instance:r,artifact:u});e=[...new Set(t?.samplers.map(e=>e.path)??[])],this.materialSamplerPaths.set(u,e)}for(let t of e){let e=e_(t),n=this.textureProvider?.getTexture(e);n?b.set(t,n):x.push(e),S.push(JSON.stringify([t,n?.uid??null,n?.source.uid??null]))}}let C=!f&&r&&d&&d.graph&&u?.tier===`tier2-shader`&&Vg(u)?{graph:d.graph,instance:r,artifact:u,textureSheetTiles:Ub(e),samplerTextures:b}:null,w=Gb(y),T=gm(e.render.blend,m?u?.blend:null),E=m&&u?`materialBlend:${T}`:``,D=g,O=`trail:particle`,k,A=e.modules.trails?e.advanced.trails.texture:null;if(A){let e=e_(A),t=this.textureProvider?.getTexture(e);t?(D=t,O=`trail:${A}:uid:${t.uid}`):(O=`trail:missing:${A}`,k=e)}let ee=_.textures,j=[..._.ownedTextures],M=[];if(y){let e=Jb(ee);ee=e.textures,j=[...j,...e.ownedTextures],M=e.frames}return{key:[c,...o,v,...S,E,w,O].filter(Boolean).join(`|`),missingMaterialTextureRefs:x,texture:g,trailTexture:D,frameTextures:ee,ownedFrameTextures:j,animatedUvFrames:M,materialUv:y,materialBlock:f,tier2Material:C,dynamicUvs:!f&&(ee.length>1||y!=null),effectiveBlend:T,materialRenderFace:d?.graph?.side??`double`,missingRef:l,missingTrailRef:k}}resolveMaterialBakeTexture(e,t,n,r){let i=jm(e.uid,`textureAlpha`,!1,r.bakeHash),a=this.derivedTextures.get(i);if(a)return a;let o=Cy(e,t,n,{samplerForPath:(e,t,n)=>Yb(e,t,n,this.textureProvider)??null});return o?(this.derivedTextures.set(i,o),o):e}resolveDerivedTexture(e,t,n=null){let r=t.render.opacitySource;if(!Em(r))return e;let i=t.render.opacityInvert;if(n&&!t.render.material&&this.textureProvider?.getAlphaTexture){let e=this.textureProvider.getAlphaTexture(e_(n),r,i);if(e)return e}let a=jm(e.uid,r,i),o=this.derivedTextures.get(a);if(o)return o;let s=xy(e,r,i);return s?(this.derivedTextures.set(a,s),s):e}resolvePremultipliedTexture(e){let t=this.premultipliedTextures.get(e.uid);if(t)return t;let n=Sy(e);return n===e?e:(this.premultipliedTextures.set(e.uid,n),n)}refreshUnsupportedModules(){this.ownUnsupportedModules=Qg(this.effect),this.ownUnsupportedFeatures=$g(this.effect)}syncRunnerStats(e){let t=0,n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=this.stats.missingTextureRefs,u=this.stats.missingSubEmitterRefs,d=this.stats.missingMaterialRefs,f=this.stats.unsupportedModules,p=this.stats.unsupportedFeatures;Px(this.ownMissingTextureRefs,l),Px(this.ownMissingSubEmitterRefs,u),Px(this.ownMissingMaterialRefs,d),Px(this.ownUnsupportedModules,f),Px(this.ownUnsupportedFeatures,p);for(let e of this.ownMaterialUnsupportedFeatures)p.push(e);for(let e of this.childInstances)t+=e.stats.activeParticles,n+=e.stats.visibleParticles,r+=e.stats.capacity,i+=e.stats.emittedLastFrame,a+=e.stats.uploadBytesLastFrame,o+=e.stats.spawnedSubEmittersLastFrame,s+=e.stats.renderGroupsLastFrame,c+=e.stats.bloomSourceParticles,l.push(...e.stats.missingTextureRefs),u.push(...e.stats.missingSubEmitterRefs),d.push(...e.stats.missingMaterialRefs),f.push(...e.stats.unsupportedModules),p.push(...e.stats.unsupportedFeatures);this.stats.activeParticles=this.runner.stats.activeParticles+t,this.stats.visibleParticles=e+n,this.stats.capacity=this.runner.stats.capacity+r,this.stats.emittedLastFrame=this.runner.stats.emittedLastFrame+i,this.stats.uploadBytesLastFrame=Ox(this.runner.states)+a,this.stats.spawnedSubEmittersLastFrame=this.spawnedSubEmittersLastFrame+o,this.stats.renderGroupsLastFrame=this.ownRenderGroupsLastFrame+s,this.stats.bloomSourceParticles+=c,Ix(l),Fx(u),Fx(d),this.stats.unsupportedModules=f,this.stats.unsupportedFeatures=p}},Ob=class{constructor(e={}){q(this,`root`),q(this,`bloomSourceRoot`,new O),q(this,`stats`,{...Wx(),effectCount:0}),q(this,`instances`,new Set),q(this,`statsAggregate`,Wx()),q(this,`bloomComposer`),q(this,`bloomConfig`),q(this,`textureProvider`),q(this,`effectProvider`),q(this,`materialGraphProvider`),q(this,`fallbackTextures`),q(this,`projection`),q(this,`boundsArea`),q(this,`maxSubEmitterDepth`),q(this,`maxSubEmitterInstances`),q(this,`maxEventsPerFrame`),q(this,`maxSubEmitterRequestsPerFrame`),this.root=new O,this.bloomConfig=sb(e.bloom),this.bloomComposer=e.pixiRenderer?new lb(e.pixiRenderer):void 0,this.textureProvider=e.textureProvider,this.effectProvider=e.effectProvider,this.materialGraphProvider=e.materialGraphProvider,this.fallbackTextures=e.fallbackTextures,this.projection=e.projection??Dy(),this.boundsArea=e.boundsArea??gb.clone(),this.maxSubEmitterDepth=e.maxSubEmitterDepth,this.maxSubEmitterInstances=e.maxSubEmitterInstances,this.maxEventsPerFrame=e.maxEventsPerFrame,this.maxSubEmitterRequestsPerFrame=e.maxSubEmitterRequestsPerFrame,this.bloomComposer&&this.root.addChild(this.bloomComposer.outputSprite),e.parent?.addChild(this.root)}createEffect(e,t={}){let n=new Db({effect:e,textureProvider:t.textureProvider??this.textureProvider,effectProvider:t.effectProvider??this.effectProvider,materialGraphProvider:t.materialGraphProvider??this.materialGraphProvider,fallbackTextures:t.fallbackTextures??this.fallbackTextures,projection:t.projection??this.projection,boundsArea:t.boundsArea??this.boundsArea,position:t.position,seed:t.seed,timeSeconds:t.timeSeconds,autoStart:t.autoStart,subEmitterDepth:t.subEmitterDepth,maxSubEmitterDepth:t.maxSubEmitterDepth??this.maxSubEmitterDepth,maxSubEmitterInstances:t.maxSubEmitterInstances??this.maxSubEmitterInstances,maxEventsPerFrame:t.maxEventsPerFrame??this.maxEventsPerFrame,maxSubEmitterRequestsPerFrame:t.maxSubEmitterRequestsPerFrame??this.maxSubEmitterRequestsPerFrame});return this.instances.add(n),this.bloomSourceRoot.addChild(n.bloomRoot),t.addToStage!==!1&&(this.root.addChild(n.root),this.keepBloomOverlayBehindScene()),this.refreshStats(),n}addEffect(e,t=!0){this.instances.has(e)||(this.instances.add(e),this.bloomSourceRoot.addChild(e.bloomRoot),t&&(this.root.addChild(e.root),this.keepBloomOverlayBehindScene()),this.refreshStats())}removeEffect(e,t=!0){this.instances.delete(e)&&(this.root.removeChild(e.root),this.bloomSourceRoot.removeChild(e.bloomRoot),t&&e.destroy(),this.refreshStats())}setTextureProvider(e){this.textureProvider=e;for(let t of this.instances)t.setTextureProvider(e);this.refreshStats()}setEffectProvider(e){this.effectProvider=e;for(let t of this.instances)t.setEffectProvider(e);this.refreshStats()}setMaterialGraphProvider(e){this.materialGraphProvider=e;for(let t of this.instances)t.setMaterialGraphProvider(e);this.refreshStats()}setFallbackTextures(e){this.fallbackTextures=e;for(let t of this.instances)t.setFallbackTextures(e);this.refreshStats()}setProjection(e){this.projection=e;for(let t of this.instances)t.setProjection(e)}setBoundsArea(e){this.boundsArea=e;for(let t of this.instances)t.setBoundsArea(e)}update(e,t={}){let n=typeof t==`number`?{}:t,r=this.bloomDrawSettings();for(let n of this.instances)n.update(e,t,r);return n.draw===!1?(this.bloomComposer&&(this.bloomComposer.outputSprite.visible=!1),this.stats.bloomActive=!1,this.stats.bloomPasses=0,this.stats.bloomRenderScale=0):this.renderBloom(),this.refreshStats(),this.stats}draw(e){let t=this.bloomDrawSettings();for(let n of this.instances)n.draw(e,t);return this.renderBloom(),this.refreshStats(),this.stats}getParticleDebugQuads(){let e=[];for(let t of this.instances)t.getParticleDebugQuads(e);return e}destroy(){for(let e of[...this.instances])this.removeEffect(e,!0);this.bloomComposer?.outputSprite.parent===this.root&&this.root.removeChild(this.bloomComposer.outputSprite),this.bloomComposer?.destroy(),this.bloomSourceRoot.destroy({children:!1}),this.root.destroy({children:!0})}setBloomOptions(e){this.bloomConfig=sb(e),this.bloomConfig.enabled||(this.bloomSourceRoot.visible=!1,this.bloomComposer&&(this.bloomComposer.outputSprite.visible=!1),this.stats.bloomActive=!1,this.stats.bloomSourceParticles=0,this.stats.bloomPasses=0,this.stats.bloomRenderScale=0)}refreshStats(){let e=this.statsAggregate;e.activeParticles=0,e.visibleParticles=0,e.capacity=0,e.emittedLastFrame=0,e.uploadBytesLastFrame=0,e.spawnedSubEmittersLastFrame=0,e.renderGroupsLastFrame=0,e.bloomSourceParticles=0,e.unsupportedModules.length=0,e.unsupportedFeatures.length=0,e.missingTextureRefs.length=0,e.missingMaterialRefs.length=0,e.missingSubEmitterRefs.length=0;for(let t of this.instances)e.activeParticles+=t.stats.activeParticles,e.visibleParticles+=t.stats.visibleParticles,e.capacity+=t.stats.capacity,e.emittedLastFrame+=t.stats.emittedLastFrame,e.uploadBytesLastFrame+=t.stats.uploadBytesLastFrame,e.spawnedSubEmittersLastFrame+=t.stats.spawnedSubEmittersLastFrame,e.renderGroupsLastFrame+=t.stats.renderGroupsLastFrame,e.bloomSourceParticles+=t.stats.bloomSourceParticles,e.unsupportedModules.push(...t.stats.unsupportedModules),e.unsupportedFeatures.push(...t.stats.unsupportedFeatures),e.missingTextureRefs.push(...t.stats.missingTextureRefs),e.missingMaterialRefs.push(...t.stats.missingMaterialRefs),e.missingSubEmitterRefs.push(...t.stats.missingSubEmitterRefs);this.stats.activeParticles=e.activeParticles,this.stats.visibleParticles=e.visibleParticles,this.stats.capacity=e.capacity,this.stats.emittedLastFrame=e.emittedLastFrame,this.stats.uploadBytesLastFrame=e.uploadBytesLastFrame,this.stats.spawnedSubEmittersLastFrame=e.spawnedSubEmittersLastFrame,this.stats.renderGroupsLastFrame=e.renderGroupsLastFrame,this.stats.bloomSourceParticles=e.bloomSourceParticles,e.bloomSourceParticles<=0&&(this.stats.bloomActive=!1,this.stats.bloomPasses=0,this.stats.bloomRenderScale=0),this.stats.missingTextureRefs=e.missingTextureRefs,this.stats.missingSubEmitterRefs=e.missingSubEmitterRefs,this.stats.missingMaterialRefs=e.missingMaterialRefs,this.stats.unsupportedModules=e.unsupportedModules,this.stats.unsupportedFeatures=e.unsupportedFeatures,this.stats.effectCount=this.instances.size}bloomDrawSettings(){return cb(this.bloomConfig)}renderBloom(){let e=Ux(this.instances);this.bloomSourceRoot.visible=!!this.bloomComposer&&this.bloomConfig.enabled&&this.bloomConfig.intensity>0&&e>0,this.syncBloomCoordinateSpace();let t=this.bloomComposer?.render(this.bloomSourceRoot,e,this.bloomConfig)??0;this.stats.bloomActive=!!this.bloomComposer&&this.bloomConfig.enabled&&t>0,this.stats.bloomSourceParticles=e,this.stats.bloomPasses=t,this.stats.bloomRenderScale=this.stats.bloomActive?this.bloomConfig.renderScale:0}syncBloomCoordinateSpace(){let e=this.bloomComposer?.outputSprite;if(!e)return;let t=this.root.getGlobalPosition();this.bloomSourceRoot.position.set(t.x,t.y),e.position.set(-t.x,-t.y)}keepBloomOverlayBehindScene(){let e=this.bloomComposer?.outputSprite;e?.parent===this.root&&this.root.setChildIndex(e,0)}};function kb(e){return $x(e)&&e.kind===`vfx-effect`?mf({app:`vfx-editor`,kind:`particle-effect`,version:1,targetProfile:e.targetProfile,id:e.id,name:e.name,timeline:e.timeline,emitters:e.emitters}):mf(e)}function Ab(e,t){return Kg(kb(e),{materialGraphProvider:t})}function jb(e,t,n,r,i,a,o,s,c=0,l=null,u=hb,d){if(e.container.blendMode=e.effectiveBlend===`opaque`?`none`:e.effectiveBlend===`additive`?`add`:`normal`,e.trailContainer.blendMode=e.container.blendMode,e.materialBlock)return dx(e),n.uploadBytesLastFrame=0,e.drawResult.visibleParticles=0,e.drawResult.renderGroups=0,e.drawResult.bloomSourceParticles=0,e.drawResult;for(let n of e.materialShaders)zy(n,r),By(n,Fb(t,e.dynamicParams));Zb(e,r),Lb(e,t,i,a),e.depthSort.length=0;let f=0,p=0;for(let m=0;m<n.activeCount;m++){let h=e.pool[f]??mx(e.frameTextures[0]??e.texture);e.pool[f]=h;let g=Pb(h,t,n,m,r,i,e.frameTextures,a,o,l,u,e.effectiveBlend,e.particleScratch);if(!g||(Nb(s,t,c,m,g,d),!g.visible))continue;if(Ib(e,t,g,r),o.enabled&&g.emissiveStrength>o.threshold){let t=e.bloomPool[p]??mx(g.texture);hx(t,g,o),e.bloomPool[p]=t,e.bloomContainer.particleChildren[p]=t,p++}let _=e.depthSortPool[f];_||(_={particle:h,depth:0,start:0,seed:0},e.depthSortPool[f]=_),_.particle=h,_.depth=g.depth,_.start=g.start,_.seed=g.seed,e.depthSort.push(_),f++}Mb(e.depthSort,t.render.sortMode);for(let t=0;t<e.depthSort.length;t++)e.container.particleChildren[t]=e.depthSort[t].particle;e.container.particleChildren.length=f,e.container.update(),e.bloomContainer.particleChildren.length=p,e.bloomContainer.update();let m=Rb(e,t,r);n.uploadBytesLastFrame=Dx(f,m,p,e.dynamicUvs);let h=e.drawResult;return h.visibleParticles=f+m,h.renderGroups=+(f>0)+ +(m>0)+ +(p>0),h.bloomSourceParticles=p,h}function Mb(e,t){switch(t){case`distanceNearFirst`:e.sort(Rx);return;case`oldestFirst`:e.sort(Bx);return;case`none`:case`youngestFirst`:e.sort(Vx);return;default:e.sort(zx);return}}function Nb(e,t,n,r,i,a){if(!e||e.length>=Sb)return;let o=Math.max(2,Math.abs(i.scaleX)*Math.max(1,i.texture.width)),s=Math.max(2,Math.abs(i.scaleY)*Math.max(1,i.texture.height)),c=e.length,l=a?.[c];l?(l.emitterId=t.id,l.emitterIndex=n,l.particleIndex=r,l.mode=t.mode,l.x=i.x,l.y=i.y,l.width=o,l.height=s,l.anchorX=i.anchorX,l.anchorY=i.anchorY,l.rotation=i.rotation,l.depth=i.depth,l.alpha=i.alpha):(l={emitterId:t.id,emitterIndex:n,particleIndex:r,mode:t.mode,x:i.x,y:i.y,width:o,height:s,anchorX:i.anchorX,anchorY:i.anchorY,rotation:i.rotation,depth:i.depth,alpha:i.alpha},a&&(a[c]=l)),e.push(l)}function Pb(e,t,n,r,i,a,o,s,c,l=null,u=hb,d=t.render.blend,f=Lx(e.texture)){let p=n.instanceData,m=r*18,h=p[m+3]??0,g=Math.max(.001,p[m+7]??0),_=i-h,v=_/g;if(v<-1e-6||v>1.000001)return;let y=Qx(v,0,1),b=Math.max(0,_),x=Qx(n.age/Math.max(.001,t.duration),0,1),S=p[m+8]??.5,C=Mp(t,n,r,b,y,s,f.motion),w=C.velocity,T=Math.hypot(w[0],w[1],w[2]),E=t.render.alignAxis===`velocity`;E&&(wb[0]=w[0],wb[1]=w[1],wb[2]=w[2]);let D=f.world;D[0]=C.position[0],D[1]=C.position[1],D[2]=C.position[2];let O=f.motionSample;if(O.seed=S,O.normalizedAge=y,O.loopAge=x,O.ageSeconds=b,O.timeSeconds=i,O.world=D,O.velocity=w,ph(t,O),Lp(t,n,r,D,w,s),E&&(Pp(t,n,r,wb),Tb[0]=D[0],Tb[1]=D[1],Tb[2]=D[2]),t.modules.collision&&!wh(t,O))return;let k=a.project(D,f.projected);if(!k||k.visible===!1)return;let A=r*3,ee=n.runtimeFlagsData[r]??0,j=f.spawnDirection;j[0]=n.spawnDirectionData[A+0]??0,j[1]=n.spawnDirectionData[A+1]??1,j[2]=n.spawnDirectionData[A+2]??0,Pp(t,n,r,j);let M=t.mode===`billboard`?t.billboard.sizeValue:t.mesh.sizeValue,te=t.mode===`billboard`?t.billboard.separateAxes?t.billboard.sizeValueY:M:t.mesh.separateAxes?t.mesh.sizeValueY:M,ne=Math.max(0,p[m+11]??1),re=Math.max(0,p[m+12]??ne),ie=t.modules.size?Math.max(0,Y(M,y,S,x)):1,ae=t.modules.size?Math.max(0,Y(te,y,S,x)):1,oe=Oh(t,T,S,x),se=Np(n,r),ce=ne*ie*oe*(se?t.spawn.scale[0]:1),le=re*ae*oe*(se?t.spawn.scale[1]:1),ue=Math.max(1e-6,a.pixelsPerWorldUnit(D)),N=Math.max(.01,ce*ue),de=Math.max(.01,le*ue),fe=Math.max(N,de),pe=ix(o,t,y,S,x);e.texture!==pe&&(e.texture=pe);let me=e.texture,he=Ah(t,y,T,S,x),ge=E&&!he.stretchesAlongMotion,_e=w,ve=T;if(ge){let e=Th(t,n,r,b,g,i,S,x,s,1,Tb,Eb);e[0]+=w[0]-wb[0],e[1]+=w[1]-wb[1],e[2]+=w[2]-wb[2],_e=e,ve=Math.hypot(e[0],e[1],e[2])}let ye=j;ve>1e-6&&(ye=f.motionDirection,ye[0]=_e[0],ye[1]=_e[1],ye[2]=_e[2]);let be=he.stretchesAlongMotion?null:ox(t,ee,ye,ve,j),xe=t.mode===`mesh`?Math.max(.02,t.mesh.thickness):he.scaleX,Se=be&&t.render.facing!==`off`?ux(D,be,a):1,Ce=(t.mode===`mesh`?1:he.scaleY)*Se,we=t.mode===`mesh`?.5+t.mesh.pivot[0]:.5+t.billboard.pivot[0],Te=t.mode===`mesh`?.5+t.mesh.pivot[1]:.5-t.billboard.pivot[1],Ee=Qx(we,0,1),De=Qx(Te,0,1);e.anchorX=Ee,e.anchorY=De,e.scaleX=N*xe/Math.max(1,me.width),e.scaleY=de*Ce/Math.max(1,me.height);let Oe=0;if(se&&!be&&!he.stretchesAlongMotion){let e=f.localAxis;e[0]=1,e[1]=0,e[2]=0,Pp(t,n,r,e),Oe=Xy(D,e,a)}let ke=Oe+Lm(Fm(p[m+9]??0,p[m+10]??0,b,kh(t,T,b,S,x))),Ae=he.stretchesAlongMotion?Xy(D,ye,a)-Math.PI*.5:0,je=he.stretchesAlongMotion?0:ax(D,be,a);e.rotation=ke+(he.stretchesAlongMotion?Ae:je);let P=(Ee-we)*N*xe,Me=(De-Te)*de*Ce;if(P!==0||Me!==0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.x=k.x+P*t-Me*n,e.y=k.y+P*n+Me*t}else e.x=k.x,e.y=k.y;let Ne=a.depth?.(D)??D[2],Pe=pf(t.initializeParticle.color,S,y,x,f.initialColor,f.initialColorScratch),F=Math.max(0,Y(t.initializeParticle.color.intensity,y,S,x)),Fe=Bb(t,y,T,S,x),Ie=l?l.tint[0]:1,I=l?l.tint[1]:1,Le=l?l.tint[2]:1,Re=l?l.tint[3]:1,L=l?1+Math.max(0,l.emissive):1,ze=l?l.opacity:1,Be=u.rgb?Pe[0]*F*Fe[0]:1,Ve=u.rgb?Pe[1]*F*Fe[1]:1,He=u.rgb?Pe[2]*F*Fe[2]:1,Ue=u.alpha?Pe[3]*Fe[3]:1,We=Math.max(0,Be*Ie*L),Ge=Math.max(0,Ve*I*L),Ke=Math.max(0,He*Le*L),qe=f.hdrColor;qe[0]=We,qe[1]=Ge,qe[2]=Ke;let Je=Math.max(We,Ge,Ke),Ye=Je>1?Je:1,Xe=Qx(Ue*Re*ze,0,1),Ze=c.enabled?_x(qe,c.exposure,f.sdrColor):gx(qe,f.sdrColor),Qe=f.composedColor;Qe[0]=Ze[0],Qe[1]=Ze[1],Qe[2]=Ze[2],Qe[3]=Xe;let $e=Vb(Qe,Ne,t.render.depthInk),et=.94+Jx(S,0)*.12,tt=qx($e[0]*et,$e[1]*et,$e[2]*et);e.tint=tt;let nt=d===`additive`?Tx(Ye):1;e.alpha=Qx($e[3]*nt,0,1);let R=f.sample;return R.visible=e.alpha>.01&&fe>.01,R.x=k.x,R.y=k.y,R.depth=Ne,R.pixelSize=fe,R.pixelsPerWorldUnit=ue,R.rotation=e.rotation,R.scaleX=e.scaleX,R.scaleY=e.scaleY,R.anchorX=e.anchorX,R.anchorY=e.anchorY,R.tint=tt,R.alpha=e.alpha,R.baseAlpha=Xe,R.hdrColor=qe,R.emissiveStrength=Je,R.texture=me,R.key=t.modules.trails?`${h.toFixed(6)}:${S.toFixed(6)}`:``,R.start=h,R.normalizedAge=y,R.loopAge=x,R.speed=T,R.seed=S,R}function Fb(e,t=[0,0,0,0]){if(!e.modules.customData)return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t;let n=e.advanced.customData.channels;return t[0]=Y(n[0],0,.5,0),t[1]=Y(n[1],0,.5,0),t[2]=Y(n[2],0,.5,0),t[3]=Y(n[3],0,.5,0),t}function Ib(e,t,n,r){if(!t.modules.trails)return;let i=t.advanced.trails;if(n.seed>=i.ratio)return;let a=Math.max(0,Y(i.length,n.normalizedAge,n.seed,n.loopAge)),o=Math.max(.01,Y(i.width,n.normalizedAge,n.seed,n.loopAge)),s=Math.max(.001,Y(i.lifetime,n.normalizedAge,n.seed,n.loopAge)),c=a>0?Math.max(1,a*n.pixelsPerWorldUnit):void 0,l=Math.max(.5,o*n.pixelsPerWorldUnit),u=e.trailHistories.get(n.key);u||(u={points:[],lastSeenFrame:r},e.trailHistories.set(n.key,u));let d=u.points,f=d[d.length-1],p=Math.max(.5,t.advanced.trails.minVertexDistance*n.pixelsPerWorldUnit);!f||Xx(f.x,f.y,n.x,n.y)>=p?d.push({x:n.x,y:n.y,timeSeconds:r,lifetimeSeconds:s,distanceFromHead:0,pixelSize:n.pixelSize,tint:n.tint,alpha:n.alpha,widthPx:l,maxLengthPx:c,seed:n.seed}):(f.x=n.x,f.y=n.y,f.timeSeconds=r,f.lifetimeSeconds=s,f.pixelSize=n.pixelSize,f.tint=n.tint,f.alpha=n.alpha,f.widthPx=l,f.maxLengthPx=c,f.seed=n.seed),u.lastSeenFrame=r,zb(d,c,r)}function Lb(e,t,n,r){let i=e.trailEmitterPosition;if(t.modules.trails&&!t.advanced.trails.worldSpace&&e.trailHistories.size>0){let t=n.project(i),a=n.project(r);if(t&&a&&t.visible!==!1&&a.visible!==!1){let n=a.x-t.x,r=a.y-t.y;if(n!==0||r!==0)for(let t of e.trailHistories.values())for(let e of t.points)e.x+=n,e.y+=r}}i[0]=r[0],i[1]=r[1],i[2]=r[2]}function Rb(e,t,n){if(!t.modules.trails)return e.trailHistories.clear(),e.trailContainer.particleChildren.length=0,e.trailContainer.update(),0;let r=t.advanced.trails,i=[1,1,1,1],a=r.color,o=0;for(let[t,s]of e.trailHistories){if(zb(s.points,void 0,n),s.points.length===0){e.trailHistories.delete(t);continue}let c=s.points,l=Math.max(c[0]?.distanceFromHead??1,1);for(let t=0;t<c.length;t++){let s=c[t],u=s.maxLengthPx;if(u!==void 0&&s.distanceFromHead>u)continue;let d=r.inheritColor?Math.max(s.widthPx,s.distanceFromHead,1):l,f=Qx(s.distanceFromHead/(u??d),0,1),p=1-f,m=1-Qx((n-s.timeSeconds)/s.lifetimeSeconds,0,1),h=s.tint,g=s.alpha;if(!r.inheritColor){let e=Mm(r,1-m,f,i);h=qx(e[0],e[1],e[2]),g=e[3]}else if(a){let e=ap(a,f);h=qx(e[0],e[1],e[2]),g=up(a,f)}let _=g*p*m;if(_<=.01)continue;let v=e.trailTexture,y=Math.max(0,Y(r.widthOverTrail,f,s.seed)),b=s.widthPx*y;if(b<=.01)continue;let x=e.trailPool[o]??mx(v);e.trailPool[o]=x,x.texture=v,x.x=s.x,x.y=s.y;let S=c[Math.min(t+1,c.length-1)]??s,C=S.x-s.x,w=S.y-s.y,T=Math.max(b,Math.hypot(C,w));x.rotation=T>b?Math.atan2(w,C)-Math.PI*.5:0,x.scaleX=b/Math.max(1,v.width),x.scaleY=r.textureMode===`stretch`?T/Math.max(1,v.height):b/Math.max(1,v.height),x.tint=h,x.alpha=_,e.trailContainer.particleChildren[o]=x,o++}}return e.trailContainer.particleChildren.length=o,e.trailContainer.update(),o}function zb(e,t,n){let r=0;for(let t=e.length-1;t>=0;t--){let n=e[t],i=e[t+1];i&&(r+=Xx(n.x,n.y,i.x,i.y)),n.distanceFromHead=r}for(;e.length>0&&(t!==void 0&&e[0].distanceFromHead>t&&e.length>1||n-e[0].timeSeconds>e[0].lifetimeSeconds);)e.shift()}function Bb(e,t,n,r,i){return Dh(e,t,n,r,e.modules.color?[...ap(e.color.gradient,t),up(e.color.gradient,t)]:[1,1,1,1],i)}function Vb(e,t,n){if(!n)return e;let r=1-Qx(t*.035,-.28,.28);return e[0]*=r,e[1]*=r,e[2]*=r,e}function Hb(e,t){return e?Ry({graph:e.graph,instance:e.instance,artifact:e.artifact,texture:t,textureSheetTiles:e.textureSheetTiles,samplerTextures:e.samplerTextures}):null}function Ub(e){if(!e.modules.textureSheetAnimation)return[1,1];let t=e.advanced.textureSheetAnimation;return[Math.max(1,Math.round(t.tiles[0])),Math.max(1,Math.round(t.tiles[1]))]}function Wb(e){if(e.tier!==`tier1-fixed`)return null;let t=e.fixed,n=t?.uvPan,r=t?.uvRotate,i=n!=null&&(Math.abs(n.speed[0])>1e-6||Math.abs(n.speed[1])>1e-6),a=r!=null&&Math.abs(r.speed)>1e-6;return!i&&!a?null:{pan:i?n:void 0,rotate:a?r:void 0}}function Gb(e){if(!e)return``;let t=[];return e.pan&&t.push(`uvPan:${Kb(e.pan.speed[0])}:${Kb(e.pan.speed[1])}`),e.rotate&&t.push(`uvRotate:${Kb(e.rotate.speed)}:${Kb(e.rotate.center[0])}:${Kb(e.rotate.center[1])}`),t.join(`:`)}function Kb(e){return Number.isFinite(e)?String(e):`0`}function qb(e,n){if(!n.modules.textureSheetAnimation)return{textures:[e],ownedTextures:[]};let r=n.advanced.textureSheetAnimation,i=Math.max(1,Math.round(r.tiles[0])),a=Math.max(1,Math.round(r.tiles[1])),o=i*a;if(o<=1)return{textures:[e],ownedTextures:[]};let c=e.frame,l=c.width/i,u=c.height/a;if(!Number.isFinite(l)||!Number.isFinite(u)||l<=0||u<=0)return{textures:[e],ownedTextures:[]};let d=[];for(let n=0;n<o;n++){let r=n%i,a=Math.floor(n/i);d.push(new t({source:e.source,frame:new s(c.x+r*l,c.y+a*u,l,u),orig:new s(0,0,l,u),defaultAnchor:e.defaultAnchor,rotate:e.rotate}))}return{textures:d,ownedTextures:d}}function Jb(e){let n=[],r=[];for(let i of e){nx(i);let e=new t({source:i.source,frame:tx(i.frame),orig:tx(i.orig),trim:i.trim?tx(i.trim):void 0,defaultAnchor:i.defaultAnchor,rotate:i.rotate,dynamic:!0}),a={texture:e,baseUvs:ex(i.uvs)};n.push(a),r.push(e)}return{textures:r,ownedTextures:r,frames:n}}function Yb(e,t,n,r){let i=r?.getTexture(e_(e)),a=Xb(i);if(!a)return null;let o=a.getContext(`2d`,{willReadFrequently:!0});if(!o)return null;let s=Math.min(a.width-1,Math.max(0,Math.round(t[0]*(a.width-1)))),c=Math.min(a.height-1,Math.max(0,Math.round(t[1]*(a.height-1)))),l=o.getImageData(s,c,1,1).data;return[(l[0]??0)/255,(l[1]??0)/255,(l[2]??0)/255,(l[3]??0)/255]}function Xb(e){if(!e||typeof document>`u`)return null;let t=e.source,n=t?.resource,r=e.frame,i=r?.x??0,a=r?.y??0,o=r?.width??t?.pixelWidth??0,s=r?.height??t?.pixelHeight??0;if(!n||o<=0||s<=0)return null;let c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`,{willReadFrequently:!0});if(!l)return null;try{l.drawImage(n,i,a,o,s,0,0,o,s)}catch{return null}return c}function Zb(e,t){if(e.materialUv&&e.animatedUvFrames.length!==0)for(let n of e.animatedUvFrames){let r=Qb(0,0,e.materialUv,t),i=Qb(1,0,e.materialUv,t),a=Qb(1,1,e.materialUv,t),o=Qb(0,1,e.materialUv,t),s=$b(n.baseUvs,r[0],r[1]),c=$b(n.baseUvs,i[0],i[1]),l=$b(n.baseUvs,a[0],a[1]),u=$b(n.baseUvs,o[0],o[1]),d=n.texture.uvs;d.x0=s[0],d.y0=s[1],d.x1=c[0],d.y1=c[1],d.x2=l[0],d.y2=l[1],d.x3=u[0],d.y3=u[1]}}function Qb(e,t,n,r){let i=e,a=t;if(n.pan&&(i+=n.pan.speed[0]*r,a+=n.pan.speed[1]*r),n.rotate){let e=n.rotate.speed*r*Math.PI*2,t=n.rotate.center,o=i-t[0],s=a-t[1],c=Math.cos(e),l=Math.sin(e);i=t[0]+o*c-s*l,a=t[1]+o*l+s*c}return[i,a]}function $b(e,t,n){let r=e.x0+(e.x1-e.x0)*t,i=e.y0+(e.y1-e.y0)*t,a=e.x3+(e.x2-e.x3)*t,o=e.y3+(e.y2-e.y3)*t;return[r+(a-r)*n,i+(o-i)*n]}function ex(e){return{x0:e.x0,y0:e.y0,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,x3:e.x3,y3:e.y3}}function tx(e){return new s(e.x,e.y,e.width,e.height)}function nx(e){e.source.addressMode=`repeat`}function rx(e){if(!e.modules.textureSheetAnimation)return``;let t=e.advanced.textureSheetAnimation;return[`sheet`,Math.max(1,Math.round(t.tiles[0])),Math.max(1,Math.round(t.tiles[1])),t.startFrame,t.cycles,Number(t.randomStartFrame)].join(`:`)}function ix(e,n,r,i,a){let o=e[0]??t.EMPTY;return!n.modules.textureSheetAnimation||e.length<=1?o:e[Nh(n.advanced.textureSheetAnimation,r,i,a).frame%e.length]??o}function ax(e,t,n){return t?Im(Xy(e,t,n,-Math.PI*.5)):0}function ox(e,t,n,r,i){let a=null;return e.render.alignAxis===`spawnDirection`?a=i:e.render.alignAxis===`velocity`?a=r>1e-6?n:i:e.render.alignAxis===`vector`?a=e.render.alignmentVector:t&2&&(a=i),a}var sx=[0,0,0],cx={x:0,y:0},lx={x:0,y:0};function ux(e,t,n){let r=Math.hypot(t[0],t[1],t[2]);if(r<=1e-6)return 1;let i=1/r,a=sx;a[0]=e[0]+t[0]*i,a[1]=e[1]+t[1]*i,a[2]=e[2]+t[2]*i;let o=n.project(e,cx),s=n.project(a,lx);return!o||!s||o.visible===!1||s.visible===!1?1:Qx(Math.hypot(s.x-o.x,s.y-o.y)/Math.max(1e-6,n.pixelsPerWorldUnit(e)),.02,1)}function dx(e){e.container.particleChildren.length=0,e.trailContainer.particleChildren.length=0,e.bloomContainer.particleChildren.length=0,e.trailHistories.clear(),e.container.update(),e.trailContainer.update(),e.bloomContainer.update()}function fx(e,t,n){e.removeChild(n.container),e.removeChild(n.trailContainer),t.removeChild(n.bloomContainer),n.container.destroy(),n.trailContainer.destroy(),n.bloomContainer.destroy();for(let e of n.ownedFrameTextures)e.destroy(!1);n.ownedFrameTextures.length=0,n.frameTextures.length=0,n.animatedUvFrames.length=0}function px(e){return e.mode===`mesh`?e.mesh.template:e.billboard.shape===`square`?`square`:`circle`}function mx(e){let t=new wy(e);return t.anchorX=.5,t.anchorY=.5,t}function hx(e,t,n){e.texture!==t.texture&&(e.texture=t.texture),e.x=t.x,e.y=t.y,e.rotation=t.rotation;let r=Sx(t.hdrColor,n.threshold,n.softKnee),i=Math.max(r[0],r[1],r[2]);e.anchorX=t.anchorX,e.anchorY=t.anchorY,e.scaleX=t.scaleX,e.scaleY=t.scaleY;let a=Math.max(t.hdrColor[0],t.hdrColor[1],t.hdrColor[2]),o=i>0?a>1?1/i:1:0;e.tint=qx(r[0]*o,r[1]*o,r[2]*o),e.alpha=Ex(t.baseAlpha,i)}function gx(e,t=[0,0,0]){let n=Math.max(e[0],e[1],e[2]),r=n>1?1/n:1;return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function _x(e,t,n=[0,0,0]){let r=2**Qx(t,-2,2);if(n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,Math.max(n[0],n[1],n[2])<=1)return n;let i=vx(n);return n[0]=i[0],n[1]=i[1],n[2]=i[2],n}function vx(e){let t=[e[0]*.59719+e[1]*.35458+e[2]*.04823,e[0]*.076+e[1]*.90834+e[2]*.01566,e[0]*.0284+e[1]*.13383+e[2]*.83777],n=[yx(t[0]),yx(t[1]),yx(t[2])];return bx(e,[Qx(n[0]*1.60475+n[1]*-.53108+n[2]*-.07367,0,1),Qx(n[0]*-.10208+n[1]*1.10813+n[2]*-.00605,0,1),Qx(n[0]*-.00327+n[1]*-.07276+n[2]*1.07602,0,1)])}function yx(e){let t=Math.max(0,e),n=t*(t+.0245786)-90537e-9,r=t*(.983729*t+.432951)+.238081;return r>0?n/r:0}function bx(e,t){let n=Math.max(e[0],e[1],e[2]);if(n<=1||e[0]<n)return t;let r=Math.max(e[1],e[2]),i=Qx((e[0]-r)/e[0],0,1),a=Math.log2(Math.max(1,n)),o=i*Qx((a-1)/8,0,1);if(o<=0)return t;let s=[1,.92*(1-Math.exp(-a/10)),.62*(1-Math.exp(-a/16))];return[xx(t[0],s[0],o),xx(t[1],s[1],o),xx(t[2],s[2],o)]}function xx(e,t,n){return e+(t-e)*n}function Sx(e,t,n){let r=Math.max(e[0],e[1],e[2]);if(r<=0)return[0,0,0];let i=Cx(r,t,n);return[e[0]*i,e[1]*i,e[2]*i]}function Cx(e,t,n){if(t<=0)return 1;let r=Math.max(0,t*n),i=Math.max(e-t,0);if(r<=0)return Qx(i/e,0,1);let a=Qx(e-t+r,0,r*2),o=a*a/(4*r);return Qx(Math.max(i,o)/e,0,1)}function wx(e,t){let n=e/t;return Math.max(0,Math.log2(Math.max(1,n)))}function Tx(e){return 1+wx(e,1)*Cb}function Ex(e,t){let n=Qx(Math.max(0,t),0,yb);return Qx(e*(bb>0?(Math.log2(1+n)/bb)**+xb:0),0,1)}function Dx(e,t,n,r){let i=Math.max(0,e)+Math.max(0,t)+Math.max(0,n);if(i<=0)return 0;let a=2*Float32Array.BYTES_PER_ELEMENT,o=Float32Array.BYTES_PER_ELEMENT,s=4*Float32Array.BYTES_PER_ELEMENT,c=Uint32Array.BYTES_PER_ELEMENT,l=r?4*Float32Array.BYTES_PER_ELEMENT:0;return i*(a+o+s+c+l)}function Ox(e){let t=0;for(let n of e)t+=n.uploadBytesLastFrame;return t}function kx(e){for(let t of e)t.uploadBytesLastFrame=0}function Ax(e,t){let n=kb(e);if(!t.inheritedColor&&!t.inheritedSize)return n;let r=t.inheritedColor,i=Math.max(.001,t.inheritedSize??1);return{...n,emitters:n.emitters.map(e=>({...e,color:r?{...e.color,gradient:{...e.color.gradient,colorStops:e.color.gradient.colorStops.map(e=>({...e,color:[e.color[0]*r[0],e.color[1]*r[1],e.color[2]*r[2]]})),alphaStops:e.color.gradient.alphaStops.map(e=>({...e,alpha:e.alpha*r[3]}))}}:e.color,initializeParticle:t.inheritedSize&&!e.modules.size?{...e.initializeParticle,size:Mx(e.initializeParticle.size,i),size3D:jx(e.initializeParticle.size3D,i)}:e.initializeParticle,billboard:t.inheritedSize&&e.modules.size?{...e.billboard,sizeValue:Mx(e.billboard.sizeValue,i),sizeValueY:Mx(e.billboard.sizeValueY,i)}:e.billboard,mesh:t.inheritedSize&&e.modules.size?{...e.mesh,sizeValue:Mx(e.mesh.sizeValue,i)}:e.mesh}))}}function jx(e,t){return{x:Mx(e.x,t),y:Mx(e.y,t),z:Mx(e.z,t)}}function Mx(e,t){return{...e,value:e.value*t,min:e.min*t,max:e.max*t,curve:e.curve.map(e=>({...e,y:e.y*t})),curveB:e.curveB.map(e=>({...e,y:e.y*t})),editorMin:e.editorMin*t,editorMax:e.editorMax*t}}function Nx(e){return Math.floor(Math.abs(e.sourceParticleSeed)*4294967295)^Yx(e.effectFile)^Math.imul(e.nextDepth+1,2654435761)^Math.imul(e.sourceParticleIndex+1,2246822507)}function Px(e,t){t.length=e.length;for(let n=0;n<e.length;n++)t[n]=e[n]}function Fx(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=!1;for(let n=0;n<t;n++)if(e[n]===r){i=!0;break}i||(e[t++]=r)}e.length=t}function Ix(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=!1;for(let n=0;n<t;n++)if(e[n].path===r.path){i=!0;break}i||(e[t++]=r)}e.length=t}function Lx(e){let t={position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]},n=[0,0,0];return{motion:t,world:n,motionSample:{seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:n,velocity:t.velocity},projected:{x:0,y:0,visible:!0},spawnDirection:[0,1,0],motionDirection:[0,1,0],localAxis:[1,0,0],initialColor:[1,1,1,1],initialColorScratch:[1,1,1,1],hdrColor:[0,0,0],sdrColor:[0,0,0],composedColor:[1,1,1,1],sample:{visible:!0,x:0,y:0,depth:0,pixelSize:0,pixelsPerWorldUnit:1,rotation:0,scaleX:1,scaleY:1,anchorX:.5,anchorY:.5,tint:16777215,alpha:1,baseAlpha:1,hdrColor:[0,0,0],emissiveStrength:0,texture:e,key:``,start:0,normalizedAge:0,loopAge:0,speed:0,seed:0}}}function Rx(e,t){return e.depth-t.depth||e.start-t.start||e.seed-t.seed}function zx(e,t){return t.depth-e.depth||e.start-t.start||e.seed-t.seed}function Bx(e,t){return t.start-e.start||t.seed-e.seed}function Vx(e,t){return e.start-t.start||e.seed-t.seed}function Hx(e){return[...new Set(e)]}function Ux(e){let t=0;for(let n of e)t+=n.stats.bloomSourceParticles;return t}function Wx(){return{activeParticles:0,visibleParticles:0,capacity:0,emittedLastFrame:0,uploadBytesLastFrame:0,spawnedSubEmittersLastFrame:0,renderGroupsLastFrame:0,bloomActive:!1,bloomSourceParticles:0,bloomPasses:0,bloomRenderScale:0,missingSubEmitterRefs:[],missingTextureRefs:[],missingMaterialRefs:[],unsupportedModules:[],unsupportedFeatures:[]}}function Gx(e){return typeof e==`number`&&Number.isFinite(e)?e>>>0:_b}function Kx(e){return[e[0],e[1],e[2]]}function qx(e,t,n){let r=e=>Math.round(Qx(e,0,1)*255);return r(e)<<16|r(t)<<8|r(n)}function Jx(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function Yx(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t>>>0}function Xx(e,t,n,r){return Math.hypot(e-n,t-r)}function Zx(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function Qx(e,t,n){return Math.max(t,Math.min(n,e))}function $x(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function eS(e){return`fnv1a32:${nS(tS(e))}`}function tS(e){if(typeof e!=`object`||!e)return JSON.stringify(e)??`null`;if(Array.isArray(e))return`[${e.map(e=>tS(e)).join(`,`)}]`;let t=e;return`{${Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${JSON.stringify(e)}:${tS(t[e])}`).join(`,`)}}`}function nS(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function rS(e,t={}){let n=iS(e.manifest);cS(n);let r=e.assetPaths?new Set([...e.assetPaths].map(fS)):null;if(t.requireEveryAsset&&!r)throw Error(`Official VFX export asset paths are required for this load operation.`);let i=new Map,a=new Map,o=new Set,s=new Set,c=new Set,l=new Set;for(let e of n.assets)pS(c,e.path,`duplicate asset path "${e.path}"`),pS(l,`${e.type}:${e.id}`,`duplicate asset identity "${e.type}:${e.id}"`);for(let r of n.effects){if(pS(o,r.id,`duplicate effect id "${r.id}"`),pS(s,r.path,`duplicate effect path "${r.path}"`),lS(r,t.requiredBackend),!(r.path in e.effectsByPath))throw Error(`Official VFX export is missing ${r.path}.`);let c=aS(e.effectsByPath[r.path]);uS(c,r,n.generatedAt);for(let e of c.assets)if(!dS(n.assets,e))throw Error(`Effect "${c.id}" references asset absent from the manifest: ${e.path}.`);i.set(c.id,c),a.set(r.path,c)}let u=eS(n.effects.map(e=>({path:e.path,sourceHash:e.sourceHash})));if(n.sourceHash!==u)throw Error(`Official VFX manifest source hash is stale: expected ${u}, received ${n.sourceHash}.`);for(let e of t.requiredEffectIds??[])if(!i.has(e))throw Error(`Official VFX export is missing required effect "${e}".`);if(r){for(let e of n.assets)if(!r.has(e.path))throw Error(`Official VFX export is missing asset ${e.path}.`)}return{manifest:n,effectsById:i,effectsByPath:a}}function iS(e){let t=hS(e,`VFX export manifest`);if(t.kind!==`vfx-manifest`)throw Error(`VFX export manifest kind must be "vfx-manifest".`);mS(t.version,`VFX export manifest`),_S(t.generatedAt,`VFX export manifest generatedAt`),_S(t.sourceHash,`VFX export manifest sourceHash`);let n=gS(t.effects,`VFX export manifest effects`),r=gS(t.assets,`VFX export manifest assets`),i=hS(t.validation,`VFX export manifest validation`);if(typeof i.valid!=`boolean`)throw Error(`VFX export manifest validation.valid must be boolean.`);gS(i.errors,`VFX export manifest validation errors`),gS(i.warnings,`VFX export manifest validation warnings`),gS(i.blockers,`VFX export manifest validation blockers`);for(let[e,t]of n.entries())oS(t,e);for(let[e,t]of r.entries())sS(t,e);return e}function aS(e){let t=hS(e,`VFX exported effect`);if(t.kind!==`vfx-effect`)throw Error(`VFX exported effect kind must be "vfx-effect".`);mS(t.version,`VFX exported effect`),_S(t.generatedAt,`VFX exported effect generatedAt`),_S(t.id,`VFX exported effect id`),_S(t.sourceEffectId,`VFX exported effect sourceEffectId`),_S(t.sourceHash,`VFX exported effect sourceHash`),gS(t.emitters,`VFX exported effect emitters`);let n=gS(t.assets,`VFX exported effect assets`);hS(t.support,`VFX exported effect support`);for(let[e,t]of n.entries())sS(t,e);return e}function oS(e,t){let n=hS(e,`VFX manifest effect ${t}`);return _S(n.id,`VFX manifest effect ${t} id`),_S(n.name,`VFX manifest effect ${t} name`),fS(_S(n.path,`VFX manifest effect ${t} path`)),_S(n.sourceEffectId,`VFX manifest effect ${t} sourceEffectId`),_S(n.sourceHash,`VFX manifest effect ${t} sourceHash`),hS(n.support,`VFX manifest effect ${t} support`),e}function sS(e,t){let n=hS(e,`VFX manifest asset ${t}`);if(_S(n.id,`VFX manifest asset ${t} id`),n.type!==`texture`&&n.type!==`material`&&n.type!==`mesh`)throw Error(`VFX manifest asset ${t} has unsupported type.`);return fS(_S(n.path,`VFX manifest asset ${t} path`)),e}function cS(e){if(!e.validation.valid||e.validation.blockers.length>0)throw Error(`Official VFX export is blocked by validation errors.`)}function lS(e,t){if(!t)return;let n=e.support.backends[t];if(!n||n.status===`blocked`||n.blockers.length>0)throw Error(`Effect "${e.id}" is blocked on required backend "${t}".`)}function uS(e,t,n){let r=[];if(e.id!==t.id&&r.push(`id`),e.sourceEffectId!==t.sourceEffectId&&r.push(`sourceEffectId`),e.sourceHash!==t.sourceHash&&r.push(`sourceHash`),e.generatedAt!==n&&r.push(`generatedAt`),r.length>0)throw Error(`Official VFX effect ${t.path} does not match its manifest entry (${r.join(`, `)}).`)}function dS(e,t){return e.some(e=>e.type===t.type&&e.id===t.id&&e.path===t.path)}function fS(e){let t=e.replace(/\\/g,`/`);if(t.length===0||t.startsWith(`/`)||t===`.`||t===`..`||t.startsWith(`../`)||t.includes(`/../`)||t.includes(`//`))throw Error(`Unsafe VFX export path "${e}".`);return t.replace(/^\.\//,``)}function pS(e,t,n){if(e.has(t))throw Error(`Official VFX manifest has ${n}.`);e.add(t)}function mS(e,t){if(e!==1)throw Error(`${t} version must be 1; received ${String(e)}.`)}function hS(e,t){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`${t} must be an object.`);return e}function gS(e,t){if(!Array.isArray(e))throw Error(`${t} must be an array.`);return e}function _S(e,t){if(typeof e!=`string`||e.length===0)throw Error(`${t} must be a non-empty string.`);return e}var vS={kind:`vfx-manifest`,version:1,generatedAt:`2026-10-19T10:05:22.496Z`,sourceHash:`fnv1a32:8ba9b169`,effects:[{id:`exhaust`,name:`exhaust`,path:`effects/exhaust.json`,sourceEffectFile:`exhaust.json`,sourceEffectId:`exhaust`,sourceHash:`fnv1a32:6b98b801`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`heal`,name:`heal`,path:`effects/heal.json`,sourceEffectFile:`heal.json`,sourceEffectId:`heal`,sourceHash:`fnv1a32:a49e95fa`,support:{status:`supported`,overall:`supported`,targetProfile:`portable`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[]},validation:{valid:!0,errors:[],warnings:[],infos:[],blockers:[]}},{id:`mist`,name:`mist`,path:`effects/mist.json`,sourceEffectFile:`mist.json`,sourceEffectId:`mist`,sourceHash:`fnv1a32:7e165488`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`portal`,name:`portal`,path:`effects/portal.json`,sourceEffectFile:`portal.json`,sourceEffectId:`portal`,sourceHash:`fnv1a32:49c96381`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}}],assets:[],validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},yS=Object.fromEntries(Object.entries(Object.assign({"../vfx-project/out/vfx/effects/exhaust.json":se,"../vfx-project/out/vfx/effects/heal.json":ce,"../vfx-project/out/vfx/effects/mist.json":le,"../vfx-project/out/vfx/effects/portal.json":ue})).map(([e,t])=>[e.split(`/out/vfx/`)[1],t])),bS=new URLSearchParams(location.search).get(`mode`),xS=[`portal`,`exhaust`,`mist`,`heal`].includes(bS)?bS:`portal`,SS=xS===`heal`,CS=e=>document.getElementById(e),wS=rS({manifest:vS,effectsByPath:yS},{requiredBackend:`three3d`,requiredEffectIds:[xS]}).effectsById.get(xS);CS(`title`).textContent={portal:`A portal swirl with a bounded lifetime`,exhaust:`Move the nozzle and leave the exhaust behind`,mist:`A mist layer with a visible particle budget`,heal:`One heal export in two renderers`}[xS],CS(`lesson`).textContent={portal:`Ring-shaped emission with orbital and inward radial motion.`,exhaust:`World-space particles travel along negative Z. Moving the origin changes future emission.`,mist:`24 particles per second × 2-second lifetime; capacity 64. The plain blue prop is a synthetic waterfall stand-in.`,heal:`32 procedural billboards; seed 147; 0.8-second lifetime. Shared simulation, explicit projection.`}[xS];var TS=new sr;TS.background=new W(1320491);var ES=new Ma(48,1,.1,30);ES.position.set(xS===`exhaust`?3:0,xS===`mist`?1.5:0,5),ES.lookAt(0,xS===`mist`?.6:0,xS===`exhaust`?-1:0);var DS=new ml({antialias:!0,preserveDrawingBuffer:!0});if(DS.setPixelRatio(1),CS(`three`).append(DS.domElement),xS===`mist`){let e=new wi(new Xi(.7,2,.3),new fi({color:3698064}));e.position.set(0,.95,-.35),TS.add(e);let t=new wi(new Xi(4,.08,3),new fi({color:3231822}));t.position.y=-.1,TS.add(t)}var OS=new Fv({scene:TS,camera:ES,captureDebugTransforms:!0}),kS=OS.createEffect(wS,{seed:147,autoStart:!1}),AS,jS,MS,NS,PS=performance.now(),FS=!0,IS=!1,LS=!1,RS=0;if(SS){CS(`pixi-panel`).hidden=!1,document.querySelector(`.views`).classList.add(`dual`),MS=new Al,await MS.init({width:520,height:350,background:1320491,antialias:!0,preserveDrawingBuffer:!0}),CS(`pixi`).append(MS.canvas),MS.ticker.stop();let e=new O;e.position.set(260,175),MS.stage.addChild(e),AS=new Ob({parent:e,projection:Dy({pixelsPerUnit:90,yAxis:`up`})}),rS({manifest:vS,effectsByPath:yS},{requiredBackend:`pixi2d`,requiredEffectIds:[`heal`]}),jS=AS.createEffect(wS,{seed:147,autoStart:!1})}function zS(){DS.setSize(CS(`three`).clientWidth,350),ES.aspect=CS(`three`).clientWidth/350,ES.updateProjectionMatrix(),US()}var BS=new ResizeObserver(zS);BS.observe(CS(`three`));function VS(){kS.stop(),kS.restart(),jS&&(jS.stop(),jS.reset(),jS.spawn()),PS=performance.now()}function HS(){FS=!0,VS();let e=SS?.2:3;for(let t=0;t<Math.round(e*60);t++)OS.update(1/60),AS?.update(1/60);US(),WS()}function US(){DS.render(TS,ES),MS?.render()}function WS(){let e=kS.getParticleDebugTransforms().slice(0,2).map(e=>e.position);CS(`stats`).textContent=JSON.stringify({mode:xS,versions:{nixieFx:`0.1.17`,three:`0.185.1`,pixi:`8.19.0`},sample:FS?SS?.2:3:`live`,seed:147,origin:LS?[.8,0,0]:[0,0,0],three:{activeParticles:kS.stats.activeParticles,capacity:kS.stats.capacity,drawCalls:kS.stats.drawCalls,unsupportedFeatures:kS.stats.unsupportedFeatures,samplePositions:e},pixi:jS?{activeParticles:jS.stats.activeParticles,unsupportedFeatures:AS.stats.unsupportedFeatures,unsupportedModules:AS.stats.unsupportedModules}:null,support:wS.support,reducedMotion:CS(`motion`).checked},null,2)}CS(`sample`).onclick=HS,CS(`live`).onclick=()=>{CS(`motion`).checked||(FS=!1,VS())},CS(`move`).onclick=()=>{LS=!LS,kS.setTransform({position:LS?[.8,0,0]:[0,0,0]}),jS?.setPosition(LS?[.8,0,0]:[0,0,0]),US(),WS()},CS(`motion`).onchange=()=>{CS(`motion`).checked&&(FS=!0,kS.stop(),jS?.stop(),OS.update(0),AS?.update(0),US(),WS())},CS(`dispose`).onclick=()=>{IS=!0,cancelAnimationFrame(NS),BS.disconnect(),OS.destroy(),AS?.destroy(),MS?.destroy(!0,{children:!0}),TS.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),DS.dispose(),TS.clear(),CS(`stats`).textContent=JSON.stringify({disposed:!0,effectCount:OS.stats.effectCount,sceneChildren:TS.children.length});for(let e of[`sample`,`live`,`move`,`dispose`])CS(e).disabled=!0};function GS(e){if(IS)return;NS=requestAnimationFrame(GS);let t=Math.min((e-PS)/1e3,.05);PS=e,!FS&&!document.hidden&&!CS(`motion`).checked&&(OS.update(t),AS?.update(t)),US(),++RS%30==0&&WS()}zS(),HS(),NS=requestAnimationFrame(GS);