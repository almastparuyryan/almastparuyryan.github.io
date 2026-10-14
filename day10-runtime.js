(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={kind:`vfx-effect`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,id:`atlas-frames`,name:`atlas-frames`,timeline:{frameRate:30,duration:2.2,loop:{enabled:!1,start:.27599999999999997,end:1.426},groups:[]},targetProfile:`portable`,sourceEffectFile:`atlas-frames.json`,sourceEffectId:`atlas-frames`,sourceHash:`fnv1a32:3114a4f9`,emitters:[{id:`atlas-frames-emitter`,name:`atlas-frames`,enabled:!0,mode:`billboard`,maxParticles:4,duration:.05,loop:!1,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!0,lights:!1,trails:!1,customData:!1},spawn:{rate:0,rateValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[{time:0,count:1,cycles:1,interval:0,probability:1}],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[0,0,0],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:2,min:2,max:2,curve:[{x:0,y:2},{x:1,y:2}],curveB:[{x:0,y:2},{x:1,y:2}]},color:{mode:`constant`,color:[1,1,1,1],colorB:[1,1,1,1],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.7,min:.7,max:.7,curve:[{x:0,y:.7},{x:1,y:.7}],curveB:[{x:0,y:.7},{x:1,y:.7}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[0,0,0],max:[0,0,0],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:`atlas-4.png`,material:null},billboard:{shape:`circle`,sizeStart:.7,sizeEnd:.7,sizeValue:{mode:`constant`,value:.7,min:.7,max:.7,curve:[{x:0,y:.7},{x:1,y:.7}],curveB:[{x:0,y:.7},{x:1,y:.7}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[1,1,1,1],end:[1,1,1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:.7,alpha:1},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[2,2],startFrame:0,endFrame:3,frameOverTime:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[{type:`texture`,id:`atlas-4`,path:`atlas-4.png`}],support:{status:`partial`,overall:`partial`,targetProfile:`portable`,portableSubset:!1,backends:{pixi2d:{backend:`pixi2d`,status:`partial`,warnings:[{code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`partial`,warnings:[{code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],blockers:[]}},unsupportedModules:[],partialModules:[`emitters.0.modules.textureSheetAnimation`],warnings:[`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},t={kind:`vfx-effect`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,id:`campfire-embers`,name:`campfire-embers`,timeline:{frameRate:30,duration:3,loop:{enabled:!1,start:.27599999999999997,end:1.426},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`campfire-embers.json`,sourceEffectId:`campfire-embers`,sourceHash:`fnv1a32:d26847f3`,emitters:[{id:`campfire-embers-emitter`,name:`campfire-embers`,enabled:!0,mode:`billboard`,maxParticles:56,duration:1,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:24,rateValue:{mode:`constant`,value:24,min:24,max:24,curve:[{x:0,y:24},{x:1,y:24}],curveB:[{x:0,y:24},{x:1,y:24}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[.35,.05,.35],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:2,min:2,max:2,curve:[{x:0,y:2},{x:1,y:2}],curveB:[{x:0,y:2},{x:1,y:2}]},color:{mode:`constant`,color:[1,.45,.08,.95],colorB:[1,.45,.08,.95],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.055,min:.055,max:.055,curve:[{x:0,y:.055},{x:1,y:.055}],curveB:[{x:0,y:.055},{x:1,y:.055}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-.16,.7,-.16],max:[.16,1.1,.16],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.055,sizeEnd:.055,sizeValue:{mode:`constant`,value:.055,min:.055,max:.055,curve:[{x:0,y:.055},{x:1,y:.055}],curveB:[{x:0,y:.055},{x:1,y:.055}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[1,.45,.08,.95],end:[1,.45,.08,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,.45,.08]},{position:1,color:[1,.45,.08]}],alphaStops:[{position:0,alpha:.95},{position:.7,alpha:.95},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},n={kind:`vfx-effect`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,id:`rain-impact`,name:`rain-impact`,timeline:{frameRate:30,duration:.65,loop:{enabled:!1,start:.27599999999999997,end:.65},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`rain-impact.json`,sourceEffectId:`rain-impact`,sourceHash:`fnv1a32:9c093399`,emitters:[{id:`rain-impact-emitter`,name:`rain-impact`,enabled:!0,mode:`billboard`,maxParticles:16,duration:.05,loop:!1,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:0,rateValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[{time:0,count:12,cycles:1,interval:0,probability:1}],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[0,0,0],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:.45,min:.45,max:.45,curve:[{x:0,y:.45},{x:1,y:.45}],curveB:[{x:0,y:.45},{x:1,y:.45}]},color:{mode:`constant`,color:[.3,.75,1,.9],colorB:[.3,.75,1,.9],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.065,min:.065,max:.065,curve:[{x:0,y:.065},{x:1,y:.065}],curveB:[{x:0,y:.065},{x:1,y:.065}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-.7,.18,-.7],max:[.7,.55,.7],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.065,sizeEnd:.065,sizeValue:{mode:`constant`,value:.065,min:.065,max:.065,curve:[{x:0,y:.065},{x:1,y:.065}],curveB:[{x:0,y:.065},{x:1,y:.065}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.3,.75,1,.9],end:[.3,.75,1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.3,.75,1]},{position:1,color:[.3,.75,1]}],alphaStops:[{position:0,alpha:.9},{position:.7,alpha:.9},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},r={kind:`vfx-effect`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,id:`seed-burst`,name:`seed-burst`,timeline:{frameRate:30,duration:1,loop:{enabled:!1,start:.27599999999999997,end:1},groups:[]},targetProfile:`portable`,sourceEffectFile:`seed-burst.json`,sourceEffectId:`seed-burst`,sourceHash:`fnv1a32:b021c3a4`,emitters:[{id:`seed-burst-emitter`,name:`seed-burst`,enabled:!0,mode:`billboard`,maxParticles:32,duration:.05,loop:!1,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:0,rateValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[{time:0,count:24,cycles:1,interval:0,probability:1}],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[.15,.15,0],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:.8,min:.8,max:.8,curve:[{x:0,y:.8},{x:1,y:.8}],curveB:[{x:0,y:.8},{x:1,y:.8}]},color:{mode:`constant`,color:[.3,.9,.65,1],colorB:[.3,.9,.65,1],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.075,min:.075,max:.075,curve:[{x:0,y:.075},{x:1,y:.075}],curveB:[{x:0,y:.075},{x:1,y:.075}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-1,-1,0],max:[1,1,0],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.075,sizeEnd:.075,sizeValue:{mode:`constant`,value:.075,min:.075,max:.075,curve:[{x:0,y:.075},{x:1,y:.075}],curveB:[{x:0,y:.075},{x:1,y:.075}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.3,.9,.65,1],end:[.3,.9,.65,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[.3,.9,.65]},{position:1,color:[.3,.9,.65]}],alphaStops:[{position:0,alpha:1},{position:.7,alpha:1},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`portable`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},i={kind:`vfx-effect`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,id:`wall-sparks`,name:`wall-sparks`,timeline:{frameRate:30,duration:.8,loop:{enabled:!1,start:.27599999999999997,end:.8},groups:[]},targetProfile:`three-world-3d`,sourceEffectFile:`wall-sparks.json`,sourceEffectId:`wall-sparks`,sourceHash:`fnv1a32:5901e087`,emitters:[{id:`wall-sparks-emitter`,name:`wall-sparks`,enabled:!0,mode:`billboard`,maxParticles:28,duration:.05,loop:!1,timeline:{start:0,groupId:null,locked:!1},modules:{velocity:!0,velocityOverLifetime:!1,limitVelocityOverLifetime:!1,inheritVelocity:!1,color:!0,size:!1,rotation:!1,lifetimeByEmitterSpeed:!1,forceOverLifetime:!1,colorBySpeed:!1,sizeBySpeed:!1,rotationBySpeed:!1,externalForces:!1,noise:!1,collision:!1,triggers:!1,subEmitters:!1,textureSheetAnimation:!1,lights:!1,trails:!1,customData:!1},spawn:{rate:0,rateValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rateOverDistance:0,rateOverDistanceValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},bursts:[{time:0,count:24,cycles:1,interval:0,probability:1}],shape:`box`,radius:0,radiusValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},box:[0,0,0],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`local`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:{mode:`constant`,value:.6,min:.6,max:.6,curve:[{x:0,y:.6},{x:1,y:.6}],curveB:[{x:0,y:.6},{x:1,y:.6}]},color:{mode:`constant`,color:[1,.5,.1,1],colorB:[1,.5,.1,1],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},gradientB:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},alpha:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},intensity:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},size:{mode:`constant`,value:.05,min:.05,max:.05,curve:[{x:0,y:.05},{x:1,y:.05}],curveB:[{x:0,y:.05},{x:1,y:.05}]},size3D:{x:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},y:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},z:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},startSizeSeparateAxes:!1,rotation:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},rotation3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},angularVelocity3D:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},velocity:{mode:`vector`,min:[-.9,-.9,.7],max:[.9,.9,1.3],speed:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}}},forces:{gravity:0,gravityValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},drag:0,dragValue:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!1,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.05,sizeEnd:.05,sizeValue:{mode:`constant`,value:.05,min:.05,max:.05,curve:[{x:0,y:.05},{x:1,y:.05}],curveB:[{x:0,y:.05},{x:1,y:.05}]},separateAxes:!1,sizeStartY:.28,sizeEndY:.28,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.28,sizeValue:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},separateAxes:!1,sizeValueY:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},sizeValueZ:{mode:`constant`,value:.28,min:.28,max:.28,curve:[{x:0,y:.28},{x:1,y:.28}],curveB:[{x:0,y:.28},{x:1,y:.28}]},thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[1,.5,.1,1],end:[1,.5,.1,0],gradient:{mode:`blend`,colorStops:[{position:0,color:[1,.5,.1]},{position:1,color:[1,.5,.1]}],alphaStops:[{position:0,alpha:1},{position:.7,alpha:1},{position:1,alpha:0}]}},advanced:{velocityOverLifetime:{space:`local`,linear:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbital:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},orbitalOffset:{x:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},y:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},z:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},radial:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},speedModifier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},limitVelocityOverLifetime:{separateAxes:!1,speed:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},x:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},y:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},z:{mode:`curve`,value:16,min:16,max:16,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:16},{x:1,y:16}],multiplier:16},dampen:.5,drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]}},colorBySpeed:{speedRange:{min:0,max:16},gradient:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,.65,.2]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:{mode:`curve`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},drag:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},vortexStrength:0},noise:{mode:`sine`,strength:{mode:`constant`,value:.06,min:.06,max:.06,curve:[{x:0,y:.06},{x:1,y:.06}],curveB:[{x:0,y:.06},{x:1,y:.06}]},frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},collision:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0},death:{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:{mode:`curve`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},radius:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:{mode:`constant`,value:.5,min:.5,max:.5,curve:[{x:0,y:.5},{x:1,y:.5}],curveB:[{x:0,y:.5},{x:1,y:.5}]},length:{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},width:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},widthOverTrail:{mode:`constant`,value:1,min:1,max:1,curve:[{x:0,y:1},{x:1,y:1}],curveB:[{x:0,y:1},{x:1,y:1}]},color:null,colorOverLifetime:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},colorOverTrail:{mode:`blend`,colorStops:[{position:0,color:[1,1,1]},{position:1,color:[1,1,1]}],alphaStops:[{position:0,alpha:1},{position:1,alpha:1}]},inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:[{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]},{mode:`constant`,value:0,min:0,max:0,curve:[{x:0,y:0},{x:1,y:0}],curveB:[{x:0,y:0},{x:1,y:0}]}]}}}],assets:[],support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]}},a=1e3,o=1001,s=1002,c=1003,l=1004,u=1005,d=1006,f=1007,p=1008,m=1009,h=1010,g=1011,_=1012,v=1013,y=1014,b=1015,x=1016,S=1017,C=1018,w=1020,T=35902,E=35899,D=1021,O=1022,k=1023,A=1026,ee=1027,te=1028,j=1029,M=1030,ne=1031,re=1033,ie=33776,ae=33777,oe=33778,se=33779,ce=35840,le=35841,ue=35842,N=35843,de=36196,fe=37492,pe=37496,me=37488,he=37489,ge=37490,_e=37491,ve=37808,ye=37809,be=37810,xe=37811,Se=37812,Ce=37813,we=37814,Te=37815,Ee=37816,De=37817,Oe=37818,ke=37819,Ae=37820,je=37821,Me=36492,Ne=36494,Pe=36495,P=36283,Fe=36284,Ie=36285,Le=36286,F=2300,Re=2301,I=2302,L=2303,ze=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=35048,Xe=2e3;function Ze(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $e(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function et(){let e=$e(`canvas`);return e.style.display=`block`,e}var tt={};function nt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function rt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in tt||(tt[t]=!0,R(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},B=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(B[e&255]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+`-`+B[t&255]+B[t>>8&255]+`-`+B[t>>16&15|64]+B[t>>24&255]+`-`+B[n&63|128]+B[n>>8&255]+`-`+B[n>>16&255]+B[n>>24&255]+B[r&255]+B[r>>8&255]+B[r>>16&255]+B[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ht=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _t.copy(this).projectOnVector(e),this.sub(_t)}reflect(e){return this.sub(_t.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_t=new H,vt=new gt,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(yt.makeScale(e,t)),this}rotate(e){return it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(yt.makeRotation(-e)),this}translate(e,t){return it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yt=new U,bt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function St(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Tt(e.r),e.g=Tt(e.g),e.b=Tt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var Ct=St();function wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Tt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Et,Dt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Et===void 0&&(Et=$e(`canvas`)),Et.width=e.width,Et.height=e.height;let t=Et.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Et}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=$e(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wt(t[e]/255)*255):t[e]=wt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ot=0,kt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(At(r[t].image)):e.push(At(r[t]))}else e=At(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function At(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Dt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var jt=0,Mt=new H,Nt=class e extends st{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=o,i=o,a=d,s=p,c=k,l=m,u=e.DEFAULT_ANISOTROPY,f=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jt++}),this.uuid=ut(),this.name=``,this.source=new kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mt).x}get height(){return this.source.getSize(Mt).y}get depth(){return this.source.getSize(Mt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case a:e.x-=Math.floor(e.x);break;case o:e.x=e.x<0?0:1;break;case s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case a:e.y-=Math.floor(e.y);break;case o:e.y=e.y<0?0:1;break;case s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=300,Nt.DEFAULT_ANISOTROPY=1;var Pt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ft=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:d,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r=new Nt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:d,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new kt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},It=class extends Ft{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lt=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Rt=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bt.setFromMatrixColumn(e,0).length(),i=1/Bt.setFromMatrixColumn(e,1).length(),a=1/Bt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ht,e,Ut)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wt.crossVectors(n,Kt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wt.crossVectors(n,Kt)),Wt.normalize(),Gt.crossVectors(Kt,Wt),r[0]=Wt.x,r[4]=Gt.x,r[8]=Kt.x,r[1]=Wt.y,r[5]=Gt.y,r[9]=Kt.y,r[2]=Wt.z,r[6]=Gt.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],M=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*te+c*re,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*te+f*re,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*te+g*re,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Bt.set(r[0],r[1],r[2]).length(),o=Bt.set(r[4],r[5],r[6]).length(),s=Bt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Vt.copy(this);let c=1/a,l=1/o,u=1/s;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Xe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Xe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bt=new H,Vt=new zt,Ht=new H(0,0,0),Ut=new H(1,1,1),Wt=new H,Gt=new H,Kt=new H,qt=new zt,Jt=new gt,Yt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jt.setFromEuler(this),this.setFromQuaternion(Jt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER=`XYZ`;var Xt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Zt=0,Qt=new H,$t=new gt,en=new zt,tn=new H,nn=new H,rn=new H,an=new gt,on=new H(1,0,0),sn=new H(0,1,0),cn=new H(0,0,1),ln={type:`added`},un={type:`removed`},dn={type:`childadded`,child:null},fn={type:`childremoved`,child:null},pn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Yt,r=new gt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new U}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.multiply($t),this}rotateOnWorldAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.premultiply($t),this}rotateX(e){return this.rotateOnAxis(on,e)}rotateY(e){return this.rotateOnAxis(sn,e)}rotateZ(e){return this.rotateOnAxis(cn,e)}translateOnAxis(e,t){return Qt.copy(e).applyQuaternion(this.quaternion),this.position.add(Qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(on,e)}translateY(e){return this.translateOnAxis(sn,e)}translateZ(e){return this.translateOnAxis(cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tn.copy(e):tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(nn,tn,this.up):en.lookAt(tn,nn,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),$t.setFromRotationMatrix(en),this.quaternion.premultiply($t.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(un),fn.child=e,this.dispatchEvent(fn),fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,e,rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,an,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};pn.DEFAULT_UP=new H(0,1,0),pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},hn={type:`move`},gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},yn={h:0,s:0,l:0};function bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=dt(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=bn(i,r,e+1/3),this.g=bn(i,r,e),this.b=bn(i,r,e-1/3)}return Ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=_n[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}copyLinearToSRGB(e){return this.r=Tt(e.r),this.g=Tt(e.g),this.b=Tt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ct.workingToColorSpace(xn.copy(this),e),Math.round(V(xn.r*255,0,255))*65536+Math.round(V(xn.g*255,0,255))*256+Math.round(V(xn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(xn.copy(this),t);let n=xn.r,r=xn.g,i=xn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ue){Ct.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,r=xn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(yn);let n=ft(vn.h,yn.h,t),r=ft(vn.s,yn.s,t),i=ft(vn.l,yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new W;W.NAMES=_n;var Sn=class extends pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new H,wn=new H,Tn=new H,En=new H,Dn=new H,On=new H,kn=new H,An=new H,jn=new H,Mn=new H,Nn=new Pt,Pn=new Pt,Fn=new Pt,In=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Cn.subVectors(e,t),r.cross(Cn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Cn.subVectors(r,t),wn.subVectors(n,t),Tn.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(wn),s=Cn.dot(Tn),c=wn.dot(wn),l=wn.dot(Tn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)!==null&&En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,En)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,En.x),s.addScaledVector(a,En.y),s.addScaledVector(o,En.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Nn.setScalar(0),Pn.setScalar(0),Fn.setScalar(0),Nn.fromBufferAttribute(e,t),Pn.fromBufferAttribute(e,n),Fn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nn,i.x),a.addScaledVector(Pn,i.y),a.addScaledVector(Fn,i.z),a}static isFrontFacing(e,t,n,r){return Cn.subVectors(n,t),wn.subVectors(e,t),Cn.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Cn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Dn.subVectors(r,n),On.subVectors(i,n),An.subVectors(e,n);let s=Dn.dot(An),c=On.dot(An);if(s<=0&&c<=0)return t.copy(n);jn.subVectors(e,r);let l=Dn.dot(jn),u=On.dot(jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Dn,a);Mn.subVectors(e,i);let f=Dn.dot(Mn),p=On.dot(Mn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(On,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Dn,a).addScaledVector(On,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,zn):zn.fromBufferAttribute(r,t),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Bn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Bn.copy(e.boundingBox)),Bn.applyMatrix4(e.matrixWorld),this.union(Bn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qn),Jn.subVectors(this.max,qn),Vn.subVectors(e.a,qn),Hn.subVectors(e.b,qn),Un.subVectors(e.c,qn),Wn.subVectors(Hn,Vn),Gn.subVectors(Un,Hn),Kn.subVectors(Vn,Un);let t=[0,-Wn.z,Wn.y,0,-Gn.z,Gn.y,0,-Kn.z,Kn.y,Wn.z,0,-Wn.x,Gn.z,0,-Gn.x,Kn.z,0,-Kn.x,-Wn.y,Wn.x,0,-Gn.y,Gn.x,0,-Kn.y,Kn.x,0];return!Zn(t,Vn,Hn,Un,Jn)||(t=[1,0,0,0,1,0,0,0,1],!Zn(t,Vn,Hn,Un,Jn))?!1:(Yn.crossVectors(Wn,Gn),t=[Yn.x,Yn.y,Yn.z],Zn(t,Vn,Hn,Un,Jn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rn=[new H,new H,new H,new H,new H,new H,new H,new H],zn=new H,Bn=new Ln,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H;function Zn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Xn.fromArray(e,a);let o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),s=t.dot(Xn),c=n.dot(Xn),l=r.dot(Xn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Qn=new H,$n=new ht,er=0,tr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:er++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=b,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},nr=class extends tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},rr=class extends tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ir=class extends tr{constructor(e,t,n){super(new Float32Array(e),t,n)}},ar=new Ln,or=new H,sr=new H,cr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(sr)),this.expandByPoint(or.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lr=0,ur=new zt,dr=new pn,fr=new H,pr=new Ln,mr=new Ln,hr=new H,gr=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ze(e)?rr:nr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(hr),hr.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(hr)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(pr.min,mr.min),pr.expandByPoint(hr),hr.addVectors(pr.max,mr.max),pr.expandByPoint(hr)):(pr.expandByPoint(mr.min),pr.expandByPoint(mr.max))}pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)hr.fromBufferAttribute(a,t),o&&(fr.fromBufferAttribute(e,t),hr.add(fr)),r=Math.max(r,n.distanceToSquared(hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new tr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new ht,f=new ht,p=new ht,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new tr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hr.fromBufferAttribute(e,t),hr.normalize(),e.setXYZ(t,hr.x,hr.y,hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new tr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},_r=0,vr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new ht().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},yr=new H,br=new H,xr=new H,Sr=new H,Cr=new H,wr=new H,Tr=new H,Er=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){br.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(br);let i=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Sr.dot(this.direction),s=-Sr.dot(xr),c=Sr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(br).addScaledVector(xr,d),f}intersectSphere(e,t){yr.subVectors(e.center,this.origin);let n=yr.dot(this.direction),r=yr.dot(yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,n,r,i){Cr.subVectors(t,e),wr.subVectors(n,e),Tr.crossVectors(Cr,wr);let a=this.direction.dot(Tr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sr.subVectors(this.origin,e);let s=o*this.direction.dot(wr.crossVectors(Sr,wr));if(s<0)return null;let c=o*this.direction.dot(Cr.cross(Sr));if(c<0||s+c>a)return null;let l=-o*Sr.dot(Tr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dr=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Or=new zt,kr=new Er,Ar=new cr,jr=new H,Mr=new H,Nr=new H,Pr=new H,Fr=new H,Ir=new H,Lr=new H,Rr=new H,zr=class extends pn{constructor(e=new gr,t=new Dr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ir.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Fr.fromBufferAttribute(s,e),a?Ir.addScaledVector(Fr,r):Ir.addScaledVector(Fr.sub(t),r))}t.add(Ir)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),kr.copy(e.ray).recast(e.near),!(Ar.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Ar,jr)===null||kr.origin.distanceToSquared(jr)>(e.far-e.near)**2))&&(Or.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Or),(n.boundingBox===null||kr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Vr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Vr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Vr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Vr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Br(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Rr.copy(s),Rr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Rr);return l<n.near||l>n.far?null:{distance:l,point:Rr.clone(),object:e}}function Vr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Mr),e.getVertexPosition(c,Nr),e.getVertexPosition(l,Pr);let u=Br(e,t,n,r,Mr,Nr,Pr,Lr);if(u){let e=new H;In.getBarycoord(Lr,Mr,Nr,Pr,e),i&&(u.uv=In.getInterpolatedAttribute(i,s,c,l,e,new ht)),a&&(u.uv1=In.getInterpolatedAttribute(a,s,c,l,e,new ht)),o&&(u.normal=In.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};In.getNormal(Mr,Nr,Pr,t.normal),u.face=t,u.barycoord=e}return u}var Hr=class extends Nt{constructor(e=null,t=1,n=1,r,i,a,o,s,l=c,u=c,d,f){super(null,a,o,s,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ur=class extends tr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wr=new zt,Gr=new zt,Kr=[],qr=new Ln,Jr=new zt,Yr=new zr,Xr=new cr,Zr=class extends zr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Jr)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),qr.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(qr)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Xr.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Wr),Gr.multiplyMatrices(n,Wr),Yr.matrixWorld=Gr,Yr.raycast(e,Kr);for(let e=0,n=Kr.length;e<n;e++){let n=Kr[e];n.instanceId=i,n.object=this,t.push(n)}Kr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(r*this.count),r,this.count,te,b));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qr=new H,$r=new H,ei=new U,ti=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qr.subVectors(n,t).cross($r.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Qr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ei.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new cr,ri=new ht(.5,.5),ii=new H,ai=class{constructor(e=new ti,t=new ti,n=new ti,r=new ti,i=new ti,a=new ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476+ri.distanceTo(e.center),ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ii.x=r.normal.x>0?e.max.x:e.min.x,ii.y=r.normal.y>0?e.max.y:e.min.y,ii.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ii)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oi=class extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},si=new H,ci=new H,li=new zt,ui=new Er,di=new cr,fi=new H,pi=new H,mi=class extends pn{constructor(e=new gr,t=new oi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)si.fromBufferAttribute(t,e-1),ci.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=si.distanceTo(ci);e.setAttribute(`lineDistance`,new ir(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(r),di.radius+=i,e.ray.intersectsSphere(di)===!1)return;li.copy(r).invert(),ui.copy(e.ray).applyMatrix4(li);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=hi(this,e,ui,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=hi(this,e,ui,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=hi(this,e,ui,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=hi(this,e,ui,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(si.fromBufferAttribute(s,i),ci.fromBufferAttribute(s,a),n.distanceSqToSegment(si,ci,fi,pi)>r)return;fi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(fi);if(!(c<t.near||c>t.far))return{distance:c,point:pi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var gi=new H,_i=new H,vi=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)gi.fromBufferAttribute(t,e),_i.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+gi.distanceTo(_i);e.setAttribute(`lineDistance`,new ir(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},yi=class extends Nt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends Nt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xi=class extends Nt{constructor(e,t,n=y,r,i,a,o=c,s=c,l,u=A,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,s,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Si=class extends xi{constructor(e,t=y,n=301,r,i,a=c,o=c,s,l=A){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,s,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ci=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wi=class e extends gr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ir(c,3)),this.setAttribute(`normal`,new ir(l,3)),this.setAttribute(`uv`,new ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ti=class e extends gr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ir(u,3)),this.setAttribute(`normal`,new ir(d,3)),this.setAttribute(`uv`,new ir(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new ht,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class e extends gr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ir(p,3)),this.setAttribute(`normal`,new ir(m,3)),this.setAttribute(`uv`,new ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Di(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ki(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ki(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Oi(e){let t={};for(let n=0;n<e.length;n++){let r=Di(e[n]);for(let e in r)t[e]=r[e]}return t}function ki(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ai(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ji(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ct.workingColorSpace}var Mi={clone:Di,merge:Oi},Ni=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ni,this.fragmentShader=Pi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ai(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new ht().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ii=class extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Li=class extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ri=class extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zi=class extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Vi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Hi=class extends Vi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ui=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Wi=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gi=class extends Vi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ki=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case F:t=this.InterpolantFactoryMethodDiscrete;break;case Re:t=this.InterpolantFactoryMethodLinear;break;case I:t=this.InterpolantFactoryMethodSmooth;break;case L:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return F;case this.InterpolantFactoryMethodLinear:return Re;case this.InterpolantFactoryMethodSmooth:return I;case this.InterpolantFactoryMethodBezier:return L}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===I,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ki.prototype.ValueTypeName=``,Ki.prototype.TimeBufferType=Float32Array,Ki.prototype.ValueBufferType=Float32Array,Ki.prototype.DefaultInterpolation=Re;var qi=class extends Ki{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName=`bool`,qi.prototype.ValueBufferType=Array,qi.prototype.DefaultInterpolation=F,qi.prototype.InterpolantFactoryMethodLinear=void 0,qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};Ji.prototype.ValueTypeName=`color`;var Yi=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};Yi.prototype.ValueTypeName=`number`;var Xi=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)gt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Zi=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Xi(this.times,this.values,this.getValueSize(),e)}};Zi.prototype.ValueTypeName=`quaternion`,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Ki{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName=`string`,Qi.prototype.ValueBufferType=Array,Qi.prototype.DefaultInterpolation=F,Qi.prototype.InterpolantFactoryMethodLinear=void 0,Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};$i.prototype.ValueTypeName=`vector`;var ea={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ta(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ta(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ta(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var na=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ra=class{constructor(e){this.manager=e===void 0?na:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ra.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ia=new WeakMap,aa=class extends ra{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ia.get(a);e===void 0&&(e=[],ia.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=$e(`img`);function s(){l(),t&&t(this);let n=ia.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ia.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ea.remove(`image:${e}`);let n=ia.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ia.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ea.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},oa=class extends ra{constructor(e){super(e)}load(e,t,n,r){let i=new Nt,a=new aa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},sa=new H,ca=new gt,la=new H,ua=class extends pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Xe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ca,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ca,la.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sa,ca,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ca,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},da=new H,fa=new ht,pa=new ht,ma=class extends ua{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(da.x,da.y).multiplyScalar(-e/da.z),da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(da.x,da.y).multiplyScalar(-e/da.z)}getViewSize(e,t){return this.getViewBounds(e,fa,pa),t.subVectors(pa,fa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ha=class extends ua{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=-90,_a=1,va=class extends pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ma(ga,_a,e,t);r.layers=this.layers,this.add(r);let i=new ma(ga,_a,e,t);i.layers=this.layers,this.add(i);let a=new ma(ga,_a,e,t);a.layers=this.layers,this.add(a);let o=new ma(ga,_a,e,t);o.layers=this.layers,this.add(o);let s=new ma(ga,_a,e,t);s.layers=this.layers,this.add(s);let c=new ma(ga,_a,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ya=class extends ma{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ba=`\\[\\]\\.:\\/`,xa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Sa=`[^\\[\\]\\.:\\/]`,Ca=`[^`+ba.replace(`\\.`,``)+`]`,wa=`((?:WC+[\\/:])*)`.replace(`WC`,Sa),Ta=`(WCOD+)?`.replace(`WCOD`,Ca),Ea=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Sa),Da=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Sa),Oa=RegExp(`^`+wa+Ta+Ea+Da+`$`),ka=[`material`,`materials`,`bones`,`map`],Aa=class{constructor(e,t,n){let r=n||ja.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ja=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(xa,``)}static parseTrackName(e){let t=Oa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ka.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ja.Composite=Aa,ja.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ja.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ja.prototype.GetterByBindingType=[ja.prototype._getValue_direct,ja.prototype._getValue_array,ja.prototype._getValue_arrayElement,ja.prototype._getValue_toArray],ja.prototype.SetterByBindingTypeAndVersioning=[[ja.prototype._setValue_direct,ja.prototype._setValue_direct_setNeedsUpdate,ja.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_array,ja.prototype._setValue_array_setNeedsUpdate,ja.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_arrayElement,ja.prototype._setValue_arrayElement_setNeedsUpdate,ja.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_fromArray,ja.prototype._setValue_fromArray_setNeedsUpdate,ja.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};var Ma=class extends vi{constructor(e=10,t=10,n=4473924,r=8947848){n=new W(n),r=new W(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new gr;l.setAttribute(`position`,new ir(s,3)),l.setAttribute(`color`,new ir(c,3));let u=new oi({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};function Na(e,t,n,r){let i=Pa(r);switch(n){case D:return e*t;case te:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case O:return e*t*3/i.components*i.byteLength;case k:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:case N:return Math.max(e,16)*Math.max(t,8)/4;case ce:case ue:return Math.max(e,8)*Math.max(t,8)/2;case de:case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case je:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Me:case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case P:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Pa(e){switch(e){case m:case h:return{byteLength:1,components:1};case _:case g:case x:return{byteLength:2,components:1};case S:case C:return{byteLength:2,components:4};case y:case v:case b:return{byteLength:4,components:1};case T:case E:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Fa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ia(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},La={basic:{uniforms:Oi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:Oi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:Oi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:Oi([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:Oi([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:Oi([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:Oi([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:Oi([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:Oi([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:Oi([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:Oi([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:Oi([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:Oi([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};La.physical={uniforms:Oi([La.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Ra={r:0,b:0,g:0},za=new zt,Ba=new U;Ba.set(-1,0,0,0,1,0,0,0,1);function Va(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new zr(new wi(1,1,1),new Fi({name:`BackgroundCubeMaterial`,uniforms:Di(La.backgroundCube.uniforms),vertexShader:La.backgroundCube.vertexShader,fragmentShader:La.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(za.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ba),l.material.toneMapped=Ct.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new zr(new Ei(2,2),new Fi({name:`BackgroundMaterial`,uniforms:Di(La.background.uniforms),vertexShader:La.background.vertexShader,fragmentShader:La.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ra,ji(e)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ha(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ua(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Wa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ga(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ti,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ka=4,qa=[.125,.215,.35,.446,.526,.582],Ja=20,Ya=256,Xa=new ha,Za=new W,Qa=null,$a=0,eo=0,to=!1,no=new H,ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=no}=i;Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,$a,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:d,minFilter:d,generateMipmaps:!1,type:x,format:k,colorSpace:We,depthBuffer:!1},r=ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=io(r)),this._blurMaterial=co(r,e,t),this._ggxMaterial=so(r,e,t)}return r}_compileMaterial(e){let t=new zr(new gr,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,r,i){let a=new ma(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Za),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zr(new wi,new Dr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Za),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ka?n-d+Ka:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,oo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Xa),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,oo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Xa)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&z(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ja;m>Ja&&R(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ja}`);let h=[],g=0;for(let e=0;e<Ja;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];oo(t,3*v*(r>_-Ka?r-_+Ka:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Xa)}};function io(e){let t=[],n=[],r=[],i=e,a=e-Ka+1+qa.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ka?s=qa[o-e+Ka-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new gr;h.setAttribute(`position`,new tr(f,3)),h.setAttribute(`uv`,new tr(p,2)),h.setAttribute(`faceIndex`,new tr(m,1)),r.push(new zr(h,null)),i>Ka&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ao(e,t,n){let r=new It(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function so(e,t,n){return new Fi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ya,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function co(e,t,n){let r=new Float32Array(Ja),i=new H(0,1,0);return new Fi({name:`SphericalGaussianBlur`,defines:{n:Ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function lo(){return new Fi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function uo(){return new Fi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}var po=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wi(5,5,5),i=new Fi({name:`CubemapFromEquirect`,uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new zr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=d),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function mo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new po(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ro(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ro(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ho(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function go(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?rr:nr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function _o(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function vo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function yo(e,t,n){let r=new WeakMap,i=new Pt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Lt(h,p,m,u);g.type=b,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new ht(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function bo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var xo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function So(e,t,n,r,i,a){let o=new It(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new xi(t,n):void 0}),s=new It(t,n,{type:x,depthBuffer:!1,stencilBuffer:!1}),c=new gr;c.setAttribute(`position`,new ir([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new ir([0,2,0,0,2,0],2));let l=new Ii({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new zr(c,l),d=new ha(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Ct.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=xo[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Co=new Nt,wo=new xi(1,1),To=new Lt,Eo=new Rt,Do=new yi,Oo=[],ko=[],Ao=new Float32Array(16),jo=new Float32Array(9),Mo=new Float32Array(4);function No(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Oo[i];if(a===void 0&&(a=new Float32Array(i),Oo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Po(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Fo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Io(e,t){let n=ko[t];n===void 0&&(n=new Int32Array(t),ko[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Lo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ro(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Po(n,t))return;e.uniform2fv(this.addr,t),Fo(n,t)}}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Po(n,t))return;e.uniform3fv(this.addr,t),Fo(n,t)}}function Bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Po(n,t))return;e.uniform4fv(this.addr,t),Fo(n,t)}}function Vo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Po(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Fo(n,t)}else{if(Po(n,r))return;Mo.set(r),e.uniformMatrix2fv(this.addr,!1,Mo),Fo(n,r)}}function Ho(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Po(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Fo(n,t)}else{if(Po(n,r))return;jo.set(r),e.uniformMatrix3fv(this.addr,!1,jo),Fo(n,r)}}function Uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Po(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Fo(n,t)}else{if(Po(n,r))return;Ao.set(r),e.uniformMatrix4fv(this.addr,!1,Ao),Fo(n,r)}}function Wo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Po(n,t))return;e.uniform2iv(this.addr,t),Fo(n,t)}}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Po(n,t))return;e.uniform3iv(this.addr,t),Fo(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Po(n,t))return;e.uniform4iv(this.addr,t),Fo(n,t)}}function Jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Po(n,t))return;e.uniform2uiv(this.addr,t),Fo(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Po(n,t))return;e.uniform3uiv(this.addr,t),Fo(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Po(n,t))return;e.uniform4uiv(this.addr,t),Fo(n,t)}}function Qo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(wo.compareFunction=n.isReversedDepthBuffer()?518:515,a=wo):a=Co,n.setTexture2D(t||a,i)}function $o(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Eo,i)}function es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Do,i)}function ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||To,i)}function ns(e){switch(e){case 5126:return Lo;case 35664:return Ro;case 35665:return zo;case 35666:return Bo;case 35674:return Vo;case 35675:return Ho;case 35676:return Uo;case 5124:case 35670:return Wo;case 35667:case 35671:return Go;case 35668:case 35672:return Ko;case 35669:case 35673:return qo;case 5125:return Jo;case 36294:return Yo;case 36295:return Xo;case 36296:return Zo;case 35678:case 36198:case 36298:case 36306:case 35682:return Qo;case 35679:case 36299:case 36307:return $o;case 35680:case 36300:case 36308:case 36293:return es;case 36289:case 36303:case 36311:case 36292:return ts}}function rs(e,t){e.uniform1fv(this.addr,t)}function is(e,t){let n=No(t,this.size,2);e.uniform2fv(this.addr,n)}function as(e,t){let n=No(t,this.size,3);e.uniform3fv(this.addr,n)}function os(e,t){let n=No(t,this.size,4);e.uniform4fv(this.addr,n)}function ss(e,t){let n=No(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cs(e,t){let n=No(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ls(e,t){let n=No(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function us(e,t){e.uniform1iv(this.addr,t)}function ds(e,t){e.uniform2iv(this.addr,t)}function fs(e,t){e.uniform3iv(this.addr,t)}function ps(e,t){e.uniform4iv(this.addr,t)}function ms(e,t){e.uniform1uiv(this.addr,t)}function hs(e,t){e.uniform2uiv(this.addr,t)}function gs(e,t){e.uniform3uiv(this.addr,t)}function _s(e,t){e.uniform4uiv(this.addr,t)}function vs(e,t,n){let r=this.cache,i=t.length,a=Io(n,i);Po(r,a)||(e.uniform1iv(this.addr,a),Fo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?wo:Co;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ys(e,t,n){let r=this.cache,i=t.length,a=Io(n,i);Po(r,a)||(e.uniform1iv(this.addr,a),Fo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Eo,a[e])}function bs(e,t,n){let r=this.cache,i=t.length,a=Io(n,i);Po(r,a)||(e.uniform1iv(this.addr,a),Fo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Do,a[e])}function xs(e,t,n){let r=this.cache,i=t.length,a=Io(n,i);Po(r,a)||(e.uniform1iv(this.addr,a),Fo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||To,a[e])}function Ss(e){switch(e){case 5126:return rs;case 35664:return is;case 35665:return as;case 35666:return os;case 35674:return ss;case 35675:return cs;case 35676:return ls;case 5124:case 35670:return us;case 35667:case 35671:return ds;case 35668:case 35672:return fs;case 35669:case 35673:return ps;case 5125:return ms;case 36294:return hs;case 36295:return gs;case 36296:return _s;case 35678:case 36198:case 36298:case 36306:case 35682:return vs;case 35679:case 36299:case 36307:return ys;case 35680:case 36300:case 36308:case 36293:return bs;case 36289:case 36303:case 36311:case 36292:return xs}}var Cs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ns(t.type)}},ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ss(t.type)}},Ts=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Es=/(\w+)(\])?(\[|\.)?/g;function Ds(e,t){e.seq.push(t),e.map[t.id]=t}function Os(e,t,n){let r=e.name,i=r.length;for(Es.lastIndex=0;;){let a=Es.exec(r),o=Es.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ds(n,l===void 0?new Cs(s,e,t):new ws(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ts(s),Ds(n,e)),n=e}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Os(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function As(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var js=37297,Ms=0;function Ns(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ps=new U;function Fs(e){Ct._getMatrix(Ps,Ct.workingColorSpace,e);let t=`mat3( ${Ps.elements.map(e=>e.toFixed(4))} )`;switch(Ct.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Is(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ns(e.getShaderSource(t),r)}return i}function Ls(e,t){let n=Fs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Rs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function zs(e,t){let n=Rs[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Bs=new H;function Vs(){return Ct.getLuminanceCoefficients(Bs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Bs.x.toFixed(4)}, ${Bs.y.toFixed(4)}, ${Bs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Hs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Gs).join(`
`)}function Us(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ws(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Gs(e){return e!==``}function Ks(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Js=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(e){return e.replace(Js,Zs)}var Xs=new Map;function Zs(e,t){let n=G[t];if(n===void 0){let e=Xs.get(t);if(e!==void 0)n=G[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ys(n)}var Qs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(e){return e.replace(Qs,ec)}function ec(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function tc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var nc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function rc(e){return nc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ic={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ac(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ic[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var oc={302:`ENVMAP_MODE_REFRACTION`};function sc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:oc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var cc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function lc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:cc[e.combine]||`ENVMAP_BLENDING_NONE`}function uc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function dc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=rc(n),l=ac(n),u=sc(n),d=lc(n),f=uc(n),p=Hs(n),m=Us(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(g=[tc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Gs).join(`
`),_=[tc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:zs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Ls(`linearToOutputTexel`,n.outputColorSpace),Vs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Gs).join(`
`)),o=Ys(o),o=Ks(o,n),o=qs(o,n),s=Ys(s),s=Ks(s,n),s=qs(s,n),o=$s(o),s=$s(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=As(i,i.VERTEX_SHADER,y),S=As(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Is(i,x,`vertex`),n=Is(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ks(i,h),T=Ws(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,js)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ms++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var fc=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=fc++,this.code=e,this.usedTimes=0}};function hc(e){return e===1030||e===37490||e===36285}function gc(e,t,n,r,i,a){let o=new Xt,s=new pc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=La[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=fe&&!!i.anisotropyMap,ye=pe&&!!i.clearcoatMap,be=pe&&!!i.clearcoatNormalMap,xe=pe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,P=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&hc(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ve,clearcoat:pe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Ct.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:P&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(P&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=La[t];n=Mi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new dc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function _c(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function vc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function bc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||vc),r.length>1&&r.sort(t||yc),i.length>1&&i.sort(t||yc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function xc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new bc,e.set(t,[i])):n>=r.length?(i=new bc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Sc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Cc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var wc=0;function Tc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ec(e){let t=new Sc,n=Cc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new zt,o=new zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Tc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=wc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Dc(e){let t=new Ec(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Oc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Dc(e),t.set(n,[a])):r>=i.length?(a=new Dc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var kc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ac=`uniform sampler2D shadow_pass;
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
}`,jc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Mc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Nc=new zt,Pc=new H,Fc=new H;function Ic(e,t,n){let r=new ai,i=new ht,a=new ht,o=new Pt,s=new Ri,l=new zi,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:kc,fragmentShader:Ac}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new gr;g.setAttribute(`position`,new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new zr(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){R(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new It(i.x,i.y,{format:M,type:x,minFilter:d,magFilter:d,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new xi(i.x,i.y,b),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=A,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c}else u.isPointLight?(p.map=new po(i.x),p.map.depthTexture=new Si(i.x,y)):(p.map=new It(i.x,i.y),p.map.depthTexture=new xi(i.x,i.y,y)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=A,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=d,p.map.depthTexture.magFilter=d):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c);p.camera.updateProjectionMatrix()}let v=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Pc.setFromMatrixPosition(u.matrixWorld),e.position.copy(Pc),Fc.copy(e.position),Fc.add(jc[t]),e.up.copy(Mc[t]),e.lookAt(Fc),e.updateMatrixWorld(),n.makeTranslation(-Pc.x,-Pc.y,-Pc.z),Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Nc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(u);r=p.getFrustum(),T(n,s,p.camera,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,s),p.needsUpdate=!1}S=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new It(i.x,i.y,{format:M,type:x})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Lc(e,t){function n(){let t=!1,n=new Pt,r=null,i=new Pt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=M>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Pt().fromArray(ae),ce=new Pt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(j&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:ze}}function Rc(e,t,n,r,i,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new ht,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):$e(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:Ct.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[a]:e.REPEAT,[o]:e.CLAMP_TO_EDGE,[s]:e.MIRRORED_REPEAT},he={[c]:e.NEAREST,[l]:e.NEAREST_MIPMAP_NEAREST,[u]:e.NEAREST_MIPMAP_LINEAR,[d]:e.LINEAR,[f]:e.LINEAR_MIPMAP_NEAREST,[p]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ue(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,a,o){let s=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(s=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(s=e.TEXTURE_3D);let c=ve(t,a),l=a.source;n.bindTexture(s,t.__webglTexture,e.TEXTURE0+o);let u=r.get(l);if(l.version!==u.__version||c===!0){if(n.activeTexture(e.TEXTURE0+o),!(typeof ImageBitmap<`u`&&a.image instanceof ImageBitmap)){let t=Ct.getPrimaries(Ct.workingColorSpace),r=a.colorSpace===``?null:Ct.getPrimaries(a.colorSpace),i=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let t=T(a.image,!1,i.maxTextureSize);t=Fe(a,t);let r=m.convert(a.format,a.colorSpace),d=m.convert(a.type),f=k(a.internalFormat,r,d,a.normalized,a.colorSpace,a.isVideoTexture);_e(s,a);let p,h=a.mipmaps,g=a.isVideoTexture!==!0,_=u.__version===void 0||c===!0,v=l.dataReady,y=te(a,t);if(a.isDepthTexture)f=A(a.format===ee,a.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,f,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,null));else if(a.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data);a.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height),v&&be(a,t,r,d)):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,t.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,h[0].width,h[0].height,t.depth);for(let i=0,o=h.length;i<o;i++)if(p=h[i],a.format!==1023){if(r!==null){if(g){if(v){if(a.layerUpdates.size>0){let t=Na(p.width,p.height,a.format,a.type);for(let o of a.layerUpdates){let a=p.data.subarray(o*t/p.data.BYTES_PER_ELEMENT,(o+1)*t/p.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,o,p.width,p.height,1,r,a)}a.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,p.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,p.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,d,p.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,r,d,p.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],a.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,p.data):n.compressedTexImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,p.data)}}else if(a.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,t.width,t.height,t.depth),v){if(a.layerUpdates.size>0){let i=Na(t.width,t.height,a.format,a.type);for(let o of a.layerUpdates){let a=t.data.subarray(o*i/t.data.BYTES_PER_ELEMENT,(o+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,d,a)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,f,t.width,t.height,t.depth,0,r,d,t.data)}else if(a.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,f,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)):n.texImage3D(e.TEXTURE_3D,0,f,t.width,t.height,t.depth,0,r,d,t.data);else if(a.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,f,i,a,0,r,d,null),i>>=1,a>>=1}}}else if(a.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(a),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,d,p):n.texImage2D(e.TEXTURE_2D,t,f,r,d,p);a.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,f,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,d,t)}else n.texImage2D(e.TEXTURE_2D,0,f,r,d,t);E(a)&&D(s),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function Se(t,a,o){if(a.image.length!==6)return;let s=ve(t,a),c=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let l=r.get(c);if(c.version!==l.__version||s===!0){n.activeTexture(e.TEXTURE0+o);let t=Ct.getPrimaries(Ct.workingColorSpace),r=a.colorSpace===``?null:Ct.getPrimaries(a.colorSpace),u=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=a.isCompressedTexture||a.image[0].isCompressedTexture,f=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)!d&&!f?p[e]=T(a.image[e],!0,i.maxCubemapSize):p[e]=f?a.image[e].image:a.image[e],p[e]=Fe(a,p[e]);let h=p[0],g=m.convert(a.format,a.colorSpace),_=m.convert(a.type),v=k(a.internalFormat,g,_,a.normalized,a.colorSpace),y=a.isVideoTexture!==!0,b=l.__version===void 0||s===!0,x=c.dataReady,S=te(a,h);_e(e.TEXTURE_CUBE_MAP,a);let C;if(d){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=p[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];a.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=a.mipmaps,y&&b){C.length>0&&S++;let t=Ie(p[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(f){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,p[t].width,p[t].height,g,_,p[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,p[t].width,p[t].height,0,g,_,p[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,p[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,p[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(a)&&D(e.TEXTURE_CUBE_MAP),l.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function Ce(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Ne(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,j)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let c=s.__webglTexture,l=Ne(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,M);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Pe(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),we(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),_e(l,o),Ce(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ae.push(c),je.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ct.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zc(e,t){function n(n,r=``){let i,a=Ct.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Bc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vc=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ci(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fi({vertexShader:Bc,fragmentShader:Vc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zr(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new Hc,_={},v=t.getContextAttributes(),b=null,x=null,S=[],C=[],T=new ht,E=null,D=new ma;D.viewport=new Pt;let O=new ma;O.viewport=new Pt;let te=[D,O],j=new ya,M=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new gn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new gn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new gn,S[e]=t),t.getHandSpace()};function re(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}M=null,ne=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?ee:A,a=v.stencil?w:y);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new It(d.textureWidth,d.textureHeight,{format:k,type:m,depthTexture:new xi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new It(f.framebufferWidth,f.framebufferHeight,{format:k,type:m,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let oe=new H,se=new H;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,ne=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;le(j,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(j,D,O):j.projectionMatrix.copy(D.projectionMatrix),ue(e,j,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return _[e]};let N=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=te[n];o===void 0&&(o=new ma,o.layers.enable(n),o.viewport=new Pt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Ci,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}N&&N(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new Fa;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}},Wc=new zt,Gc=new U;Gc.set(-1,0,0,0,1,0,0,0,1);function Kc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ji(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Wc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Gc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function qc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Jc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yc=null;function Xc(){return Yc===null&&(Yc=new Hr(Jc,16,16,M,x),Yc.name=`DFG_LUT`,Yc.minFilter=d,Yc.magFilter=d,Yc.wrapS=o,Yc.wrapT=o,Yc.generateMipmaps=!1,Yc.needsUpdate=!0),Yc}var Zc=class{constructor(e={}){let{canvas:t=et(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=m}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let g=f,v=new Set([re,ne,j]),b=new Set([m,y,_,w,S,C]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,O=null,k=null,A=[],ee=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=Ue;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Pt,me=new Pt,he=null,ge=new W(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Pt(0,0,ve,ye),we=new Pt(0,0,ve,ye),Te=!1,Ee=new ai,De=!1,Oe=!1,ke=new zt,Ae=new H,je=new Pt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw z(`WebGLRenderer: `+e.message),e}let Ie,Le,F,Re,I,L,ze,Be,Ve,He,We,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,tt,rt,it,ot;function st(){Ie=new ho(P),Ie.init(),rt=new zc(P,Ie),Le=new Wa(P,Ie,e,rt),F=new Lc(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new vo(P),I=new _c,L=new Rc(P,Ie,F,I,Le,rt,Re),ze=new mo(M),Be=new Ia(P),it=new Ha(P,Be),Ve=new go(P,Be,Re,it),He=new bo(P,Ve,Be,it,Re),Qe=new yo(P,Le,L),Je=new Ga(I),We=new gc(M,ze,Ie,Le,it,Je),Ge=new Kc(M,I),Ke=new xc,qe=new Oc(Ie),Ze=new Va(M,ze,F,He,h,s),Ye=new Ic(M,He,Le),ot=new qc(P,Re,Le,F),$e=new Ua(P,Ie,Re),tt=new _o(P,Ie,Re),Re.programs=We.programs,M.capabilities=Le,M.extensions=Ie,M.properties=I,M.renderLists=Ke,M.shadowMap=Ye,M.state=F,M.info=Re}st(),g!==1009&&(te=new So(g,t.width,t.height,o,r,i));let B=new Uc(M,P);this.xr=B,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){B.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=v.has(t)}if(e){let e=N.texture.type,t=b.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),I.dispose(),ze.dispose(),He.dispose(),it.dispose(),ot.dispose(),We.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,gt),B.removeEventListener(`sessionend`,_t),vt.stop()};function ct(e){e.preventDefault(),nt(`WebGLRenderer: Context Lost.`),ie=!0}function lt(){nt(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;st(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function ut(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function V(e){let t=e.target;t.removeEventListener(`dispose`,V),dt(t)}function dt(e){ft(e),I.remove(e)}function ft(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Be.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=qe.get(n),k.init(t),ee.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}}),k=ee.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){I.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Fa;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,B.setAnimationLoop(e),e===null?vt.stop():vt.start()},B.addEventListener(`sessionstart`,gt),B.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=B.enabled===!0&&B.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(t),t=B.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),k=qe.get(e,ee.length),k.init(t),k.state.textureUnits=L.getTextureUnits(),ee.push(k),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,Xe,t.reversedDepth),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),O=Ke.get(e,A.length),O.init(),A.push(O),B.enabled===!0&&B.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&U(e,t,-1/0,M.sortObjects)}U(e,t,0,M.sortObjects),O.finish(),M.sortObjects===!0&&O.sort(xe,Se,t.reversedDepth),Ne=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Ne&&Ze.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Je.beginShadows();let i=k.state.shadowsArray;if(Ye.render(i,e,t),De===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Ne&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(O,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Ne&&Ze.render(e),yt(O,e,t)}N!==null&&ue===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&te.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),it.resetDefaultState(),de=-1,fe=null,ee.pop(),ee.length>0?(k=ee[ee.length-1],L.setTextureUnits(k.state.textureUnits),De===!0&&Je.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,ae!==null&&ae.renderEnd()};function U(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ee.intersectsSprite(e)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let t=He.update(e),i=e.material;i.visible&&O.push(e,t,i,n,je.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ee.intersectsObject(e))){let t=He.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),je.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,je.z,o)}}else i.visible&&O.push(e,t,i,n,je.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)U(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),De===!0&&Je.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new It(1,1,{generateMipmaps:!0,type:e?x:m,minFilter:p,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),De===!0&&Je.setGlobalState(M.clippingPlanes,r),xt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),M.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,V),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=We.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Et(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ks.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Me),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ct.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=k.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=Dt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,L),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,L),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Xc()),C){if(T.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,be,ye,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ks.upload(P,Tt(v),E,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ks.upload(P,Tt(v),E,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(c)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Le.textureTypeReadable(l)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Le.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,d),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0);let f=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,f);let p=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await at(P,p,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,d),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.deleteBuffer(d),P.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Xe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}},Qc=Object.defineProperty,$c=(e,t,n)=>t in e?Qc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t,n)=>$c(e,typeof t==`symbol`?t:t+``,n);function el(e,t,n){let r=n(ul(e)?e:t,t.value,t.editorMin,t.editorMax,t.curve);return ul(e)?r:{...r,mode:t.mode,value:t.value,min:t.min,max:t.max}}function tl(e,t,n){return{mode:`constant`,value:e,min:e,max:e,curve:[{x:0,y:e},{x:1,y:e}],curveB:[{x:0,y:e},{x:1,y:e}],editorMin:t,editorMax:n}}function nl(e,t,n,r){return{mode:`curve`,value:e,min:Math.min(e,t),max:Math.max(e,t),curve:[{x:0,y:e},{x:1,y:t}],curveB:[{x:0,y:e},{x:1,y:t}],editorMin:n,editorMax:r}}function rl(e,t){return{mode:`blend`,colorStops:[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[t[0],t[1],t[2]]}],alphaStops:[{position:0,alpha:e[3]},{position:1,alpha:t[3]}]}}function il(e,t,n,r){let i=ul(e)?e:{},a=ll(J(i.min,t.min),n,r),o=ll(J(i.max,t.max),n,r);return{min:Math.min(a,o),max:Math.max(a,o)}}function al(e,t,n,r,i=!1){if(!Array.isArray(e))return[...t];let a=ll(J(e[0],t[0]),n,r),o=ll(J(e[1],t[1]),n,r);return i?[Math.round(a),Math.round(o)]:[a,o]}function ol(e,t,n,r){return Array.isArray(e)?[ll(J(e[0],t[0]),n,r),ll(J(e[1],t[1]),n,r),ll(J(e[2],t[2]),n,r)]:[...t]}function sl(e,t,n,r){return Array.isArray(e)?[ll(J(e[0],t[0]),n,r),ll(J(e[1],t[1]),n,r),ll(J(e[2],t[2]),n,r),ll(J(e[3],t[3]),n,r)]:[...t]}function cl(e,t){return typeof e==`string`?e:t}function J(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function ll(e,t,n){return Math.min(n,Math.max(t,e))}function ul(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var dl=`sprite-master`;function fl(e){if(!ul(e))return null;let t=cl(e.path,``);return t?{type:`texture`,id:cl(e.id,t),path:t}:null}function pl(e){let t=ul(e)?e:{},n=ul(t.paramOverrides)?t.paramOverrides:{},r={};for(let[e,t]of Object.entries(n))if(typeof t==`number`||typeof t==`boolean`)r[e]=t;else if(typeof t==`string`)r[e]=t;else if(Array.isArray(t)&&t.every(e=>typeof e==`number`)){let n=t;r[e]=[n[0]??0,n[1]??0,n[2]??0,n[3]??0]}return{id:cl(t.id,`material-instance`),shaderId:cl(t.shaderId,dl),paramOverrides:r,mainTex:fl(t.mainTex)}}function ml(e){return ul(e)?pl(e):null}function hl(e){let t={id:e.id,shaderId:e.shaderId};if(Object.keys(e.paramOverrides).length>0){let n={};for(let t of Object.keys(e.paramOverrides).sort())n[t]=e.paramOverrides[t];t.paramOverrides=n}return e.mainTex&&(t.mainTex=e.mainTex),t}var gl=[`velocity`,`velocityOverLifetime`,`limitVelocityOverLifetime`,`inheritVelocity`,`color`,`size`,`rotation`,`lifetimeByEmitterSpeed`,`forceOverLifetime`,`colorBySpeed`,`sizeBySpeed`,`rotationBySpeed`,`externalForces`,`noise`,`collision`,`triggers`,`subEmitters`,`textureSheetAnimation`,`lights`,`trails`,`customData`],_l={velocity:`full`,velocityOverLifetime:`full`,limitVelocityOverLifetime:`partial`,inheritVelocity:`partial`,color:`full`,size:`full`,rotation:`full`,lifetimeByEmitterSpeed:`full`,forceOverLifetime:`partial`,colorBySpeed:`partial`,sizeBySpeed:`partial`,rotationBySpeed:`partial`,externalForces:`partial`,noise:`partial`,collision:`partial`,triggers:`partial`,subEmitters:`partial`,textureSheetAnimation:`partial`,lights:`partial`,trails:`partial`,customData:`partial`};gl.filter(e=>_l[e]===`partial`);var vl=new Set([`velocity`,`color`,`size`,`rotation`]);function yl(){return Gl(e=>vl.has(e))}function bl(){return Gl(()=>!1)}function xl(e,t){let n=ul(e)?e:{};return Gl(e=>typeof n[e]==`boolean`?n[e]:t[e])}function Sl(){return{velocityOverLifetime:{space:`local`,linear:{x:tl(0,-32,32),y:tl(0,-32,32),z:tl(0,-32,32)},orbital:{x:tl(0,-32,32),y:tl(0,-32,32),z:tl(0,-32,32)},orbitalOffset:{x:tl(0,-32,32),y:tl(0,-32,32),z:tl(0,-32,32)},radial:tl(0,-32,32),speedModifier:tl(1,0,4)},limitVelocityOverLifetime:{separateAxes:!1,speed:nl(16,16,0,120),x:nl(16,16,0,120),y:nl(16,16,0,120),z:nl(16,16,0,120),dampen:.5,drag:tl(0,0,12),multiplyBySize:!1,space:`local`},inheritVelocity:{mode:`initial`,multiplier:nl(0,0,-4,4)},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:nl(1,1,0,3)},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:tl(1,-10,10)},colorBySpeed:{speedRange:{min:0,max:16},gradient:rl([1,1,1,1],[1,.65,.2,1]),blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:nl(1,1,0,4),blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:nl(0,0,-24,24),blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:tl(1,-4,4),drag:tl(0,0,12),vortexStrength:0},noise:{mode:`sine`,strength:tl(0,0,8),frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:`none`,planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:``,deathEvent:``,normalizedTime:1,oneShot:!0},subEmitters:{birth:Kl(),collision:Kl(),death:Kl()},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:nl(0,0,0,64),cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:tl(0,0,5),radius:tl(1,0,32),additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:`particleHistory`,ratio:1,lifetime:tl(.5,0,8),length:tl(0,0,12),width:tl(1,.01,4),widthOverTrail:tl(1,0,1),color:null,colorOverLifetime:rl([1,1,1,1],[1,1,1,1]),colorOverTrail:rl([1,1,1,1],[1,1,1,1]),inheritColor:!0,textureMode:`stretch`,texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:``,channels:Wl()}}}function Cl(e,t,n){let r=ul(e)?e:{},i=Sl();return{velocityOverLifetime:El(r.velocityOverLifetime,i.velocityOverLifetime,t),limitVelocityOverLifetime:Dl(r.limitVelocityOverLifetime,i.limitVelocityOverLifetime,t),inheritVelocity:Ol(r.inheritVelocity,i.inheritVelocity,t),lifetimeByEmitterSpeed:kl(r.lifetimeByEmitterSpeed,i.lifetimeByEmitterSpeed,t),forceOverLifetime:Al(r.forceOverLifetime,i.forceOverLifetime,t),colorBySpeed:jl(r.colorBySpeed,i.colorBySpeed,n),sizeBySpeed:Ml(r.sizeBySpeed,i.sizeBySpeed,t),rotationBySpeed:Nl(r.rotationBySpeed,i.rotationBySpeed,t),externalForces:Pl(r.externalForces,i.externalForces,t),noise:Fl(r.noise,i.noise,t),collision:Il(r.collision,i.collision),triggers:Ll(r.triggers,i.triggers),subEmitters:Rl(r.subEmitters,i.subEmitters),textureSheetAnimation:Bl(r.textureSheetAnimation,i.textureSheetAnimation,t),lights:Vl(r.lights,i.lights,t),trails:Hl(r.trails,i.trails,t,n),customData:Ul(r.customData,i.customData,t)}}function wl(e,t){return ll((t-e.min)/Math.max(1e-6,e.max-e.min),0,1)}function Tl(e,t,n){let r=ul(e)?e:{};return{x:el(r.x,t.x,n),y:el(r.y,t.y,n),z:el(r.z,t.z,n)}}function El(e,t,n){let r=ul(e)?e:{};return{space:r.space===`world`?`world`:`local`,linear:Tl(r.linear,t.linear,n),orbital:Tl(r.orbital,t.orbital,n),orbitalOffset:Tl(r.orbitalOffset,t.orbitalOffset,n),radial:el(r.radial,t.radial,n),speedModifier:el(r.speedModifier,t.speedModifier,n)}}function Dl(e,t,n){let r=ul(e)?e:{};return{separateAxes:typeof r.separateAxes==`boolean`?r.separateAxes:t.separateAxes,speed:el(r.speed,t.speed,n),x:el(r.x,t.x,n),y:el(r.y,t.y,n),z:el(r.z,t.z,n),dampen:ll(J(r.dampen,t.dampen),0,1),drag:n(r.drag,0,0,12),multiplyBySize:typeof r.multiplyBySize==`boolean`?r.multiplyBySize:t.multiplyBySize,space:r.space===`world`?`world`:`local`}}function Ol(e,t,n){let r=ul(e)?e:{};return{mode:r.mode===`current`?`current`:`initial`,multiplier:el(r.multiplier,t.multiplier,n)}}function kl(e,t,n){let r=ul(e)?e:{};return{speedRange:il(r.speedRange,t.speedRange,0,80),multiplier:el(r.multiplier,t.multiplier,n)}}function Al(e,t,n){let r=ul(e)?e:{};return{force:ol(r.force,t.force,-160,160),randomized:ol(r.randomized,t.randomized,0,160),multiplier:n(r.multiplier,1,-10,10)}}function jl(e,t,n){let r=ul(e)?e:{};return{speedRange:il(r.speedRange,t.speedRange,0,80),gradient:n(r.gradient,[1,1,1,1],[1,.65,.2,1]),blend:ll(J(r.blend,t.blend),0,1)}}function Ml(e,t,n){let r=ul(e)?e:{};return{speedRange:il(r.speedRange,t.speedRange,0,80),multiplier:el(r.multiplier,t.multiplier,n),blend:ll(J(r.blend,t.blend),0,1)}}function Nl(e,t,n){let r=ul(e)?e:{};return{speedRange:il(r.speedRange,t.speedRange,0,80),angularVelocity:el(r.angularVelocity,t.angularVelocity,n),blend:ll(J(r.blend,t.blend),0,1)}}function Pl(e,t,n){let r=ul(e)?e:{};return{wind:ol(r.wind,t.wind,-160,160),gravityMultiplier:n(r.gravityMultiplier,1,-4,4),drag:n(r.drag,0,0,12),vortexStrength:ll(J(r.vortexStrength,t.vortexStrength),-80,80)}}function Fl(e,t,n){let r=ul(e)?e:{};return{mode:r.mode===`curl`?`curl`:`sine`,strength:n(r.strength,0,0,8),frequency:ll(J(r.frequency,t.frequency),0,32),speed:ll(J(r.speed,t.speed),-16,16),scroll:ol(r.scroll,t.scroll,-16,16),octaves:Math.round(ll(J(r.octaves,t.octaves),1,6)),damping:ll(J(r.damping,t.damping),0,1)}}function Il(e,t){let n=ul(e)?e:{};return{mode:n.mode===`plane`?`plane`:`none`,planeY:ll(J(n.planeY,t.planeY),-100,100),radius:ll(J(n.radius,t.radius),0,16),bounce:ll(J(n.bounce,t.bounce),0,1),dampen:ll(J(n.dampen,t.dampen),0,1),killBelow:ll(J(n.killBelow,t.killBelow),0,200)}}function Ll(e,t){let n=ul(e)?e:{};return{birthEvent:cl(n.birthEvent,t.birthEvent),deathEvent:cl(n.deathEvent,t.deathEvent),normalizedTime:ll(J(n.normalizedTime,t.normalizedTime),0,1),oneShot:typeof n.oneShot==`boolean`?n.oneShot:t.oneShot}}function Rl(e,t){let n=ul(e)?e:{};return{birth:zl(n.birth,t.birth),collision:zl(n.collision,t.collision),death:zl(n.death,t.death)}}function zl(e,t){let n=ul(e)?e:{};return{effectFile:cl(n.effectFile,t.effectFile),probability:ll(J(n.probability,t.probability),0,1),inheritColor:typeof n.inheritColor==`boolean`?n.inheritColor:t.inheritColor,inheritSize:typeof n.inheritSize==`boolean`?n.inheritSize:t.inheritSize}}function Bl(e,t,n){let r=ul(e)?e:{};return{tiles:al(r.tiles,t.tiles,1,16,!0),startFrame:Math.round(ll(J(r.startFrame,t.startFrame),0,255)),endFrame:Math.round(ll(J(r.endFrame,t.endFrame),0,255)),frameOverTime:el(r.frameOverTime,t.frameOverTime,n),cycles:ll(J(r.cycles,t.cycles),0,32),randomStartFrame:typeof r.randomStartFrame==`boolean`?r.randomStartFrame:t.randomStartFrame}}function Vl(e,t,n){let r=ul(e)?e:{};return{color:ol(r.color,t.color,0,1),intensity:n(r.intensity,0,0,5),radius:n(r.radius,1,0,32),additive:typeof r.additive==`boolean`?r.additive:t.additive}}function Hl(e,t,n,r){let i=ul(e)?e:{},a=i.color===null||i.color===void 0?null:r(i.color,[1,1,1,1],[1,1,1,0]);return{material:ml(i.material),depthTest:typeof i.depthTest!=`boolean`||i.depthTest,depthWrite:typeof i.depthWrite==`boolean`&&i.depthWrite,mode:i.mode===`ribbon`?`ribbon`:`particleHistory`,ratio:ll(J(i.ratio,t.ratio),0,1),lifetime:n(i.lifetime,.5,0,8),length:n(i.length,0,0,12),width:n(i.width,1,.01,4),widthOverTrail:n(i.widthOverTrail,1,0,1),color:a,colorOverLifetime:r(i.colorOverLifetime,[1,1,1,1],[1,1,1,1]),colorOverTrail:r(i.colorOverTrail??a,[1,1,1,1],[1,1,1,1]),inheritColor:typeof i.inheritColor==`boolean`?i.inheritColor:t.inheritColor,textureMode:i.textureMode===`tile`?`tile`:`stretch`,texture:typeof i.texture==`string`&&i.texture.trim()?i.texture.trim():null,minVertexDistance:ll(J(i.minVertexDistance,t.minVertexDistance),0,1),worldSpace:typeof i.worldSpace==`boolean`?i.worldSpace:t.worldSpace}}function Ul(e,t,n){let r=ul(e)?e:{},i=Array.isArray(r.channels)?r.channels:null,a=i?null:sl(r.vector1,[0,0,0,0],-1e5,1e5),o=t.channels??Wl(),s=[0,1,2,3].map(e=>{let t=i?o[e]:tl(a?.[e]??0,-1,1);return el(i?.[e],t,n)});return{label:cl(r.label,t.label),channels:s}}function Wl(){return[tl(0,-1,1),tl(0,-1,1),tl(0,-1,1),tl(0,-1,1)]}function Gl(e){return gl.reduce((t,n)=>(t[n]=e(n),t),{})}function Kl(){return{effectFile:``,probability:1,inheritColor:!0,inheritSize:!0}}var ql=1e5,Jl=1/3,Yl=1e3,Xl=1,Zl=new WeakMap;function Ql(e){let t=Zl.get(e);if(t)return t;let n=mu(e)?e:pu(e,[{x:0,y:0},{x:1,y:0}]),r=vu(n),i=[];for(let e=0;e<n.length-1;e++){let t=n[e],a=n[e+1],o=Math.max(1e-6,a.x-t.x),s=au(t),c=iu(a),l=t.y+ru(t,r[e])*o*s,u=a.y-nu(a,r[e+1])*o*c;i.push({start:t.x,end:a.x,dx:o,x1:t.x+o*s,x2:a.x-o*c,y0:t.y,y1:l,y2:u,y3:a.y,linearX:s===Jl&&c===Jl,c1:3*(l-t.y),c2:3*(t.y-2*l+u),c3:-t.y+3*l-3*u+a.y})}let a={firstY:n[0].y,lastY:n[n.length-1].y,segments:i};return Object.isFrozen(e)&&e.every(e=>Object.isFrozen(e))&&Zl.set(e,a),a}function $l(e,t){let n=Su((t-e.start)/e.dx,0,1),r=e.linearX?n:ou(e.start,e.x1,e.x2,e.end,t,n);return su(e.y0,e.y1,e.y2,e.y3,r)}function eu(e,t){if(t<=0)return e.firstY;if(t>=1)return e.lastY;for(let n of e.segments)if(t<=n.end)return $l(n,t);return e.lastY}function tu(e,t){return eu(Ql(e),Su(t,0,1))}function nu(e,t){return e.slopeIn??e.slope??t}function ru(e,t){return e.slopeOut??e.slope??t}function iu(e){return e.weightIn??Jl}function au(e){return e.weightOut??Jl}function ou(e,t,n,r,i,a){let o=Su(a,0,1);for(let a=0;a<6;a++){let a=su(e,t,n,r,o)-i,s=cu(e,t,n,r,o);if(Math.abs(a)<1e-6)return o;if(Math.abs(s)<1e-6)break;let c=o-a/s;if(c<0||c>1)break;o=c}let s=0,c=1,l=1/0,u=0,d=su(e,t,n,r,u)-i;for(let a=1;a<=24;a++){let o=a/24,f=su(e,t,n,r,o)-i,p=Math.abs(f);if(p<l&&(l=p,s=u,c=o),d===0||f===0||d<0&&f>0||d>0&&f<0){s=u,c=o;break}u=o,d=f}let f=s,p=c;for(let a=0;a<24;a++){let a=(f+p)*.5,o=su(e,t,n,r,a)-i,s=su(e,t,n,r,f)-i;if(Math.abs(o)<1e-6)return a;s<=0&&o>=0||s>=0&&o<=0?p=a:f=a}return(f+p)*.5}function su(e,t,n,r,i){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*r}function cu(e,t,n,r,i){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(r-n)}function lu(e,t,n=ql){return{...e,y:xu(e.y*t,-n,n),...typeof e.slope==`number`?{slope:xu(e.slope*t,-Yl,Yl)}:{},...typeof e.slopeIn==`number`?{slopeIn:xu(e.slopeIn*t,-Yl,Yl)}:{},...typeof e.slopeOut==`number`?{slopeOut:xu(e.slopeOut*t,-Yl,Yl)}:{}}}function uu(e,t=ql){if(!Cu(e))return;let n={x:Su(bu(e.x,0),0,1),y:xu(bu(e.y,0),-t,t)},r=du(e.slope),i=du(e.slopeIn),a=du(e.slopeOut),o=fu(e.weightIn),s=fu(e.weightOut);return r!==void 0&&(n.slope=r),i!==void 0&&(n.slopeIn=i),a!==void 0&&(n.slopeOut=a),o!==void 0&&(n.weightIn=o),s!==void 0&&(n.weightOut=s),n}function du(e){return typeof e==`number`&&Number.isFinite(e)?xu(e,-Yl,Yl):void 0}function fu(e){return typeof e==`number`&&Number.isFinite(e)?xu(e,0,Xl):void 0}function pu(e,t,n=ql){let r=(Array.isArray(e)&&e.length>0?e:t).map(e=>uu(e,n)).filter(e=>!!e).sort((e,t)=>e.x-t.x).slice(0,8);if(r.length===0)return[{x:0,y:0},{x:1,y:0}];if(r.length===1){let e=r[0];return[{...e,x:0},{...e,x:1}]}return r[0].x=0,r[r.length-1].x=1,r}function mu(e){if(e.length<2)return!1;let t=e[0],n=e[e.length-1];if(t.x!==0||n.x!==1)return!1;let r=-1/0;for(let t of e){if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!hu(t.slope)||!hu(t.slopeIn)||!hu(t.slopeOut)||!gu(t.weightIn)||!gu(t.weightOut)||t.x<r||t.x<0||t.x>1)return!1;r=t.x}return!0}function hu(e){return e===void 0||typeof e==`number`&&Number.isFinite(e)}function gu(e){return e===void 0||typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=Xl}var _u=new WeakMap;function vu(e){let t=_u.get(e);return t||(t=yu(e),_u.set(e,t)),t}function yu(e){let t=e.length;if(t===0)return[];if(t===1){let t=e[0];return[typeof t.slope==`number`&&Number.isFinite(t.slope)?t.slope:0]}let n=e.map(e=>typeof e.slope==`number`&&Number.isFinite(e.slope)),r=Array(t-1);for(let n=0;n<t-1;n++){let t=e[n],i=e[n+1];r[n]=(i.y-t.y)/Math.max(1e-6,i.x-t.x)}let i=Array(t);for(let a=0;a<t;a++)if(n[a])i[a]=e[a].slope;else if(a===0)i[a]=r[0];else if(a===t-1)i[a]=r[t-2];else{let e=r[a-1],t=r[a];i[a]=e*t<=0?0:(e+t)*.5}for(let e=0;e<t-1;e++){let t=r[e];if(t===0){n[e]||(i[e]=0),n[e+1]||(i[e+1]=0);continue}let a=i[e]/t,o=i[e+1]/t,s=a*a+o*o;if(s>9){let r=3/Math.sqrt(s);n[e]||(i[e]=r*a*t),n[e+1]||(i[e+1]=r*o*t)}}return i}function bu(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function xu(e,t,n){return Su(Number.isFinite(e)?e:t,t,n)}function Su(e,t,n){return Math.min(n,Math.max(t,e))}function Cu(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function wu(e,t){let n=Ql(e),r=Math.max(1,Math.ceil(t*64)),i=t/r,a=(n.firstY+eu(n,t))*.5,o=1;for(let e of n.segments){if(o>=r)break;let n=Math.min(r-1,Math.floor(e.end/i));if(n>=o&&t*n/r>e.end&&n--,n+1<r&&t*(n+1)/r<=e.end&&n++,!(n<o)){if(e.linearX&&e.end-e.start>=1e-6)a+=Tu(e,t*o/r,i,n-o+1);else for(let i=o;i<=n;i++)a+=$l(e,t*i/r);o=n+1}}return a*i}function Tu(e,t,n,r){let i=(t-e.start)/e.dx,a=n/e.dx,o=e.y0+i*(e.c1+i*(e.c2+i*e.c3)),s=a*(e.c1+i*(2*e.c2+3*i*e.c3)),c=a*a*(e.c2+3*i*e.c3),l=a*a*a*e.c3,u=r-1,d=u*r/2,f=u*r*(2*u+1)/6;return r*o+s*d+c*f+l*d*d}function Eu(e,t,n){if(e.mode===`random`)return e.min+(e.max-e.min)*n;let r=e.multiplier??1;if(e.mode===`curve`)return tu(e.curve,t)*r;if(e.mode===`randomCurve`){let i=tu(e.curve,t);return(i+(tu(e.curveB,t)-i)*n)*r}return e.value}function Y(e,t,n,r){return Eu(e,ku(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1),ku(n,0,1))}function Du(e,t,n,r){let i=ku(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1),a=ku(n,0,1);if(i<=0)return 0;if(e.mode===`random`)return(e.min+(e.max-e.min)*a)*i;if(e.mode===`constant`)return e.value*i;let o=wu(e.curve,i);return(o+((e.mode===`randomCurve`?wu(e.curveB,i):o)-o)*a)*(e.multiplier??1)}function Ou(e,t,n,r){let i=ku(e.xAxis===`loopAge`&&r!==void 0?r:t,0,1);return i<=0?Y(e,t,n,r):Du(e,t,n,r)/i}function ku(e,t,n){return Math.min(n,Math.max(t,e))}var Au=new WeakSet;function ju(e){return typeof e==`object`&&!!e&&Au.has(e)}var Mu=class{constructor(e,t){q(this,`clone`,t),q(this,`value`),this.value=this.acquire(e)}replace(e){this.value=this.acquire(e)}mutable(){return ju(this.value)&&(this.value=this.clone(this.value)),this.value}acquire(e){if(ju(e))return e;let t=this.clone(e);return Nu(t),t}};function Nu(e){for(let[t,n]of Object.entries(e))if(n&&typeof n==`object`){if((t===`curve`||t===`curveB`)&&Array.isArray(n)){for(let e of n)Object.freeze(e);Object.freeze(n),Ql(n)}else Nu(n)}}var Pu=2**50,Fu=Math.PI*2,Iu=256,Lu=1e-6,Ru=1,zu=2,Bu=4096,Vu=512,Hu=4,Uu=30,Wu=2,Gu=1.15,Ku=1e5,qu=yl(),Ju=bl(),Yu={id:`emitter-1`,name:`Emitter`,enabled:!0,mode:`billboard`,maxParticles:256,duration:1.2,loop:!0,timeline:{start:0,groupId:null,locked:!1},modules:{...qu},spawn:{rate:80,rateValue:X(80,0,3e3),rateOverDistance:0,rateOverDistanceValue:X(0,0,1e3),bursts:[{time:0,count:18,cycles:1,interval:.1,probability:1}],shape:`circle`,radius:.35,radiusValue:X(.35,0,24),box:[.6,.2,.6],angle:25,radiusThickness:1,arc:360,arcMode:`random`,arcSpread:0,arcSpeedValue:X(0,-360,360),length:5,emitFrom:`base`,meshAsset:null,meshEmitFrom:`surface`,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],simulationSpace:`world`,alignToDirection:!1,randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:Xu(.45,.85,.02,30),color:$u(),size:X(1,0,24),size3D:{x:X(1,0,24),y:X(1,0,24),z:X(1,0,24)},startSizeSeparateAxes:!1,rotation:Xu(0,Fu,-Fu,Fu),rotation3D:{x:X(0,-Fu,Fu),y:X(0,-Fu,Fu),z:Xu(0,Fu,-Fu,Fu)},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:Xu(-9,9,-24,24),angularVelocity3D:{x:X(0,-24,24),y:X(0,-24,24),z:Xu(-9,9,-24,24)},velocity:{mode:`shapeDirection`,min:[-.7,2.2,-.7],max:[.7,3.4,.7],speed:X(0,0,80)}},forces:{gravity:4.8,gravityValue:X(4.8,-80,80),drag:.05,dragValue:X(.05,0,12)},render:{blend:`alpha`,shading:`unlit`,depthTest:!0,depthWrite:!1,depthInk:!0,orderInLayer:0,sortMode:`distanceFarFirst`,alignment:`faceCamera`,alignAxis:`screen`,facing:`cameraPlane`,alignmentVector:[0,1,0],opacitySource:`textureAlpha`,opacityInvert:!1,texture:null,material:null},billboard:{shape:`circle`,sizeStart:.28,sizeEnd:.05,sizeValue:Zu(.28,.05,.001,24),separateAxes:!1,sizeStartY:.28,sizeEndY:.05,sizeValueY:Zu(.28,.05,.001,24),softness:.4,pivot:[0,0]},mesh:{renderMode:`pixiShard`,template:`triangleShard`,asset:null,sizeStart:.28,sizeEnd:.08,sizeValue:Zu(.28,.08,.001,24),separateAxes:!1,sizeValueY:Zu(.28,.08,.001,24),sizeValueZ:Zu(.28,.08,.001,24),thickness:.5,pivot:[0,0,0],flipWinding:!1,recomputeNormals:!1},color:{start:[.75,1,.48,.95],end:[.35,.75,.28,0],gradient:Qu([.75,1,.48,.95],[.35,.75,.28,0])},advanced:Sl()};({...Yu}),{...Ju},X(24,0,3e3),X(0,0,1e3),X(0,0,24),X(0,-360,360),X(1,.02,30),$u(),X(1,0,24),X(1,0,24),X(1,0,24),X(1,0,24),X(0,-Fu,Fu),X(0,-Fu,Fu),X(0,-Fu,Fu),X(0,-Fu,Fu),X(0,-24,24),X(0,-24,24),X(0,-24,24),X(0,-24,24),X(0,0,80),X(0,-80,80),X(0,0,12),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),X(.28,.001,24),Qu([1,1,1,1],[1,1,1,1]),Sl();function X(e,t,n){return Bd({mode:`constant`,value:e},e,t,n)}function Xu(e,t,n,r){return Bd({mode:`random`,min:e,max:t,value:(e+t)*.5},(e+t)*.5,n,r)}function Zu(e,t,n,r){return Bd({mode:`curve`,value:e,min:Math.min(e,t),max:Math.max(e,t),curve:[{x:0,y:e},{x:1,y:t}]},e,n,r)}function Qu(e,t){return Wd({mode:`blend`,colorStops:[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[t[0],t[1],t[2]]}],alphaStops:[{position:0,alpha:e[3]},{position:1,alpha:t[3]}]},e,t)}function $u(){let e=[1,1,1,1];return{mode:`constant`,color:[...e],colorB:[...e],gradient:Qu([...e],[...e]),gradientB:Qu([...e],[...e]),alpha:X(1,0,1),intensity:X(1,0,16)}}function ed(e,t,n,r,i,a){let o=Q(t,0,1),s=Q(Y(e.alpha,n,t,r),0,1);return e.mode===`random`?(i[0]=e.color[0]+(e.colorB[0]-e.color[0])*o,i[1]=e.color[1]+(e.colorB[1]-e.color[1])*o,i[2]=e.color[2]+(e.colorB[2]-e.color[2])*o,i[3]=s,i):e.mode===`gradient`?(Kd(e.gradient,o,i),i[3]=Zd(e.gradient,o)*s,i):e.mode===`randomGradient`?(Kd(e.gradient,o,i),i[3]=Zd(e.gradient,o),Kd(e.gradientB,o,a),a[3]=Zd(e.gradientB,o),i[0]+=(a[0]-i[0])*o,i[1]+=(a[1]-i[1])*o,i[2]+=(a[2]-i[2])*o,i[3]=(i[3]+(a[3]-i[3])*o)*s,i):(i[0]=e.color[0],i[1]=e.color[1],i[2]=e.color[2],i[3]=s,i)}function td(e){let t=mf(e)?e:{},n=(Array.isArray(t.emitters)?t.emitters:[]).map((e,t)=>ud(e,t)),r=ad(t.timeline,n);return id(t.timeline,n,r),{app:`vfx-editor`,kind:`particle-effect`,version:1,targetProfile:nd(t.targetProfile),id:uf(t.id,`particle-effect`),name:df(t.name,`Particle Effect`),timeline:r,emitters:n}}function nd(e){return e===`three-world-3d`||e===`portable`?e:`pixi-ui-2d`}function rd(e){return td(e)}function id(e,t,n){if(n.groups.length>0||t.length<=3||mf(e)&&Array.isArray(e.groups)||t.some(e=>e.timeline.groupId))return;let r=`track-group`;n.groups.push({id:r,name:`Track Group`,collapsed:!1,hidden:!1,locked:!1});for(let e=3;e<t.length;e++){let n=t[e];n&&(n.timeline={...n.timeline,groupId:r})}}function ad(e,t){let n=mf(e)?e:{},r=Q(Z(n.frameRate,Uu),1,240),i=od(t),a=Q(Z(n.duration,i),.05,Ku);return{frameRate:r,duration:a,loop:sd(n.loop,a),groups:cd(n.groups)}}function od(e){let t=0;for(let n of e)t=Math.max(t,n.timeline.start+Math.max(.05,n.duration));return Q(Math.max(t,Wu)*Gu,.05,Ku)}function sd(e,t){let n=mf(e)?e:{},r=t*.12,i=t*.62,a=Q(Z(n.start,r),0,t),o=Q(Z(n.end,i),0,t);return o<=a&&(o=Math.min(t,a+.05),o<=a&&(a=Math.max(0,o-.05))),{enabled:n.enabled===!0,start:a,end:o}}function cd(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){let i=e[r];if(!mf(i))continue;let a=`track-group-${r+1}`,o=uf(i.id,a),s=2;for(;n.has(o);)o=`${uf(i.id,a)}-${s}`,s++;n.add(o),t.push({id:o,name:df(i.name,`Track Group ${r+1}`),collapsed:i.collapsed===!0,hidden:i.hidden===!0,locked:i.locked===!0})}return t}function ld(e){let t=mf(e)?e:{},n=typeof t.groupId==`string`&&t.groupId.trim()?uf(t.groupId,`track-group`):null;return{start:Q(Z(t.start,0),0,Ku),groupId:n,locked:t.locked===!0}}function ud(e,t){let n=mf(e)?e:{},r=Yu,i=dd(n.spawn);return{id:uf(n.id,`emitter-${t+1}`),name:df(n.name,`Emitter ${t+1}`),enabled:n.enabled!==!1,mode:n.mode===`mesh`?`mesh`:`billboard`,maxParticles:Math.round(Q(Z(n.maxParticles,r.maxParticles),1,4096)),duration:Q(Z(n.duration,r.duration),.05,Ku),loop:n.loop!==!1,timeline:ld(n.timeline),modules:xl(n.modules,qu),spawn:i,initializeParticle:gd(n.initializeParticle,r.initializeParticle),forces:pd(n.forces),render:xd(n.render,i.alignToDirection),billboard:Pd(n.billboard),mesh:Fd(n.mesh),color:zd(n.color),advanced:Cl(n.advanced,Bd,Wd)}}function dd(e){let t=mf(e)?e:{},n=Q(Z(t.rate,Yu.spawn.rate),0,3e3),r=Q(Z(t.rateOverDistance,Yu.spawn.rateOverDistance),0,1e3),i=Q(Z(t.radius,Yu.spawn.radius),0,24),a=t.shape===`point`||t.shape===`box`||t.shape===`cone`||t.shape===`sphere`||t.shape===`hemisphere`||t.shape===`mesh`?t.shape:t.shape===`circle`?`circle`:Yu.spawn.shape;return{rate:n,rateValue:Bd(t.rateValue,n,0,3e3),rateOverDistance:r,rateOverDistanceValue:Bd(t.rateOverDistanceValue,r,0,1e3),bursts:fd(t,Yu.spawn.bursts),shape:a,radius:i,radiusValue:Bd(t.radiusValue,i,0,24),box:cf(t.box,Yu.spawn.box,0,48),angle:Q(Z(t.angle,Yu.spawn.angle),0,90),radiusThickness:Q(Z(t.radiusThickness,Yu.spawn.radiusThickness),0,1),arc:Q(Z(t.arc,Yu.spawn.arc),0,360),arcMode:ef(t.arcMode),arcSpread:Q(Z(t.arcSpread,Yu.spawn.arcSpread),0,1),arcSpeedValue:Bd(t.arcSpeedValue,0,-360,360),length:Q(Z(t.length,Yu.spawn.length),0,48),emitFrom:t.emitFrom===`volume`?`volume`:`base`,meshAsset:Ld(t.meshAsset),meshEmitFrom:t.meshEmitFrom===`vertices`?`vertices`:`surface`,position:cf(t.position,Yu.spawn.position,-100,100),rotation:cf(t.rotation,Yu.spawn.rotation,-360,360),scale:cf(t.scale,Yu.spawn.scale,0,100),simulationSpace:t.simulationSpace===`local`?`local`:`world`,alignToDirection:t.alignToDirection===!0,randomDirectionAmount:Q(Z(t.randomDirectionAmount,Yu.spawn.randomDirectionAmount),0,1),sphericalDirectionAmount:Q(Z(t.sphericalDirectionAmount,Yu.spawn.sphericalDirectionAmount),0,1),randomPositionAmount:Q(Z(t.randomPositionAmount,Yu.spawn.randomPositionAmount),0,24)}}function fd(e,t=[]){return(Array.isArray(e.bursts)?e.bursts:Array.isArray(e.burstSchedules)&&e.burstSchedules.length>0?e.burstSchedules:Array.isArray(e.burstSchedule)?e.burstSchedule:t).map(e=>{if(!mf(e))return;let t=Math.round(Q(Z(e.count,0),0,4096)),n=Math.round(Q(Z(e.cycles,Z(e.cycleCount,1)),1,256));if(!(t<=0||n<=0))return{time:Q(Z(e.time,0),0,60),count:t,cycles:n,interval:Q(Z(e.interval,Z(e.repeatInterval,0)),0,60),probability:Q(Z(e.probability,1),0,1)}}).filter(e=>!!e).slice(0,16).sort((e,t)=>e.time-t.time||e.interval-t.interval)}function pd(e){let t=mf(e)?e:{},n=Q(Z(t.gravity,Yu.forces.gravity),-80,80),r=Q(Z(t.drag,Yu.forces.drag),0,12);return{gravity:n,gravityValue:Bd(t.gravityValue,n,-80,80),drag:r,dragValue:Bd(t.dragValue,r,0,12)}}var md=new Set([`constant`,`random`,`gradient`,`randomGradient`]);function hd(e,t){let n=mf(e)?e:{},r=typeof n.mode==`string`&&md.has(n.mode)?n.mode:t.mode,i=lf(n.color,t.color,0,16),a=lf(n.colorB,t.colorB,0,16),o=t.alpha??X((t.mode,t.color[3]),0,1),s=r===`random`?{mode:`random`,value:i[3],min:i[3],max:a[3],editorMin:0,editorMax:1,curve:[{x:0,y:i[3]},{x:1,y:i[3]}],curveB:[{x:0,y:a[3]},{x:1,y:a[3]}]}:{mode:`constant`,value:r===`constant`?i[3]:1,min:r===`constant`?i[3]:1,max:r===`constant`?i[3]:1,editorMin:0,editorMax:1,curve:[{x:0,y:r===`constant`?i[3]:1},{x:1,y:r===`constant`?i[3]:1}],curveB:[{x:0,y:r===`constant`?i[3]:1},{x:1,y:r===`constant`?i[3]:1}]};return{mode:r,color:i,colorB:a,gradient:Wd(n.gradient,[i[0],i[1],i[2],i[3]],[a[0],a[1],a[2],a[3]]),gradientB:Wd(n.gradientB,[a[0],a[1],a[2],a[3]],[i[0],i[1],i[2],i[3]]),alpha:Bd(n.alpha??s,Ud(o),0,1),intensity:Bd(n.intensity,Ud(t.intensity),0,16,void 0,Pu)}}function gd(e,t){let n=mf(e)?e:{},r=Bd(n.size,Ud(t.size),0,24),i=Bd(n.rotation,Ud(t.rotation),-Fu,Fu),a=Bd(n.angularVelocity,Ud(t.angularVelocity),-24,24);return{lifetime:Bd(n.lifetime,Ud(t.lifetime),.02,30),color:hd(n.color,t.color),size:r,size3D:vd(n.size3D,_d(r,r,r),0,24),startSizeSeparateAxes:typeof n.startSizeSeparateAxes==`boolean`?n.startSizeSeparateAxes:t.startSizeSeparateAxes??!1,rotation:i,rotation3D:vd(n.rotation3D,_d(X(0,-Fu,Fu),X(0,-Fu,Fu),i),-Fu,Fu),startRotationSeparateAxes:typeof n.startRotationSeparateAxes==`boolean`?n.startRotationSeparateAxes:t.startRotationSeparateAxes??!1,angularVelocitySeparateAxes:typeof n.angularVelocitySeparateAxes==`boolean`?n.angularVelocitySeparateAxes:t.angularVelocitySeparateAxes??!1,angularVelocity:a,angularVelocity3D:vd(n.angularVelocity3D,_d(X(0,-24,24),X(0,-24,24),a),-24,24),velocity:bd(n.velocity,t.velocity)}}function _d(e,t,n){return{x:e,y:t,z:n}}function vd(e,t,n,r){let i=mf(e)?e:{};return{x:yd(i.x,t.x,n,r),y:yd(i.y,t.y,n,r),z:yd(i.z,t.z,n,r)}}function yd(e,t,n,r){return Bd(e===void 0?t:e,Ud(t),n,r,t.curve)}function bd(e,t){let n=mf(e)?e:{};return{mode:n.mode===`vector`||n.mode===`shapeDirection`?n.mode:t.mode,min:cf(n.min,t.min,-1e5,1e5),max:cf(n.max,t.max,-1e5,1e5),speed:Bd(n.speed,Ud(t.speed),0,80)}}function xd(e,t=!1){let n=mf(e)?e:{},r=Ed(n.alignment,t),i=typeof n.alignAxis==`string`&&Dd.has(n.alignAxis),a=Od(n.alignAxis,r),o=Ad(n.facing,r,i);return{blend:typeof n.blend==`string`&&Cd.has(n.blend)?n.blend:`alpha`,shading:n.shading===`lit`?`lit`:`unlit`,depthTest:n.depthTest!==!1,depthWrite:n.depthWrite===!0,depthInk:n.depthInk!==!1,orderInLayer:Math.round(Q(Z(n.orderInLayer,0),-1024,1024)),sortMode:Td(n.sortMode),alignment:jd(a),alignAxis:a,facing:o,alignmentVector:cf(n.alignmentVector,[0,1,0],-1,1),opacitySource:Nd(n.opacitySource),opacityInvert:n.opacityInvert===!0,texture:typeof n.texture==`string`&&n.texture.trim()?n.texture.trim():null,material:ml(n.material)}}function Sd(e,t=1){return e.depthWrite===!0&&e.blend!==`additive`&&e.blend!==`premultiplied`&&t>=.999}var Cd=new Set([`alpha`,`additive`,`premultiplied`]),wd=new Set([`none`,`distanceFarFirst`,`distanceNearFirst`,`oldestFirst`,`youngestFirst`]);function Td(e){return typeof e==`string`&&wd.has(e)?e:`distanceFarFirst`}function Ed(e,t){return e===`faceCamera`||e===`spawnDirection`||e===`velocity`||e===`vector`?e:t?`spawnDirection`:`faceCamera`}var Dd=new Set([`screen`,`spawnDirection`,`velocity`,`vector`]);function Od(e,t){return typeof e==`string`&&Dd.has(e)?e:t===`faceCamera`?`screen`:t}var kd=new Set([`cameraPlane`,`cameraPosition`,`off`]);function Ad(e,t,n){return typeof e==`string`&&kd.has(e)?e:n||t===`faceCamera`?`cameraPlane`:`off`}function jd(e){return e===`screen`?`faceCamera`:e}var Md=new Set([`textureAlpha`,`red`,`green`,`blue`,`luminance`,`inverseLuminance`,`constant`]);function Nd(e){return typeof e==`string`&&Md.has(e)?e:`textureAlpha`}function Pd(e){let t=mf(e)?e:{},n=Q(Z(t.sizeStart,Yu.billboard.sizeStart),.001,24),r=Q(Z(t.sizeEnd,Yu.billboard.sizeEnd),.001,24),i=Q(Z(t.sizeStartY,n),.001,24),a=Q(Z(t.sizeEndY,r),.001,24),o=Bd(t.sizeValue,n,.001,24,[{x:0,y:n},{x:1,y:r}]);return{shape:t.shape===`square`?`square`:`circle`,sizeStart:n,sizeEnd:r,sizeValue:o,separateAxes:t.separateAxes===!0,sizeStartY:i,sizeEndY:a,sizeValueY:Bd(t.sizeValueY===void 0?o:t.sizeValueY,i,.001,24,[{x:0,y:i},{x:1,y:a}]),softness:Q(Z(t.softness,Yu.billboard.softness),0,1),pivot:sf(t.pivot,Yu.billboard.pivot,-10,10)}}function Fd(e){let t=mf(e)?e:{},n=Ld(t.asset),r=t.renderMode===`meshAsset`?`meshAsset`:`pixiShard`,i=t.template===`grassShard`||t.template===`quadShard`||t.template===`triangleShard`?t.template:Yu.mesh.template,a=Q(Z(t.sizeStart,Yu.mesh.sizeStart),.001,24),o=Q(Z(t.sizeEnd,Yu.mesh.sizeEnd),.001,24),s=Id(t,a,o);return{renderMode:r,template:i,asset:n,sizeStart:a,sizeEnd:o,sizeValue:s,separateAxes:t.separateAxes===!0,sizeValueY:Bd(t.sizeValueY===void 0?s:t.sizeValueY,a,.001,24,[{x:0,y:a},{x:1,y:o}]),sizeValueZ:Bd(t.sizeValueZ===void 0?s:t.sizeValueZ,a,.001,24,[{x:0,y:a},{x:1,y:o}]),thickness:Q(Z(t.thickness,Yu.mesh.thickness),.02,4),pivot:cf(t.pivot,Yu.mesh.pivot,-10,10),flipWinding:t.flipWinding===!0,recomputeNormals:t.recomputeNormals===!0}}function Id(e,t,n){return Bd(e.sizeValue,t,.001,24,[{x:0,y:t},{x:1,y:n}])}function Ld(e){if(!mf(e))return null;let t=df(e.path,``);if(!t)return null;let n=Rd(e.bounds);return{type:`mesh`,id:df(e.id,t),path:t,...typeof e.name==`string`&&e.name.trim()?{name:e.name.trim()}:{},...n?{bounds:n}:{}}}function Rd(e){return mf(e)?{min:cf(e.min,[0,0,0],-1e5,1e5),max:cf(e.max,[0,0,0],-1e5,1e5)}:null}function zd(e){let t=mf(e)?e:{},n=lf(t.start,Yu.color.start,0,1),r=lf(t.end,Yu.color.end,0,1),i=Wd(t.gradient,n,r),a=Gd(i);return{start:a.start,end:a.end,gradient:i}}function Bd(e,t,n,r,i,a=ql){let o=mf(e)?e:{},s=Math.min(n,r),c=Math.max(n,r),l=s<0?0:s,u=Number.isFinite(a)&&a>0?a:ql,d=ff(Z(o.editorMin,l),-u,u),f=ff(Z(o.editorMax,c),-u,u),p=Math.max(d+1e-6,f),m=Qd(o.mode),h=ff(Z(e,Z(o.value,t)),-u,u),g=ff(Z(o.min,h),-u,u),_=ff(Z(o.max,h),-u,u),v=pu(o.curve,i??[{x:0,y:h},{x:1,y:h}],u),y=pu(o.curveB,i??[{x:0,y:g},{x:1,y:_}],u),b=ff(Z(o.multiplier,1),-u,u),x=o.multiplier===1,S=(m===`curve`||m===`randomCurve`)&&!x&&f!==1?tf(v,y,m,b,d,u):{curve:v,curveB:y,multiplier:b,editorMin:d,editorMax:p},C=$d(o.xAxis);return{mode:m,value:h,min:Math.min(g,_),max:Math.max(g,_),curve:S.curve,curveB:S.curveB,editorMin:S.editorMin,editorMax:S.editorMax,...S.multiplier===1?{}:{multiplier:S.multiplier},...C===`lifetime`?{}:{xAxis:C}}}function Vd(e,t=64){let n=of(t),r=new Float32Array(n),i=new Float32Array(n);for(let t=0;t<n;t++){let a=n<=1?0:t/(n-1);r[t]=tu(e.curve,a),i[t]=tu(e.curveB,a)}return{mode:e.mode,value:e.value,min:e.min,max:e.max,multiplier:e.multiplier??1,samples:n,curve:r,curveB:i}}function Hd(e,t,n){let r=Q(n,0,1);if(e.mode===`random`)return e.min+(e.max-e.min)*r;if(e.mode===`curve`)return af(e.curve,t)*e.multiplier;if(e.mode===`randomCurve`){let n=af(e.curve,t);return(n+(af(e.curveB,t)-n)*r)*e.multiplier}return e.value}function Ud(e){if(e.mode===`random`)return(e.min+e.max)*.5;let t=e.multiplier??1;return e.mode===`curve`?tu(e.curve,0)*t:e.mode===`randomCurve`?(tu(e.curve,0)*.5+tu(e.curveB,0)*.5)*t:e.value}function Wd(e,t,n){let r=mf(e)?e:{};return{mode:r.mode===`fixed`?`fixed`:`blend`,colorStops:nf(r.colorStops,t,n),alphaStops:rf(r.alphaStops,t,n)}}function Gd(e){return{start:[...Kd(e,0),Zd(e,0)],end:[...Kd(e,1),Zd(e,1)]}}function Kd(e,t,n=[1,1,1]){let r=e.colorStops;if(r.length===0)return n[0]=1,n[1]=1,n[2]=1,n;let i=Q(t,0,1),a=r[0],o=r[0];for(let e=1;e<r.length;e++){let t=r[e];t.position<a.position&&(a=t),t.position>o.position&&(o=t)}let s=a,c=o;for(let e=0;e<r.length;e++){let t=r[e];t.position<=i&&t.position>=s.position&&(s=t),t.position>=i&&t.position<=c.position&&(c=t)}let l,u,d;if(e.mode===`fixed`||i<=a.position){let t=e.mode===`fixed`?s:a;l=t.color[0],u=t.color[1],d=t.color[2]}else if(i>=o.position)l=o.color[0],u=o.color[1],d=o.color[2];else{let e=(i-s.position)/Math.max(1e-6,c.position-s.position);l=Yd(s.color[0],c.color[0],e),u=Yd(s.color[1],c.color[1],e),d=Yd(s.color[2],c.color[2],e)}return n[0]=l,n[1]=u,n[2]=d,n}function qd(e){let t=Q(e,0,1);return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function Jd(e){let t=Q(e,0,1);return t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055}function Yd(e,t,n){let r=Q(n,0,1);return Jd(qd(e)+(qd(t)-qd(e))*r)}function Xd(e,t,n){let r=Q(n,0,1);return[Yd(e[0],t[0],r),Yd(e[1],t[1],r),Yd(e[2],t[2],r),e[3]+(t[3]-e[3])*r]}function Zd(e,t){let n=e.alphaStops;if(n.length===0)return 1;let r=Q(t,0,1),i=n[0],a=n[0];for(let e=1;e<n.length;e++){let t=n[e];t.position<i.position&&(i=t),t.position>a.position&&(a=t)}let o=i,s=a;for(let e=0;e<n.length;e++){let t=n[e];t.position<=r&&t.position>=o.position&&(o=t),t.position>=r&&t.position<=s.position&&(s=t)}if(e.mode===`fixed`||r<=i.position)return e.mode===`fixed`?o.alpha:i.alpha;if(r>=a.position)return a.alpha;let c=(r-o.position)/Math.max(1e-6,s.position-o.position);return o.alpha+(s.alpha-o.alpha)*c}function Qd(e){return e===`random`||e===`curve`||e===`randomCurve`?e:`constant`}function $d(e){return e===`loopAge`?`loopAge`:`lifetime`}function ef(e){return e===`loop`||e===`pingPong`||e===`burstSpread`?e:`random`}function tf(e,t,n,r,i,a=ql){let o=n===`randomCurve`?[...e,...t]:e,s=1/0,c=-1/0;for(let e of o)s=Math.min(s,e.y),c=Math.max(c,e.y);if(!Number.isFinite(s)||!Number.isFinite(c))return{curve:e,curveB:t,multiplier:r,editorMin:0,editorMax:1};let l=1,u=0;s>=0?l=Math.max(1,c):c<=0?l=-Math.max(1,Math.abs(s)):(l=Math.max(1,Math.abs(s),Math.abs(c)),u=-1),u=Math.min(u,i/Math.abs(l||1));let d=ff(r*l,-a,a),f=Math.abs(l)>1e-6&&l!==1;return{curve:f?e.map(e=>lu(e,1/l,a)):e,curveB:f&&n===`randomCurve`?t.map(e=>lu(e,1/l,a)):t,multiplier:d,editorMin:u,editorMax:1}}function nf(e,t,n){let r=[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[n[0],n[1],n[2]]}],i=(Array.isArray(e)&&e.length>0?e:r).map(e=>{if(mf(e))return{position:Q(Z(e.position,0),0,1),color:cf(e.color,r[0].color,0,1)}}).filter(e=>!!e).sort((e,t)=>e.position-t.position).slice(0,8);return i.length===0?r:i}function rf(e,t,n){let r=[{position:0,alpha:t[3]},{position:1,alpha:n[3]}],i=(Array.isArray(e)&&e.length>0?e:r).map(e=>{if(mf(e))return{position:Q(Z(e.position,0),0,1),alpha:Q(Z(e.alpha,1),0,1)}}).filter(e=>!!e).sort((e,t)=>e.position-t.position).slice(0,8);return i.length===0?r:i}function af(e,t){if(e.length===0)return 0;if(e.length===1)return e[0]??0;let n=Q(t,0,1)*(e.length-1),r=Math.floor(n),i=Math.min(e.length-1,r+1),a=n-r,o=e[r]??0;return o+((e[i]??o)-o)*a}function of(e){return Math.round(Q(e,2,1024))}function sf(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r)]:[...t]}function cf(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r),Q(Z(e[2],t[2]),n,r)]:[...t]}function lf(e,t,n,r){return Array.isArray(e)?[Q(Z(e[0],t[0]),n,r),Q(Z(e[1],t[1]),n,r),Q(Z(e[2],t[2]),n,r),Q(Z(e[3],t[3]),n,r)]:[...t]}function uf(e,t){return df(e,t).trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||t}function df(e,t){return typeof e==`string`&&e.trim()?e.trim():t}function Z(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function ff(e,t,n){return Q(Number.isFinite(e)?e:t,t,n)}function pf(e){return Number.isFinite(e)?Math.max(0,e):0}function Q(e,t,n){return Math.min(n,Math.max(t,e))}function mf(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var hf=class{constructor(e){q(this,`state`,e)}reset(e){this.state=e>>>0||2135587861}next(){return this.state=this.state*1664525+1013904223>>>0,this.state/4294967296}},gf=class e{constructor(e){q(this,`capacity`,e),q(this,`instanceData`),q(this,`spawnLocalPositionData`),q(this,`spawnDirectionData`),q(this,`spawnOriginData`),q(this,`runtimeFlagsData`),q(this,`triggerFlagsData`),q(this,`lastPosition`,[0,0,0]),q(this,`lastMoveVelocity`,[0,0,0]),q(this,`activeCount`,0),q(this,`emittedLastFrame`,0),q(this,`uploadBytesLastFrame`,0),q(this,`age`,0),q(this,`loopIndex`,-1),q(this,`loopRandom`,.5),q(this,`accumulator`,0),q(this,`distanceAccumulator`,0),q(this,`hasLastPosition`,!1),q(this,`hasPreviousEffectAge`,!1),q(this,`previousEffectAge`,0),this.instanceData=new Float32Array(e*18),this.spawnLocalPositionData=new Float32Array(e*3),this.spawnDirectionData=new Float32Array(e*3),this.spawnOriginData=new Float32Array(e*3),this.runtimeFlagsData=new Uint8Array(e),this.triggerFlagsData=new Uint8Array(e)}reset(){this.activeCount=0,this.emittedLastFrame=0,this.uploadBytesLastFrame=0,this.age=0,this.loopIndex=-1,this.loopRandom=.5,this.accumulator=0,this.distanceAccumulator=0,this.hasLastPosition=!1,this.lastMoveVelocity[0]=0,this.lastMoveVelocity[1]=0,this.lastMoveVelocity[2]=0,this.hasPreviousEffectAge=!1,this.previousEffectAge=0}cloneWithCapacity(t){let n=new e(t),r=Math.min(this.activeCount,n.capacity);return n.instanceData.set(this.instanceData.subarray(0,r*18)),n.spawnLocalPositionData.set(this.spawnLocalPositionData.subarray(0,r*3)),n.spawnDirectionData.set(this.spawnDirectionData.subarray(0,r*3)),n.spawnOriginData.set(this.spawnOriginData.subarray(0,r*3)),n.runtimeFlagsData.set(this.runtimeFlagsData.subarray(0,r)),n.triggerFlagsData.set(this.triggerFlagsData.subarray(0,r)),n.activeCount=r,n.emittedLastFrame=this.emittedLastFrame,n.uploadBytesLastFrame=this.uploadBytesLastFrame,n.age=this.age,n.loopIndex=this.loopIndex,n.loopRandom=this.loopRandom,n.accumulator=this.accumulator,n.distanceAccumulator=this.distanceAccumulator,n.hasLastPosition=this.hasLastPosition,n.lastPosition[0]=this.lastPosition[0],n.lastPosition[1]=this.lastPosition[1],n.lastPosition[2]=this.lastPosition[2],n.lastMoveVelocity[0]=this.lastMoveVelocity[0],n.lastMoveVelocity[1]=this.lastMoveVelocity[1],n.lastMoveVelocity[2]=this.lastMoveVelocity[2],n.hasPreviousEffectAge=this.hasPreviousEffectAge,n.previousEffectAge=this.previousEffectAge,n}compact(e,t){let n=0;for(;n<this.activeCount;){let r=n*18,i=this.instanceData[r+3]??0,a=this.instanceData[r+7]??0;e<=i+a?n++:(t?.(n,i+a),this.activeCount--,n!==this.activeCount&&(this.instanceData.copyWithin(r,this.activeCount*18,(this.activeCount+1)*18),this.copyRuntimeSidecars(this.activeCount,n)))}}copyRuntimeSidecars(e,t){let n=e*3,r=t*3;this.spawnLocalPositionData[r+0]=this.spawnLocalPositionData[n+0],this.spawnLocalPositionData[r+1]=this.spawnLocalPositionData[n+1],this.spawnLocalPositionData[r+2]=this.spawnLocalPositionData[n+2],this.spawnDirectionData[r+0]=this.spawnDirectionData[n+0],this.spawnDirectionData[r+1]=this.spawnDirectionData[n+1],this.spawnDirectionData[r+2]=this.spawnDirectionData[n+2],this.spawnOriginData[r+0]=this.spawnOriginData[n+0],this.spawnOriginData[r+1]=this.spawnOriginData[n+1],this.spawnOriginData[r+2]=this.spawnOriginData[n+2],this.runtimeFlagsData[t]=this.runtimeFlagsData[e]??0,this.triggerFlagsData[t]=this.triggerFlagsData[e]??0}},_f=class{constructor(e,t={}){q(this,`states`),q(this,`events`,[]),q(this,`subEmitterRequests`,[]),q(this,`stats`,{activeParticles:0,capacity:0,emittedLastFrame:0,uploadBytesLastFrame:0}),q(this,`subEmitterDepth`),q(this,`maxSubEmitterDepth`),q(this,`maxEventsPerFrame`),q(this,`maxSubEmitterRequestsPerFrame`),q(this,`rng`,new hf(2135587861)),q(this,`effectDefinition`),q(this,`position`,[0,0,0]),q(this,`spawnSample`,Rf()),q(this,`emissionGeometries`,new Map),q(this,`runtimeParameterValues`,{emissionRateMultiplier:1,initialVelocityMultiplier:1}),q(this,`emitterRuntimeParameterValues`,new Map),q(this,`lastTimeSeconds`,0),q(this,`startedAt`,0),q(this,`active`,!1),q(this,`emissionAllowed`,!0),this.subEmitterDepth=Math.max(0,Math.floor(Z(t.subEmitterDepth,0))),this.maxSubEmitterDepth=Math.max(0,Math.floor(Z(t.maxSubEmitterDepth,Hu))),this.maxEventsPerFrame=Math.max(0,Math.floor(Z(t.maxEventsPerFrame,Bu))),this.maxSubEmitterRequestsPerFrame=Math.max(0,Math.floor(Z(t.maxSubEmitterRequestsPerFrame,Vu))),this.effectDefinition=new Mu(e,rd),this.states=this.effect.emitters.map(e=>new gf(e.maxParticles)),this.refreshCapacity()}get effect(){return this.effectDefinition.value}get definition(){return this.effect}get isActive(){return this.active}get runtimeParameters(){return this.runtimeParameterValues}reset(e,t,n,r=2135587861){this.effectDefinition.replace(e),this.position[0]=t[0],this.position[1]=t[1],this.position[2]=t[2],this.startedAt=n,this.lastTimeSeconds=n,this.active=!0,this.emissionAllowed=!0,this.clearFrameEvents(),this.rng.reset(r^Xf(this.effect.id)),this.resizeStates();for(let e of this.states)e.reset();this.refreshCapacity()}setPosition(e){this.position[0]=e[0],this.position[1]=e[1],this.position[2]=e[2]}updateDefinition(e){this.effectDefinition.replace(e),this.resizeStates(),this.refreshCapacity()}allowCompletion(){this.emissionAllowed=!1}resumeEmission(){this.active&&(this.emissionAllowed=!0)}setEmissionGeometry(e,t){if(!t)return this.emissionGeometries.delete(e),!1;let n=If(t);return n?(this.emissionGeometries.set(e,n),!0):(this.emissionGeometries.delete(e),!1)}getEmissionGeometry(e){return this.emissionGeometries.get(e)??null}setRuntimeParameters(e){e.emissionRateMultiplier!==void 0&&(this.runtimeParameterValues.emissionRateMultiplier=pf(e.emissionRateMultiplier)),e.initialVelocityMultiplier!==void 0&&(this.runtimeParameterValues.initialVelocityMultiplier=pf(e.initialVelocityMultiplier))}setEmitterRuntimeParameters(e,t){let n=this.emitterRuntimeParameterValues.get(e)??{emissionRateMultiplier:1,initialVelocityMultiplier:1};t.emissionRateMultiplier!==void 0&&(n.emissionRateMultiplier=pf(t.emissionRateMultiplier)),t.initialVelocityMultiplier!==void 0&&(n.initialVelocityMultiplier=pf(t.initialVelocityMultiplier)),this.emitterRuntimeParameterValues.set(e,n)}getEmitterRuntimeParameters(e){return this.emitterRuntimeParameterValues.get(e)??null}effectiveEmissionRateMultiplier(e){return this.runtimeParameterValues.emissionRateMultiplier*(this.emitterRuntimeParameterValues.get(e)?.emissionRateMultiplier??1)}effectiveInitialVelocityMultiplier(e){return this.runtimeParameterValues.initialVelocityMultiplier*(this.emitterRuntimeParameterValues.get(e)?.initialVelocityMultiplier??1)}emitBurst(e,t={}){if(!this.active)return 0;let n=this.effect.emitters.findIndex(t=>t.id===e);if(n<0)return 0;let r=this.effect.emitters[n],i=this.states[n];if(!r||!i||!r.enabled)return 0;let a=Math.max(1,Math.floor(Z(t.count,1))),o=i.activeCount,s=this.position[0],c=this.position[1],l=this.position[2];return t.position&&(this.position[0]=t.position[0],this.position[1]=t.position[1],this.position[2]=t.position[2]),this.emitParticles(r,i,a,this.lastTimeSeconds),this.position[0]=s,this.position[1]=c,this.position[2]=l,i.activeCount-o}stop(){this.active=!1,this.clearFrameEvents();for(let e of this.states)e.reset();this.refreshStats()}update(e,t){if(this.clearFrameEvents(),this.lastTimeSeconds=t,!this.active)return!1;let n=!1,r=!0;for(let i=0;i<this.effect.emitters.length;i++){let a=this.effect.emitters[i],o=this.states[i];if(o.emittedLastFrame=0,o.uploadBytesLastFrame=0,this.recordParticleFrameEvents(a,o,i,e,t),o.compact(t,(e,t)=>this.recordParticleDeathEvent(a,o,i,e,t)),!a.enabled){n||=o.activeCount>0;continue}let s=t-this.startedAt-Math.max(0,a.timeline.start);if(o.age=s,s<0){this.emissionAllowed&&(r=!1),n||=o.activeCount>0;continue}let c=a.loop||o.age<=Math.max(.001,a.duration);c&&this.emissionAllowed?(r=!1,this.updateEmitter(a,o,e,t)):c&&this.advanceEmitterWithoutEmission(a,o,s),n||=o.activeCount>0}return this.refreshStats(),r&&!n?(this.active=!1,!1):!0}advanceEmitterWithoutEmission(e,t,n){let r=Math.max(.001,e.duration);t.age=e.loop?n%r:n,t.previousEffectAge=Math.max(0,n),t.hasPreviousEffectAge=!0,t.lastPosition[0]=this.position[0],t.lastPosition[1]=this.position[1],t.lastPosition[2]=this.position[2],t.lastMoveVelocity[0]=0,t.lastMoveVelocity[1]=0,t.lastMoveVelocity[2]=0,t.hasLastPosition=!0}updateEmitter(e,t,n,r){let i=Math.max(.001,e.duration),a=Math.max(0,t.age),o=t.hasPreviousEffectAge?t.previousEffectAge:0,s=e.loop?Math.floor(a/i):0;s!==t.loopIndex&&(t.loopIndex=s,t.loopRandom=this.rng.next()),e.loop&&(t.age=a%i),this.emitDueBursts(e,t,o,a,r,i);let c=Q(t.age/i,0,1),l=this.effectiveEmissionRateMultiplier(e.id),u=Y(e.spawn.rateValue,c,t.loopRandom)*l,d=Y(e.spawn.rateOverDistanceValue,c,t.loopRandom)*l,f=t.hasLastPosition?this.position[0]-t.lastPosition[0]:0,p=t.hasLastPosition?this.position[1]-t.lastPosition[1]:0,m=t.hasLastPosition?this.position[2]-t.lastPosition[2]:0,h=Math.hypot(f,p,m),g=n>0?1/n:0;t.lastMoveVelocity[0]=f*g,t.lastMoveVelocity[1]=p*g,t.lastMoveVelocity[2]=m*g,t.lastPosition[0]=this.position[0],t.lastPosition[1]=this.position[1],t.lastPosition[2]=this.position[2],t.hasLastPosition=!0,t.accumulator+=Math.max(0,u)*Math.max(0,n),t.distanceAccumulator+=Math.max(0,d)*Math.max(0,h),t.distanceAccumulator>=1&&(t.accumulator+=Math.floor(t.distanceAccumulator),t.distanceAccumulator%=1);let _=Math.floor(t.accumulator);_>0&&(t.accumulator-=_,this.emitParticles(e,t,_,r)),t.previousEffectAge=a,t.hasPreviousEffectAge=!0}emitDueBursts(e,t,n,r,i,a){if(r<n)return;let o=e.loop?Math.max(0,Math.floor(n/a)):0,s=e.loop?Math.max(0,Math.floor(r/a)):0,c=Math.max(o,s-Iu+1);for(let o=c;o<=s;o++){for(let s of e.spawn.bursts)this.emitScheduleIfDue(e,t,s,n,r,i,a,o);if(!e.loop)break}}emitScheduleIfDue(e,t,n,r,i,a,o,s){let c=e.loop?s*o:0;for(let s=0;s<n.cycles;s++){let l=n.time+n.interval*s;if(l>o&&!e.loop)break;l>o||Pf(c+l,r,i,t)&&(n.probability<=0||n.probability<1&&this.rng.next()>n.probability||this.emitParticles(e,t,n.count,a))}}emitParticles(e,t,n,r){let i=Math.min(n,t.capacity-t.activeCount);for(let n=0;n<i;n++)this.emitParticle(e,t,r,n,i);t.emittedLastFrame+=i}emitParticle(e,t,n,r,i){let a=t.activeCount*18,o=e.spawn,s=Q(t.age/Math.max(.001,e.duration),0,1),c=this.spawnSample;Vf(o,this.rng,s,r,i,c,o.shape===`mesh`?this.emissionGeometries.get(e.id)??null:null);let l=o.simulationSpace===`local`,u=(l?0:this.position[0])+c.position[0],d=(l?0:this.position[1])+c.position[1],f=(l?0:this.position[2])+c.position[2],p=e.initializeParticle,m=Math.max(.001,Y(p.lifetime,s,this.rng.next())),h=p.velocity,g=0,_=0,v=0;if(h.mode===`vector`)g=Mf(this.rng,h.min[0],h.max[0]),_=Mf(this.rng,h.min[1],h.max[1]),v=Mf(this.rng,h.min[2],h.max[2]);else{let e=Math.max(0,Y(h.speed,s,Wf(h.speed,this.rng)));g=c.direction[0]*e,_=c.direction[1]*e,v=c.direction[2]*e}if(e.modules.inheritVelocity){let n=Y(e.advanced.inheritVelocity.multiplier,s,this.rng.next()),r=[...t.lastMoveVelocity];l&&Cf(o,r),g+=r[0]*n,_+=r[1]*n,v+=r[2]*n}if(e.modules.limitVelocityOverLifetime){let t=e.advanced.limitVelocityOverLifetime,n=t.dampen,r=Y(t.drag,s,this.rng.next()),i=t.multiplyBySize&&e.modules.size?Math.max(.001,Y(e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue,s,this.rng.next())):1;if(t.separateAxes)g=Nf(g,Y(t.x,s,this.rng.next())*i,n),_=Nf(_,Y(t.y,s,this.rng.next())*i,n),v=Nf(v,Y(t.z,s,this.rng.next())*i,n);else{let e=Y(t.speed,s,this.rng.next())*i,r=Math.hypot(g,_,v);if(r>Math.max(0,e)){let t=(Math.max(0,e)+(r-Math.max(0,e))*(1-n))/Math.max(1e-6,r);g*=t,_*=t,v*=t}}if(r>0){let e=Math.max(0,1-r*.05);g*=e,_*=e,v*=e}}if(e.modules.lifetimeByEmitterSpeed){let t=wl(e.advanced.lifetimeByEmitterSpeed.speedRange,Math.hypot(g,_,v));m=Math.max(.001,m*Y(e.advanced.lifetimeByEmitterSpeed.multiplier,t,this.rng.next()))}let y=t.activeCount,b=y*3;t.spawnLocalPositionData[b+0]=c.position[0],t.spawnLocalPositionData[b+1]=c.position[1],t.spawnLocalPositionData[b+2]=c.position[2],t.spawnOriginData[b+0]=this.position[0],t.spawnOriginData[b+1]=this.position[1],t.spawnOriginData[b+2]=this.position[2],Ff(t.spawnDirectionData,b,g,_,v,c.direction),t.runtimeFlagsData[y]=+(o.simulationSpace===`local`)|(o.alignToDirection||e.render.alignAxis===`spawnDirection`?2:0),t.instanceData[a+0]=u,t.instanceData[a+1]=d,t.instanceData[a+2]=f,t.instanceData[a+3]=n,t.instanceData[a+4]=g,t.instanceData[a+5]=_,t.instanceData[a+6]=v,t.instanceData[a+7]=m,t.instanceData[a+8]=this.rng.next();let x=this.rng.next(),S=e.mode===`mesh`||p.startRotationSeparateAxes,C=S?Y(p.rotation3D.x,s,x):0,w=S?Y(p.rotation3D.y,s,x):0,T=Y(S?p.rotation3D.z:p.rotation,s,x);t.instanceData[a+9]=T,t.instanceData[a+13]=C,t.instanceData[a+14]=w;let E=this.rng.next(),D=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.x,s,E):0,O=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.y,s,E):0,k=p.angularVelocitySeparateAxes?Y(p.angularVelocity3D.z,s,E):Y(p.angularVelocity,s,E);if(t.instanceData[a+10]=e.modules.rotation?k:0,t.instanceData[a+15]=e.modules.rotation?D:0,t.instanceData[a+16]=e.modules.rotation?O:0,e.mode===`mesh`){let e=Wf(p.size3D.x,this.rng),n=Wf(p.size3D.y,this.rng),r=Wf(p.size3D.z,this.rng);t.instanceData[a+11]=Math.max(0,Y(p.size3D.x,s,e)),t.instanceData[a+12]=Math.max(0,Y(p.size3D.y,s,n)),t.instanceData[a+17]=Math.max(0,Y(p.size3D.z,s,r))}else if(p.startSizeSeparateAxes){let e=Wf(p.size3D.x,this.rng),n=Wf(p.size3D.y,this.rng);t.instanceData[a+11]=Math.max(0,Y(p.size3D.x,s,e)),t.instanceData[a+12]=Math.max(0,Y(p.size3D.y,s,n)),t.instanceData[a+17]=t.instanceData[a+11]}else{let e=Math.max(0,Y(p.size,s,Wf(p.size,this.rng)));t.instanceData[a+11]=e,t.instanceData[a+12]=e,t.instanceData[a+17]=e}t.activeCount++,this.recordParticleBirthEvent(e,t,Math.max(0,this.effect.emitters.indexOf(e)),y,n)}clearFrameEvents(){this.events.length=0,this.subEmitterRequests.length=0}recordParticleFrameEvents(e,t,n,r,i){if(t.activeCount<=0||!e.modules.triggers&&!e.modules.subEmitters&&!e.modules.collision)return;let a=i-Math.max(0,r);for(let r=0;r<t.activeCount;r++)this.recordNormalizedTimeEventIfDue(e,t,n,r,a,i),this.recordCollisionEventIfDue(e,t,n,r,a,i)}recordParticleBirthEvent(e,t,n,r,i){let a=this.createParticleEvent(`birth`,e,t,n,r,i,0,0,e.advanced.triggers.birthEvent);if(e.modules.triggers&&a.eventName&&this.pushParticleEvent(a),this.queueSubEmitterRequest(a,t,e.advanced.subEmitters.birth),e.modules.triggers&&e.advanced.triggers.normalizedTime<=0){t.triggerFlagsData[r]|=Ru;let e={...a,kind:`normalizedTime`,eventName:`normalized-time`};this.pushParticleEvent(e)}}recordParticleDeathEvent(e,t,n,r,i){let a=r*18,o=t.instanceData[a+3]??i,s=Math.max(.001,t.instanceData[a+7]??.001),c=this.createParticleEvent(`death`,e,t,n,r,i,Math.max(0,i-o),1,e.advanced.triggers.deathEvent);e.modules.triggers&&c.eventName&&this.pushParticleEvent(c),e.modules.triggers&&e.advanced.triggers.normalizedTime>=1&&(t.triggerFlagsData[r]&Ru)===0&&(t.triggerFlagsData[r]|=Ru,this.pushParticleEvent({...c,kind:`normalizedTime`,eventName:`normalized-time`,particleAge:s,normalizedAge:1})),this.queueSubEmitterRequest(c,t,e.advanced.subEmitters.death)}recordNormalizedTimeEventIfDue(e,t,n,r,i,a){if(!e.modules.triggers)return;let o=e.advanced.triggers.normalizedTime;if(o<=0||o>=1)return;let s=t.triggerFlagsData[r]??0;if(e.advanced.triggers.oneShot&&s&Ru)return;let c=r*18,l=t.instanceData[c+3]??0,u=Math.max(.001,t.instanceData[c+7]??.001),d=Q((i-l)/u,0,1),f=Q((a-l)/u,0,1);if(!(e.advanced.triggers.oneShot||d<o?d<o-Lu&&f+Lu>=o:f+Lu>=o))return;t.triggerFlagsData[r]|=Ru;let p=l+u*o,m=this.createParticleEvent(`normalizedTime`,e,t,n,r,p,u*o,o,`normalized-time`);this.pushParticleEvent(m)}recordCollisionEventIfDue(e,t,n,r,i,a){if(!e.modules.collision)return;let o=e.advanced.collision;if(o.mode!==`plane`)return;let s=e.modules.subEmitters&&!!e.advanced.subEmitters.collision.effectFile;if(!e.modules.triggers&&!s||(t.triggerFlagsData[r]??0)&zu)return;let c=r*18,l=t.instanceData[c+3]??0,u=Math.max(.001,t.instanceData[c+7]??.001),d=Q(i-l,0,u),f=Q(a-l,0,u);if(f<=0)return;let p=Df(e,t,r,d,d/u,this.position),m=Df(e,t,r,f,f/u,this.position),h=o.planeY+o.radius;if(!(p[1]>=h&&m[1]<h))return;t.triggerFlagsData[r]|=zu;let g=this.createParticleEvent(`collision`,e,t,n,r,a,f,f/u,`collision`);e.modules.triggers&&this.pushParticleEvent(g),this.queueSubEmitterRequest(g,t,e.advanced.subEmitters.collision)}createParticleEvent(e,t,n,r,i,a,o,s,c){let l=i*18,u=n.instanceData[l+8]??0;return{kind:e,eventName:c,effectId:this.effect.id,emitterId:t.id,emitterIndex:r,particleIndex:i,particleSeed:u,timeSeconds:a,effectAge:Math.max(0,a-this.startedAt),particleAge:o,normalizedAge:Q(s,0,1),position:Df(t,n,i,o,s,this.position),velocity:Of(t,n,i,o,s,this.position)}}pushParticleEvent(e){this.events.length>=this.maxEventsPerFrame||this.events.push(e)}queueSubEmitterRequest(e,t,n){let r=this.effect.emitters[e.emitterIndex];r?.modules.subEmitters&&(!n.effectFile||this.subEmitterDepth>=this.maxSubEmitterDepth||this.subEmitterRequests.length>=this.maxSubEmitterRequestsPerFrame||n.probability<=0||jf(e,n.effectFile)>n.probability||this.subEmitterRequests.push({hook:e.kind,effectFile:n.effectFile,sourceEffectId:e.effectId,sourceEmitterId:e.emitterId,sourceEmitterIndex:e.emitterIndex,sourceParticleIndex:e.particleIndex,sourceParticleSeed:e.particleSeed,timeSeconds:e.timeSeconds,position:[...e.position],velocity:[...e.velocity],normalizedAge:e.normalizedAge,inheritColor:n.inheritColor,inheritSize:n.inheritSize,inheritedColor:n.inheritColor?kf(r,e.normalizedAge):null,inheritedSize:n.inheritSize?Af(r,t,e.particleIndex,e.normalizedAge):null,depth:this.subEmitterDepth,nextDepth:this.subEmitterDepth+1,maxDepth:this.maxSubEmitterDepth}))}resizeStates(){for(;this.states.length<this.effect.emitters.length;){let e=this.effect.emitters[this.states.length];this.states.push(new gf(e.maxParticles))}for(let e=0;e<this.effect.emitters.length;e++){let t=this.effect.emitters[e],n=this.states[e];n.capacity!==t.maxParticles&&(this.states[e]=n.cloneWithCapacity(t.maxParticles))}this.states.length=this.effect.emitters.length}refreshStats(){let e=0,t=0,n=0;for(let r of this.states)e+=r.activeCount,t+=r.emittedLastFrame,n+=r.uploadBytesLastFrame;this.stats.activeParticles=e,this.stats.emittedLastFrame=t,this.stats.uploadBytesLastFrame=n}refreshCapacity(){let e=0;for(let t of this.states)e+=t.capacity;this.stats.capacity=e}};function vf(e,t){return Q(t.age/Math.max(.001,e.duration),0,1)}function yf(e,t,n,r,i,a,o={position:[0,0,0],velocity:[0,0,0]},s=1){return bf(e,t,n,r,i,a,o,s),Tf(e,t,n,o.position,o.velocity,a),o}function bf(e,t,n,r,i,a,o={position:[0,0,0],velocity:[0,0,0]},s=1){let c=n*18,l=vf(e,t),u=t.instanceData[c+8]??.5,d=e.modules.velocity?Y(e.forces.dragValue,i,u,l):0,f=e.modules.velocity?Y(e.forces.gravityValue,i,u,l):0,p=Math.max(0,1-Math.max(0,d)*r),m=pf(s),h=(t.instanceData[c+4]??0)*m,g=(t.instanceData[c+5]??0)*m,_=(t.instanceData[c+6]??0)*m,v=e.advanced.velocityOverLifetime.speedModifier,y=e.modules.velocityOverLifetime?Y(v,i,u,l):1,b=e.modules.velocityOverLifetime?Ou(v,i,u,l):1,x=o.velocity;x[0]=h*y,x[1]=g*y-f*r*2,x[2]=_*y;let S=o.position;return S[0]=(t.instanceData[c+0]??0)+h*r*p*b,S[1]=(t.instanceData[c+1]??0)+g*r*p*b-f*r*r,S[2]=(t.instanceData[c+2]??0)+_*r*p*b,e.modules.velocityOverLifetime&&Ef(e,t,n,r,i,l,u,y,b,S,x,a,o.scratchA??[0,0,0],o.scratchB??[0,0,0]),o}function xf(e,t){return!!((e.runtimeFlagsData[t]??0)&1)}function Sf(e,t,n,r){if(!xf(t,n))return;let{scale:i,rotation:a}=e.spawn;Gf(r[0]*i[0],r[1]*i[1],r[2]*i[2],a,r)}function Cf(e,t){wf(t,e.rotation,t);for(let n=0;n<3;n++)t[n]=e.scale[n]>1e-6?t[n]/e.scale[n]:0}function wf(e,t,n){let[r,i,a]=t.map(qf),o=Math.cos(a),s=Math.sin(a),c=e[0]*o+e[1]*s,l=-e[0]*s+e[1]*o,u=Math.cos(i),d=Math.sin(i),f=c*u+e[2]*d,p=-c*d+e[2]*u,m=Math.cos(r),h=Math.sin(r);n[0]=f,n[1]=l*m+p*h,n[2]=-l*h+p*m}function Tf(e,t,n,r,i,a){if(!xf(t,n))return;Sf(e,t,n,r),Sf(e,t,n,i);let o=n*3;for(let n=0;n<3;n++)r[n]+=e.spawn.position[n]+(a?.[n]??t.spawnOriginData[o+n]??0)}function Ef(e,t,n,r,i,a,o,s,c,l,u,d,f=[0,0,0],p=[0,0,0]){let m=e.advanced.velocityOverLifetime,h=xf(t,n)&&m.space===`world`;h&&Tf(e,t,n,l,u,d);let g=xf(t,n)&&!h,_=m.space===`local`&&!g,v=f;v[0]=Y(m.linear.x,i,o,a),v[1]=Y(m.linear.y,i,o,a),v[2]=Y(m.linear.z,i,o,a);let y=p;_?Gf(v[0],v[1],v[2],e.spawn.rotation,y):(y[0]=v[0],y[1]=v[1],y[2]=v[2]),u[0]+=y[0]*s,u[1]+=y[1]*s,u[2]+=y[2]*s,l[0]+=y[0]*r*c,l[1]+=y[1]*r*c,l[2]+=y[2]*r*c;let b=n*3,x=g?0:_?d?.[0]??t.spawnOriginData[b+0]??0:t.spawnOriginData[b+0]??0,S=g?0:_?d?.[1]??t.spawnOriginData[b+1]??0:t.spawnOriginData[b+1]??0,C=g?0:_?d?.[2]??t.spawnOriginData[b+2]??0:t.spawnOriginData[b+2]??0,w=f;w[0]=Y(m.orbitalOffset.x,i,o,a),w[1]=Y(m.orbitalOffset.y,i,o,a),w[2]=Y(m.orbitalOffset.z,i,o,a);let T=p;_?Gf(w[0],w[1],w[2],e.spawn.rotation,T):(T[0]=w[0],T[1]=w[1],T[2]=w[2]);let E=x+T[0],D=S+T[1],O=C+T[2],k=Y(m.orbital.x,i,o,a),A=Y(m.orbital.y,i,o,a),ee=Y(m.orbital.z,i,o,a);if(k!==0||A!==0||ee!==0){g||Gf(w[0]*e.spawn.scale[0],w[1]*e.spawn.scale[1],w[2]*e.spawn.scale[2],e.spawn.rotation,T);let n=g?T[0]:(d?.[0]??t.spawnOriginData[b]??0)+e.spawn.position[0]+T[0],i=g?T[1]:(d?.[1]??t.spawnOriginData[b+1]??0)+e.spawn.position[1]+T[1],a=g?T[2]:(d?.[2]??t.spawnOriginData[b+2]??0)+e.spawn.position[2]+T[2];f[0]=l[0]-n,f[1]=l[1]-i,f[2]=l[2]-a,_&&wf(f,e.spawn.rotation,f);let[o,m,h]=f,v=A*h-ee*m,y=ee*o-k*h,x=k*m-A*o,S=k*r*c,C=Math.cos(S),E=Math.sin(S),D=m*C-h*E,O=m*E+h*C;m=D,h=O;let te=A*r*c,j=Math.cos(te),M=Math.sin(te),ne=o*j+h*M,re=-o*M+h*j;o=ne,h=re;let ie=ee*r*c,ae=Math.cos(ie),oe=Math.sin(ie),se=o*ae-m*oe;D=o*oe+m*ae,o=se,m=D,_&&(Gf(o,m,h,e.spawn.rotation,f),[o,m,h]=f,Gf(v,y,x,e.spawn.rotation,p),[v,y,x]=p),l[0]=n+o,l[1]=i+m,l[2]=a+h,u[0]+=v*s,u[1]+=y*s,u[2]+=x*s}let te=Y(m.radial,i,o,a);if(te!==0){let e=l[0]-E,t=l[1]-D,n=l[2]-O,i=Math.hypot(e,t,n);if(i>1e-6){let a=1/i,o=e*a,d=t*a,f=n*a;l[0]+=o*te*r*c,l[1]+=d*te*r*c,l[2]+=f*te*r*c,u[0]+=o*te*s,u[1]+=d*te*s,u[2]+=f*te*s}}if(h){let r=n*3;for(let n=0;n<3;n++)l[n]-=e.spawn.position[n]+(d?.[n]??t.spawnOriginData[r+n]??0);Cf(e.spawn,l),Cf(e.spawn,u)}}function Df(e,t,n,r,i,a){return yf(e,t,n,r,i,a).position}function Of(e,t,n,r,i,a){return yf(e,t,n,r,i,a).velocity}function kf(e,t){return e.modules.color?[...Kd(e.color.gradient,t),Zd(e.color.gradient,t)]:[1,1,1,1]}function Af(e,t,n,r){let i=n*18,a=Math.max(0,t.instanceData[i+11]??1);if(!e.modules.size)return a;let o=e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue;return a*Math.max(0,Y(o,r,.5))}function jf(e,t){let n=Math.floor(e.particleSeed*4294967295)^Xf(`${e.kind}:${t}:${e.effectId}:${e.emitterId}:${e.particleIndex}`);return(Math.imul(n>>>0,1664525)+1013904223>>>0)/4294967296}function Mf(e,t,n){return t+(n-t)*e.next()}function Nf(e,t,n){let r=Math.max(0,t),i=Math.abs(e);if(i<=r)return e;let a=r+(i-r)*(1-n);return Math.sign(e)*a}function Pf(e,t,n,r){return Number.isFinite(e)?!r.hasPreviousEffectAge&&e===0?n>=0:e>t+Lu&&e<=n+Lu:!1}function Ff(e,t,n,r,i,a){let o=n,s=r,c=i;Math.hypot(o,s,c)<=1e-6&&(o=a[0],s=a[1],c=a[2]);let l=Math.hypot(o,s,c);if(l<=1e-6){e[t+0]=0,e[t+1]=1,e[t+2]=0;return}let u=1/l;e[t+0]=o*u,e[t+1]=s*u,e[t+2]=c*u}function If(e){let t=e.positions,n=Math.floor(t.length/3);if(n<1)return null;let r=new Float32Array(n*3);for(let e=0;e<r.length;e++)r[e]=t[e];let i=null;if(e.normals&&e.normals.length>=n*3){i=new Float32Array(n*3);for(let t=0;t<i.length;t++)i[t]=e.normals[t]}let a=null;if(e.indices&&e.indices.length>=3){let t=e.indices.length-e.indices.length%3;a=new Uint32Array(t);for(let r=0;r<t;r++){let t=Math.floor(e.indices[r]);if(t<0||t>=n)return null;a[r]=t}}else if(n>=3){let e=n-n%3;a=new Uint32Array(e);for(let t=0;t<e;t++)a[t]=t}let o=a?a.length/3:0,s=new Float32Array(o),c=o>0&&!i?new Float32Array(o*3):null,l=0;for(let e=0;e<o;e++){let t=a[e*3+0]*3,n=a[e*3+1]*3,i=a[e*3+2]*3,o=r[n+0]-r[t+0],u=r[n+1]-r[t+1],d=r[n+2]-r[t+2],f=r[i+0]-r[t+0],p=r[i+1]-r[t+1],m=r[i+2]-r[t+2],h=u*m-d*p,g=d*f-o*m,_=o*p-u*f,v=Math.hypot(h,g,_);if(l+=v*.5,s[e]=l,c){let t=v>1e-6?1/v:0;c[e*3+0]=h*t,c[e*3+1]=g*t,c[e*3+2]=_*t}}return{positions:r,normals:i,indices:a,faceNormals:c,triangleCdf:s,totalArea:l,vertexCount:n,triangleCount:o}}function Lf(e,t,n,r,i){if(!(t===`surface`&&e.triangleCount>0&&e.totalArea>1e-6)){let t=Math.min(e.vertexCount-1,Math.floor(n.next()*e.vertexCount));r[0]=e.positions[t*3+0],r[1]=e.positions[t*3+1],r[2]=e.positions[t*3+2],e.normals&&(i[0]=e.normals[t*3+0],i[1]=e.normals[t*3+1],i[2]=e.normals[t*3+2]);return}let a=n.next()*e.totalArea,o=0,s=e.triangleCount-1;for(;o<s;){let t=o+s>>1;e.triangleCdf[t]<a?o=t+1:s=t}let c=o,l=e.indices[c*3+0]*3,u=e.indices[c*3+1]*3,d=e.indices[c*3+2]*3,f=n.next(),p=n.next();f+p>1&&(f=1-f,p=1-p);let m=1-f-p,h=e.positions;r[0]=h[l]*m+h[u]*f+h[d]*p,r[1]=h[l+1]*m+h[u+1]*f+h[d+1]*p,r[2]=h[l+2]*m+h[u+2]*f+h[d+2]*p;let g=e.normals;g?(i[0]=g[l]*m+g[u]*f+g[d]*p,i[1]=g[l+1]*m+g[u+1]*f+g[d+1]*p,i[2]=g[l+2]*m+g[u+2]*f+g[d+2]*p):e.faceNormals&&(i[0]=e.faceNormals[c*3+0],i[1]=e.faceNormals[c*3+1],i[2]=e.faceNormals[c*3+2])}function Rf(){return{position:[0,0,0],direction:[0,1,0]}}var zf=[0,0,0],Bf=[0,1,0];function Vf(e,t,n,r,i,a,o=null){let s=Math.max(0,Y(e.radiusValue,n,Wf(e.radiusValue,t))),c=Hf(e,t,n,r,i),l=Math.cos(c),u=Math.sin(c),d=0,f=0,p=0,m=0,h=1,g=0;if(e.shape===`circle`){let n=Uf(s,e.radiusThickness,t);d=l*n,p=u*n}else if(e.shape===`box`)d=(t.next()-.5)*e.box[0],f=(t.next()-.5)*e.box[1],p=(t.next()-.5)*e.box[2];else if(e.shape===`cone`){let n=Math.max(0,e.length),r=e.emitFrom===`volume`&&n>0?t.next():0;f=n*r;let i=s*(1-r),a=Uf(i,e.radiusThickness,t),o=i>1e-6?a/i:0,c=qf(e.angle)*o,_=Math.sin(c);d=l*a,p=u*a,m=l*_,h=Math.cos(c),g=u*_}else if(e.shape===`mesh`){if(o&&o.vertexCount>0){zf[0]=0,zf[1]=0,zf[2]=0,Bf[0]=0,Bf[1]=1,Bf[2]=0,Lf(o,e.meshEmitFrom,t,zf,Bf),d=zf[0],f=zf[1],p=zf[2];let n=Math.hypot(Bf[0],Bf[1],Bf[2]);if(n>1e-6){let e=1/n;m=Bf[0]*e,h=Bf[1]*e,g=Bf[2]*e}}}else if(e.shape===`sphere`||e.shape===`hemisphere`){let n=e.shape===`hemisphere`?t.next():t.next()*2-1,r=Math.sqrt(Math.max(0,1-n*n)),i=l*r,a=n,o=u*r,c=Uf(s,e.radiusThickness,t);d=i*c,f=a*c,p=o*c,m=i,h=a,g=o}let _=Q(e.sphericalDirectionAmount,0,1);if(_>0){let e=m,t=h,n=g,r=Math.hypot(d,f,p);if(r>1e-6){let i=1/r;e=d*i,t=f*i,n=p*i}let i=m+(e-m)*_,a=h+(t-h)*_,o=g+(n-g)*_,s=Math.hypot(i,a,o);if(s>1e-6){let e=1/s;m=i*e,h=a*e,g=o*e}}let v=Q(e.randomDirectionAmount,0,1);if(v>0){let e=t.next()*2-1,n=t.next()*Fu,r=Math.sqrt(Math.max(0,1-e*e)),i=Math.cos(n)*r,a=Math.sin(n)*r,o=m+(i-m)*v,s=h+(e-h)*v,c=g+(a-g)*v,l=Math.hypot(o,s,c);if(l>1e-6){let e=1/l;m=o*e,h=s*e,g=c*e}}let y=Math.max(0,e.randomPositionAmount);if(y>0){let e=t.next()*2-1,n=t.next()*Fu,r=Math.sqrt(Math.max(0,1-e*e)),i=Math.cbrt(t.next())*y;d+=Math.cos(n)*r*i,f+=e*i,p+=Math.sin(n)*r*i}e.simulationSpace===`local`?(a.position[0]=d,a.position[1]=f,a.position[2]=p,a.direction[0]=m,a.direction[1]=h,a.direction[2]=g,Kf(a.direction,0,1,0)):(Gf(d*e.scale[0],f*e.scale[1],p*e.scale[2],e.rotation,a.position),a.position[0]+=e.position[0],a.position[1]+=e.position[1],a.position[2]+=e.position[2],Gf(m,h,g,e.rotation,a.direction),Kf(a.direction,0,1,0))}function Hf(e,t,n,r,i){let a=Q(e.arc,0,360),o=a>=359.999,s=Y(e.arcSpeedValue,n,.5)*n,c=a>1e-6?s/a:0,l;if(e.arcMode===`loop`)l=Jf(n+c,1);else if(e.arcMode===`pingPong`)l=Yf(n+c);else if(e.arcMode===`burstSpread`){if(i<=1)l=.5;else{let e=o?i:i-1;l=r/Math.max(1,e)}}else l=t.next();let u=Q(e.arcSpread,0,1);if(u>0){let e=Math.max(1,Math.round(1/u));l=Math.round(l*e)/e}let d=e.arcMode===`random`||e.arcMode===`burstSpread`?s:0;return qf(Jf(a*Q(l,0,1)+d,360))}function Uf(e,t,n){let r=Math.max(0,e),i=Q(t,0,1);if(r<=0||i<=0)return r;let a=r*(1-i);return Math.sqrt(a*a+(r*r-a*a)*n.next())}function Wf(e,t){return e.mode===`random`||e.mode===`randomCurve`?t.next():.5}function Gf(e,t,n,r,i){let a=qf(r[0]),o=Math.cos(a),s=Math.sin(a),c=t*o-n*s,l=t*s+n*o,u=qf(r[1]),d=Math.cos(u),f=Math.sin(u),p=e*d-l*f,m=e*f+l*d,h=qf(r[2]),g=Math.cos(h),_=Math.sin(h);i[0]=p*g-c*_,i[1]=p*_+c*g,i[2]=m}function Kf(e,t,n,r){let i=Math.hypot(e[0],e[1],e[2]);if(i<=1e-6){e[0]=t,e[1]=n,e[2]=r;return}let a=1/i;e[0]*=a,e[1]*=a,e[2]*=a}function qf(e){return e*Math.PI/180}function Jf(e,t){return(e%t+t)%t}function Yf(e){let t=Jf(e*2,2);return t<=1?t:2-t}function Xf(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var Zf=[`normal`,`roughness`,`metallic`],Qf=[`Param1`,`Param2`,`Param3`,`Param4`],$f=`param.constant.time.textureSample.particleSubUV.uv.tilingOffset.polarCoordinates.rotateUV.panner.multiply.add.subtract.divide.lerp.oneMinus.clamp.step.smoothstep.power.min.max.remap.split.combine.swizzle.desaturate.fresnel.sphereMask.twoSidedSign.abs.frac.floor.ceil.round.sign.sqrt.length.normalize.dot.sine.cosine.if.noise.vectorNoise.particleMacroUV.antialiasedTextureMask.sphericalParticleOpacity.gradientRamp.dynamicParameter.particleColor.particleRelativeTime.particleSpeed.particleRandom.particleSize.particleDirection.particlePosition.sceneWorldNormal.sceneWorldPosition.sceneViewDirection.mainLightDirection.mainLightColor.sceneAmbientColor.sceneDiffuseLighting.unpackNormal.subgraph.output`.split(`.`),ep=new Set([`sceneWorldNormal`,`sceneWorldPosition`,`sceneViewDirection`,`mainLightDirection`,`mainLightColor`,`sceneAmbientColor`,`sceneDiffuseLighting`]);new Set($f);function tp(e){switch(e){case`float`:return 0;case`vec2`:return[0,0,0,0];case`vec3`:return[0,0,0,0];case`color`:return[1,1,1,1];case`texture`:return``;case`bool`:return!1}}function np(e,t,n){switch(e){case`float`:return J(t,n);case`vec2`:case`vec3`:case`color`:{let r=Array.isArray(n)?n:tp(e),[i,a]=e===`color`?[0,1]:[-1e5,1e5];return sl(t,r,i,a)}case`texture`:return typeof t==`string`?t:n;case`bool`:return typeof t==`boolean`?t:n}}function rp(e){return e===`masked`||e===`opaque`}function ip(e,t){return t===`normal`?`alpha`:t===`add`?`additive`:t??e}function ap(e){return Qf.every((t,n)=>e?.[n]===t)}function op(e,t,n){let r=e.params.find(e=>e.name===n);if(r)return sp(r)&&t.mainTex?.path?t.mainTex.path:Object.prototype.hasOwnProperty.call(t.paramOverrides,n)?np(r.type,t.paramOverrides[n],r.default):r.default}function sp(e){return e.type===`texture`&&(e.builtinRole===`mainTex`||e.name===`MainTex`)}function cp(e,t){if(!t)return``;if(t.mainTex?.path)return t.mainTex.path;let n=e?.params.find(sp);return typeof n?.default==`string`?n.default:``}function lp(e,t,n,r,i){let a=n.inputs.tex;if(a){let n=i.get(a),o=n?r.get(n.source):void 0;if(o?.type===`param`){let n=typeof o.params.name==`string`?o.params.name:``,r=e.params.find(e=>e.name===n);if(r?.type===`texture`){let i=sp(r),a=op(e,t,n);return{path:typeof a==`string`?a:``,isMainTex:i}}}}let o=n.params.tex;return{path:typeof o==`string`?o:``,isMainTex:!1}}function up(e){let t={name:e.name,type:e.type,group:e.group,default:e.default};return e.inputId!==void 0&&(t.inputId=e.inputId),e.scope!==`per-material`&&(t.scope=e.scope),e.sliderMin!==void 0&&(t.sliderMin=e.sliderMin),e.sliderMax!==void 0&&(t.sliderMax=e.sliderMax),e.clampMin!==void 0&&(t.clampMin=e.clampMin),e.clampMax!==void 0&&(t.clampMax=e.clampMax),e.perParticle&&(t.perParticle=!0),e.perParticleFeed&&(t.perParticleFeed=e.perParticleFeed),e.builtinRole&&(t.builtinRole=e.builtinRole),t}function dp(e){let t={id:e.id,name:e.name,blend:e.blend,nodes:e.nodes,edges:e.edges,params:e.params.map(up),outputs:e.outputs};return ap(e.dynamicChannelLabels)||(t.dynamicChannelLabels=e.dynamicChannelLabels),e.opacityMaskClipValue!==void 0&&e.opacityMaskClipValue!==.333&&(t.opacityMaskClipValue=e.opacityMaskClipValue),e.side!==void 0&&(t.side=e.side),e.shadingModel===`lit`&&(t.shadingModel=`lit`),e.subgraph&&(t.subgraph=e.subgraph),e.builtin&&(t.builtin=e.builtin),t}function fp(e){return e.builtin===`sprite-master`||e.id===`sprite-master`}function pp(e){return e!==`textureAlpha`}var mp=.2126,hp=.7152,gp=.0722;function _p(e,t,n){if(t===`textureAlpha`){if(!n)return;for(let t=3;t<e.length;t+=4)e[t]=255-e[t]}else for(let r=0;r+3<e.length;r+=4){let i=e[r],a=e[r+1],o=e[r+2],s;switch(t){case`red`:s=i;break;case`green`:s=a;break;case`blue`:s=o;break;case`luminance`:s=mp*i+hp*a+gp*o;break;case`inverseLuminance`:s=255-(mp*i+hp*a+gp*o);break;case`constant`:s=255;break;default:s=e[r+3]}e[r+3]=n?255-s:s}}function vp(e,t,n,r=[1,1,1,1]){let i=e.colorOverLifetime,a=e.colorOverTrail;Kd(i,t,r);let o=r[0],s=r[1],c=r[2];return Kd(a,n,r),r[0]*=o,r[1]*=s,r[2]*=c,r[3]=Zd(i,t)*Zd(a,n),r}var yp=[0,1,0],bp=[0,0,1];function xp(e,t,n,r){return e+t*n+r}function Sp(e,t,n){return Math.max(t,Math.min(n,e))}function Cp(e,t,n){return e+(t-e)*n}function wp(e,t,n){let r=Sp((n-e)/Math.max(1e-6,t-e),0,1);return r*r*(3-2*r)}var Tp=new Set([`value`,`fastGradient`,`perlinGradient`,`simplex`,`voronoi`]),Ep=new Set([`cellnoise`,`perlin3d`,`perlinGradient`,`perlinCurl`,`voronoi`]);function Dp(e,t){return Math.round(J(e,t))}function Op(e){return{kind:Tp.has(e.function)?e.function:`perlinGradient`,scale:Math.max(1e-4,J(e.scale,16)),repeatSize:Math.max(1,Dp(e.repeatSize,256)),levels:Math.max(1,Math.min(8,Dp(e.levels,1))),levelScale:J(e.levelScale,2),gain:J(e.gain,.5),turbulence:e.turbulence===!0,tiling:e.tiling!==!1,seed:Dp(e.seed,0),outputMin:J(e.outputMin,0),outputMax:J(e.outputMax,1)}}function kp(e){return{kind:Ep.has(e.function)?e.function:`perlinCurl`,scale:Math.max(1e-4,J(e.scale,8)),tileSize:Math.max(1,Dp(e.tileSize,256)),tiling:e.tiling!==!1,seed:Dp(e.seed,0),normalizeOutput:e.normalizeOutput!==!1}}function Ap(e){let t=e|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function jp(e,t,n){return Ap(Math.imul(e|0,522133279)^Math.imul(t|0,2246822507)^Math.imul(n|0,3266489909)|0)/4294967296}function Mp(e,t){return t<=0?e:(e%t+t)%t}function Np(e,t){return t>0?Mp(e,t):e}function Pp(e){return e*e*e*(e*(e*6-15)+10)}function $(e,t,n){return e+(t-e)*n}function Fp(e){return e<0?0:e>1?1:e}function Ip(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=Pp(o),l=Pp(s),u=jp(Np(i,r),Np(a,r),n),d=jp(Np(i+1,r),Np(a,r),n),f=jp(Np(i,r),Np(a+1,r),n),p=jp(Np(i+1,r),Np(a+1,r),n);return $($(u,d,c),$(f,p,c),l)}function Lp(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=Pp(o),l=Pp(s),u=(e,t,i,a)=>{let o=jp(Np(e,r),Np(t,r),n)*Math.PI*2;return Math.cos(o)*i+Math.sin(o)*a},d=u(i,a,o,s),f=u(i+1,a,o-1,s),p=u(i,a+1,o,s-1),m=u(i+1,a+1,o-1,s-1);return Fp($($(d,f,c),$(p,m,c),l)*.7071+.5)}function Rp(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=1/0;for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++){let l=i+c,u=a+s,d=Np(l,r),f=Np(u,r),p=jp(d,f,n),m=jp(d,f,n^2654435769),h=l+p-e,g=u+m-t,_=h*h+g*g;_<o&&(o=_)}return Math.min(1,Math.sqrt(o))}function zp(e){switch(e){case`value`:return Ip;case`voronoi`:return Rp;default:return Lp}}function Bp(e,t,n){let r=e.scale,i=e.tiling?e.repeatSize:0,a=zp(e.kind),o=1,s=1,c=0,l=0;for(let u=0;u<e.levels;u++){let d=r*s,f=a(t*d,n*d,e.seed+u*101,i);e.turbulence&&(f=Math.abs(f*2-1)),c+=f*o,l+=o,o*=e.gain,s*=e.levelScale}let u=Fp(l>0?c/l:c);return e.outputMin+u*(e.outputMax-e.outputMin)}function Vp(e,t,n){let r=e.scale;return Hp(e,t,n,r,e.tiling?e.tileSize:0)}function Hp(e,t,n,r,i){let a=t*r,o=n*r,s=e.seed,c=t=>e.normalizeOutput?Fp(t*.5+.5):t;switch(e.kind){case`cellnoise`:{let e=Math.floor(a),t=Math.floor(o),n=Np(e,i),r=Np(t,i);return[jp(n,r,s),jp(n,r,s^1757159915),jp(n,r,s^461845907),1]}case`voronoi`:{let e=Math.floor(a),t=Math.floor(o),n=1/0,r=0,c=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){let d=e+u,f=t+l,p=Np(d,i),m=Np(f,i),h=d+jp(p,m,s),g=f+jp(p,m,s^2654435769),_=(h-a)*(h-a)+(g-o)*(g-o);_<n&&(n=_,r=p,c=m)}return[jp(r,c,s^74565),jp(r,c,s^424090),jp(r,c,s^773615),Math.min(1,Math.sqrt(n))]}case`perlinCurl`:{let e=.01,t=(e,t)=>Lp(e,t,s,i)*2-1,n=(t(a+e,o)-t(a-e,o))/(2*e),r=(t(a,o+e)-t(a,o-e))/(2*e),l=-n,u=Math.hypot(r,l)||1;return r/=u,l/=u,[c(r),c(l),.5,1]}default:{let e=Lp(a,o,s,i)*2-1,t=Lp(a,o,s^1374496523,i)*2-1,n=Lp(a,o,s^625341585,i)*2-1;return[c(e),c(t),c(n),1]}}}function Up(e,t,n,r){return Ap(Math.imul(e|0,522133279)^Math.imul(t|0,2246822507)^Math.imul(n|0,668265263)^Math.imul(r|0,3266489909)|0)/4294967296}var Wp=.4;function Gp(e){let t=e*(e-1);return 30*t*t}var Kp=[0,0,0];function qp(e,t,n,r,i){let a=Up(e,t,n,r)*Math.PI*2,o=Up(e,t,n,r^2654435769)*2-1,s=Math.sqrt(Math.max(0,1-o*o));i[0]=Math.cos(a)*s,i[1]=Math.sin(a)*s,i[2]=o}function Jp(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=Math.floor(n),c=e-a,l=t-o,u=n-s,d=Pp(c),f=Pp(l),p=Pp(u),m=Kp;qp(a,o,s,r,m);let h=m[0],g=m[1],_=m[2],v=h*c+g*l+_*u;qp(a+1,o,s,r,m);let y=m[0],b=m[1],x=m[2],S=y*(c-1)+b*l+x*u;qp(a,o+1,s,r,m);let C=m[0],w=m[1],T=m[2],E=C*c+w*(l-1)+T*u;qp(a+1,o+1,s,r,m);let D=m[0],O=m[1],k=m[2],A=D*(c-1)+O*(l-1)+k*u;qp(a,o,s+1,r,m);let ee=m[0],te=m[1],j=m[2],M=ee*c+te*l+j*(u-1);qp(a+1,o,s+1,r,m);let ne=m[0],re=m[1],ie=m[2],ae=ne*(c-1)+re*l+ie*(u-1);qp(a,o+1,s+1,r,m);let oe=m[0],se=m[1],ce=m[2],le=oe*c+se*(l-1)+ce*(u-1);qp(a+1,o+1,s+1,r,m);let ue=m[0],N=m[1],de=m[2],fe=ue*(c-1)+N*(l-1)+de*(u-1),pe=$($($(h,y,d),$(C,D,d),f),$($(ee,ne,d),$(oe,ue,d),f),p),me=$($($(g,b,d),$(w,O,d),f),$($(te,re,d),$(se,N,d),f),p),he=$($($(_,x,d),$(T,k,d),f),$($(j,ie,d),$(ce,de,d),f),p),ge=$($(S-v,A-E,f),$(ae-M,fe-le,f),p),_e=$($(E-v,A-S,d),$(le-M,fe-ae,d),p),ve=$($(M-v,ae-S,d),$(le-E,fe-A,d),f);i[0]=(pe+Gp(c)*ge)*1.155,i[1]=(me+Gp(l)*_e)*1.155,i[2]=(he+Gp(u)*ve)*1.155}var Yp=[0,0,0];function Xp(e,t,n,r,i){let a=r|0,o=r^1374496523,s=r^625341585,c=Yp;Jp(e,t,n,a,c);let l=c[1],u=c[2];Jp(e,t,n,o,c);let d=c[0],f=c[2];Jp(e,t,n,s,c);let p=c[0];i[0]=(c[1]-f)*Wp,i[1]=(u-p)*Wp,i[2]=(d-l)*Wp}function Zp(e,t){e.modules.forceOverLifetime&&Qp(e.advanced.forceOverLifetime,t),e.modules.externalForces&&$p(e.advanced.externalForces,t),e.modules.noise&&sm(e.advanced.noise,t)}function Qp(e,{seed:t,normalizedAge:n,loopAge:r,ageSeconds:i,world:a}){let o=Y(e.multiplier,n,t,r),s=vm(t,11)*e.randomized[0],c=vm(t,23)*e.randomized[1],l=vm(t,37)*e.randomized[2],u=.5*i*i*o;a[0]+=(e.force[0]+s)*u,a[1]+=(e.force[1]+c)*u,a[2]+=(e.force[2]+l)*u}function $p(e,{seed:t,normalizedAge:n,loopAge:r,ageSeconds:i,world:a,velocity:o}){let s=Y(e.gravityMultiplier,n,t,r),c=Y(e.drag,n,t,r),l=.5*i*i;if(a[0]+=e.wind[0]*l,a[1]+=e.wind[1]*l-o[1]*Math.max(0,s-1)*l,a[2]+=e.wind[2]*l,c>0){let e=Math.max(0,1-c*i*.15);a[0]*=e,a[2]*=e}if(Math.abs(e.vortexStrength)>1e-4){let t=e.vortexStrength*i*.03,n=a[0],r=a[2];a[0]+=-r*t,a[2]+=n*t}}var em=.1,tm=1e-6,nm=64,rm=1/120,im={position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]},am={seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:im.position,velocity:im.velocity},om=[0,0,0];function sm(e,{seed:t,normalizedAge:n,loopAge:r,timeSeconds:i,world:a}){let o=Y(e.strength,n,t,r);if(o<=0)return;let s=Math.max(1e-4,e.frequency),c=o,l=0,u=0,d=0;if(e.mode===`curl`){let t=i*e.speed;for(let n=0;n<e.octaves;n++){let r=s*2**n;Xp((a[0]+e.scroll[0]*t)*r+t*.35,(a[1]+e.scroll[1]*t)*r+t*.61,(a[2]+e.scroll[2]*t)*r+t*.83,n*101,om),l+=om[0]*c,u+=om[1]*c,d+=om[2]*c,c*=e.damping}}else{let n=i*e.speed+t*17.17;for(let r=0;r<e.octaves;r++){let i=s*2**r;l+=Math.sin((a[0]+e.scroll[0]*n+t)*i+r*5.31)*c,u+=Math.sin((a[1]+e.scroll[1]*n+t)*i+r*7.13)*c,d+=Math.sin((a[2]+e.scroll[2]*n+t)*i+r*3.77)*c,c*=e.damping}}let f=Math.min(1,Math.max(0,n/em)),p=f*f*(3-2*f);a[0]+=l*p,a[1]+=u*p,a[2]+=d*p}function cm(e,t){let n=e.advanced.collision;if(n.mode!==`plane`)return!0;let r=t.world,i=t.velocity,a=n.planeY+n.radius,o=r[1];if(o<a-n.killBelow)return!1;if(o>=a)return!0;let s=e.modules.velocity?Y(e.forces.gravityValue,t.normalizedAge,t.seed,t.loopAge):0,c=Math.max(0,s),l=i[1],u=a-o,d=l*l-4*c*u,f=1-n.dampen,p=i[0],m=i[2];if(d<=0||l>=0)return r[1]=a,i[0]=p*f,i[1]=0,i[2]=m*f,!0;let h=Math.sqrt(d),g=2*u/(h-l);r[0]-=p*n.dampen*g,r[2]-=m*n.dampen*g,i[0]=p*f,i[2]=m*f;let _=n.bounce*h,v=g;if(c>tm&&_>tm)for(let e=0;e<nm;e++){let e=_/c;if(v<=e)break;if(v-=e,_*=n.bounce,_<=tm){_=0;break}}let y=c<=tm||v<=_/c;return _>tm&&y?(r[1]=a+_*v-c*v*v,i[1]=_-2*c*v):(r[1]=a,i[1]=0),!0}function lm(e,t,n,r,i,a,o,s,c,l,u,d){let f=rm;um(e,t,n,r+f,i,a+f,o,s,c,l,im,am);let p=1/f,m=im.position;return d[0]=(m[0]-u[0])*p,d[1]=(m[1]-u[1])*p,d[2]=(m[2]-u[2])*p,d}function um(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.max(0,r),p=Math.min(1,Math.max(0,f/Math.max(.001,i)));bf(e,t,n,f,p,c,u,l),d.seed=o,d.normalizedAge=p,d.loopAge=s,d.ageSeconds=f,d.timeSeconds=a,Zp(e,d),Tf(e,t,n,u.position,u.velocity,c)}function dm(e,t,n,r,i,a){let o=i?[...i]:e.modules.color?[...Kd(e.color.gradient,t),Zd(e.color.gradient,t)]:[1,1,1,1];if(e.modules.colorBySpeed){let t=e.advanced.colorBySpeed,r=wl(t.speedRange,n),i=[...Kd(t.gradient,r),Zd(t.gradient,r)];o=_m(o,i,t.blend)}return e.modules.lights&&(o=gm(e.advanced.lights,t,n,r,o,a)),[bm(o[0]),bm(o[1]),bm(o[2]),bm(o[3])]}function fm(e,t,n,r){if(!e.modules.sizeBySpeed)return 1;let i=e.advanced.sizeBySpeed,a=wl(i.speedRange,t),o=Y(i.multiplier,a,n,r);return 1+(Math.max(0,o)-1)*i.blend}function pm(e,t,n,r,i){if(!e.modules.rotationBySpeed)return 0;let a=e.advanced.rotationBySpeed,o=wl(a.speedRange,t);return Y(a.angularVelocity,o,r,i)*n*a.blend}function mm(e,t,n,r){let i=Math.max(1,Math.round(e.tiles[0])),a=Math.max(1,Math.round(e.tiles[1])),o=Math.max(1,i*a),s=Math.min(Math.max(0,Math.round(e.startFrame)),o-1),c=typeof e.endFrame==`number`&&Number.isFinite(e.endFrame)?Math.round(e.endFrame):o-1,l=Math.min(Math.max(s,c),o-1)-s+1,u=(e.randomStartFrame?Math.floor(ym(n,71)*l):0)+Y(e.frameOverTime,t,n,r)*Math.max(0,e.cycles);return s+xm(Math.floor(u),l)}function hm(e,t,n,r){let i=Math.max(1,Math.round(e.tiles[0])),a=Math.max(1,Math.round(e.tiles[1])),o=Math.max(1,i*a),s=mm(e,t,n,r);return{frame:s,column:s%i,row:Math.floor(s/i),tilesX:i,tilesY:a,totalFrames:o}}function gm(e,t,n,r,i,a){let o=Y(e.intensity,t,r,a);if(o<=0)return i;let s=Math.max(0,Y(e.radius,t,r,a)),c=o*(s>0?Math.min(1,s/(s+n)):1)*.35;return e.additive?[i[0]+e.color[0]*c,i[1]+e.color[1]*c,i[2]+e.color[2]*c,i[3]]:_m(i,[...e.color,i[3]],c)}function _m(e,t,n){return Xd(e,t,n)}function vm(e,t){return ym(e,t)*2-1}function ym(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function bm(e){return Math.max(0,Math.min(1,e))}function xm(e,t){return(e%t+t)%t}function Sm(e,t=[]){if(!e.nodes.some(e=>e.type===`subgraph`))return e;if(t.length>=32||t.includes(e.id))throw Error(`Recursive material subgraph: ${[...t,e.id].join(` → `)}`);let n={...e,nodes:[...e.nodes],edges:[...e.edges],params:[...e.params]};for(let r of e.nodes.filter(e=>e.type===`subgraph`)){let i=r.params.graph;if(!i?.subgraph)throw Error(`Missing subgraph definition for ${r.id}`);let a=Sm(i,[...t,e.id]),o=`${r.id}/`,s=e=>o+e,c=e=>o+e,l=new Map;for(let e of i.params){let t=n.edges.find(t=>t.id===r.inputs[e.inputId??e.name]);t&&l.set(e.name,t)}let u=(e,t)=>{let n=a.nodes.find(t=>t.id===e),r=n?.type===`param`?l.get(String(n.params.name)):void 0;return r?{source:r.source,sourceHandle:r.sourceHandle}:{source:s(e),sourceHandle:t}},d=a.nodes.filter(e=>e.type!==`output`).map(e=>({...e,id:s(e.id),inputs:Object.fromEntries(Object.entries(e.inputs).map(([e,t])=>[e,t?c(t):null])),params:e.type===`param`?{...e.params,name:o+String(e.params.name)}:{...e.params}})),f=a.edges.filter(e=>a.nodes.find(t=>t.id===e.target)?.type!==`output`).map(e=>({...e,...u(e.source,e.sourceHandle),id:c(e.id),target:s(e.target)})),p=n.edges.filter(e=>e.target!==r.id).map(e=>{if(e.source!==r.id)return e;let t=a.subgraph.outputs.find(t=>t.id===e.sourceHandle);if(!t||!a.nodes.some(e=>e.id===t.nodeId))throw Error(`Missing output ${e.sourceHandle} in subgraph ${i.name}`);return{...e,...u(t.nodeId,t.handle)}});n={...n,subgraph:n.subgraph?{outputs:n.subgraph.outputs.map(e=>{if(e.nodeId!==r.id)return e;let t=a.subgraph.outputs.find(t=>t.id===e.handle);if(!t)throw Error(`Missing output ${e.handle} in subgraph ${i.name}`);let n=u(t.nodeId,t.handle);return{...e,nodeId:n.source,handle:n.sourceHandle}})}:void 0,nodes:[...n.nodes.filter(e=>e.id!==r.id),...d],edges:[...p,...f],params:[...n.params,...a.params.map(e=>({...e,name:o+e.name,builtinRole:void 0}))]}}return n}var Cm=new Set(`param.constant.textureSample.particleSubUV.uv.tilingOffset.multiply.add.subtract.divide.lerp.oneMinus.clamp.step.smoothstep.power.min.max.remap.split.combine.swizzle.desaturate.fresnel.sphereMask.gradientRamp.abs.frac.floor.ceil.round.sign.sqrt.length.normalize.dot.sine.cosine.if.noise.vectorNoise.antialiasedTextureMask.sphericalParticleOpacity.particleMacroUV.output`.split(`.`));function wm(e,t){switch(t){case`R`:case`Param1`:return[e[0],e[0],e[0],e[0]];case`G`:case`Param2`:return[e[1],e[1],e[1],e[1]];case`B`:case`Param3`:return[e[2],e[2],e[2],e[2]];case`A`:case`Param4`:return[e[3],e[3],e[3],e[3]];default:return e}}var Tm=[.2126,.7152,.0722,0];function Em(e){if(Array.isArray(e))return[e[0]??0,e[1]??0,e[2]??0,e[3]??0];if(typeof e==`number`)return[e,e,e,e];if(typeof e==`boolean`){let t=+!!e;return[t,t,t,t]}return[0,0,0,0]}function Dm(e,t){return[e[0]*t[0],e[1]*t[1],e[2]*t[2],e[3]*t[3]]}function Om(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2],e[3]+t[3]]}function km(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2],e[3]-t[3]]}function Am(e,t){return[t[0]===0?0:e[0]/t[0],t[1]===0?0:e[1]/t[1],t[2]===0?0:e[2]/t[2],t[3]===0?0:e[3]/t[3]]}function jm(e,t,n){return[Cp(e[0],t[0],n[0]),Cp(e[1],t[1],n[1]),Cp(e[2],t[2],n[2]),Cp(e[3],t[3],n[3])]}function Mm(e){return e-Math.floor(e)}function Nm(e,t){switch(t){case`g`:return e[1];case`b`:return e[2];case`a`:return e[3];default:return e[0]}}function Pm(e,t){if(e.length===0)return[1,1,1,1];let n=e[0];if(t<=n.position)return[...n.color];let r=e[e.length-1];if(t>=r.position)return[...r.color];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];if(t>=r.position&&t<=i.position){let e=i.position-r.position,n=e<=0?0:(t-r.position)/e;return Xd(r.color,i.color,n)}}return[...r.color]}function Fm(e){if(!Array.isArray(e))return[];let t=[];for(let n of e)if(n&&typeof n==`object`){let e=n;t.push({position:Sp(J(e.position,0),0,1),color:Em(e.color)})}return t}function Im(e){return Array.isArray(e)?[e[0]??0,e[1]??0,e[2]??0,e[3]??0]:[1,1,1,1]}function Lm(e,t,n,r){return e.params.find(e=>e.name===n&&e.type===`color`)?Im(op(e,t,n)):r}function Rm(e,t,n,r){if(!e.params.find(e=>e.name===n))return r;let i=op(e,t,n);return typeof i==`number`?i:r}function zm(e,t,n,r,i){if(i.has(e.id))return[0,0,0,0];i.add(e.id);let a=Hm(e,t,n,r,i);return i.delete(e.id),a}function Bm(e,t,n,r,i,a,o){let s=e.inputs[t];if(!s)return n;let c=a.get(s);if(!c)return n;let l=i.get(c.source);return l?wm(zm(l,r,i,a,o),c.sourceHandle):n}function Vm(e,t,n,r){return lp(t.graph,t.instance,e,n,r)}function Hm(e,t,n,r,i){let a=(a,o)=>Bm(e,a,o,t,n,r,i),o=()=>{if(e.inputs.uv){let e=a(`uv`,[t.uv[0],t.uv[1],0,0]);return[e[0],e[1]]}return[t.uv[0],t.uv[1]]},s=e.params;switch(e.type){case`constant`:return Em(s.value);case`param`:{let e=typeof s.name==`string`?s.name:``;return Em(op(t.graph,t.instance,e))}case`textureSample`:case`particleSubUV`:{let[i,a]=o(),s=Vm(e,t,n,r);if(s.path&&!s.isMainTex&&t.samplerForPath){let n=t.samplerForPath(s.path,[i,a],e);if(n)return n}return[...t.source]}case`uv`:return[t.uv[0],t.uv[1],0,0];case`polarCoordinates`:{let e=a(`UV`,[t.uv[0],t.uv[1],0,0]),n=a(`Center`,Em(s.center??[.5,.5,0,0])),r=a(`Radial Scale`,Em(J(s.radialScale,1)))[0],i=a(`Length Scale`,Em(J(s.lengthScale,1)))[0],o=e[0]-n[0],c=e[1]-n[1];return[Math.hypot(o,c)*2*r,Math.atan2(o,c)/6.28*i,0,0]}case`tilingOffset`:{let e=a(`uv`,[t.uv[0],t.uv[1],0,0]),n=a(`tile`,Em(s.tile??[1,1,0,0])),r=a(`offset`,Em(s.offset));return[e[0]*n[0]+r[0],e[1]*n[1]+r[1],0,0]}case`multiply`:return Dm(a(`a`,Em(J(s.a,1))),a(`b`,Em(J(s.b,1))));case`add`:return Om(a(`a`,Em(J(s.a,0))),a(`b`,Em(J(s.b,0))));case`subtract`:return km(a(`a`,Em(J(s.a,0))),a(`b`,Em(J(s.b,0))));case`divide`:return Am(a(`a`,Em(J(s.a,0))),a(`b`,Em(J(s.b,1))));case`min`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]);return[Math.min(e[0],t[0]),Math.min(e[1],t[1]),Math.min(e[2],t[2]),Math.min(e[3],t[3])]}case`max`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]);return[Math.max(e[0],t[0]),Math.max(e[1],t[1]),Math.max(e[2],t[2]),Math.max(e[3],t[3])]}case`lerp`:return jm(a(`a`,Em(J(s.a,0))),a(`b`,Em(J(s.b,1))),e.inputs.t?a(`t`,[0,0,0,0]):Em(J(s.t,.5)));case`oneMinus`:{let e=a(`in`,[0,0,0,0]);return[1-e[0],1-e[1],1-e[2],1-e[3]]}case`clamp`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.min?a(`min`,[0,0,0,0])[0]:J(s.min,0),r=e.inputs.max?a(`max`,[1,1,1,1])[0]:J(s.max,1);return[Sp(t[0],n,r),Sp(t[1],n,r),Sp(t[2],n,r),Sp(t[3],n,r)]}case`step`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.edge?a(`edge`,[.5,0,0,0])[0]:J(s.edge,.5);return[+(t[0]>=n),+(t[1]>=n),+(t[2]>=n),+(t[3]>=n)]}case`smoothstep`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.edge0?a(`edge0`,[0,0,0,0])[0]:J(s.edge0,0),r=e.inputs.edge1?a(`edge1`,[1,1,1,1])[0]:J(s.edge1,1);return[wp(n,r,t[0]),wp(n,r,t[1]),wp(n,r,t[2]),wp(n,r,t[3])]}case`power`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.exp?a(`exp`,[1,1,1,1]):Em(J(s.exponent,1));return[Math.max(0,t[0])**+n[0],Math.max(0,t[1])**+n[1],Math.max(0,t[2])**+n[2],Math.max(0,t[3])**+n[3]]}case`remap`:{let t=a(`in`,[0,0,0,0]),n=e.inputs.inMin?a(`inMin`,[0,0,0,0])[0]:J(s.inMin,0),r=e.inputs.inMax?a(`inMax`,[1,1,1,1])[0]:J(s.inMax,1),i=e.inputs.outMin?a(`outMin`,[0,0,0,0])[0]:J(s.outMin,0),o=e.inputs.outMax?a(`outMax`,[1,1,1,1])[0]:J(s.outMax,1),c=r-n,l=e=>{let t=c===0?0:(e-n)/c;return i+t*(o-i)};return[l(t[0]),l(t[1]),l(t[2]),l(t[3])]}case`desaturate`:{let e=a(`in`,[0,0,0,0]),t=Sp(J(s.fraction,1),0,1),n=e[0]*Tm[0]+e[1]*Tm[1]+e[2]*Tm[2];return[Cp(e[0],n,t),Cp(e[1],n,t),Cp(e[2],n,t),e[3]]}case`split`:{let e=Nm(a(`in`,[0,0,0,0]),typeof s.channel==`string`?s.channel:`r`);return[e,e,e,e]}case`combine`:return[a(`r`,[0,0,0,0])[0],a(`g`,[0,0,0,0])[0],a(`b`,[0,0,0,0])[0],e.inputs.a?a(`a`,[1,0,0,0])[0]:1];case`swizzle`:{let e=a(`in`,[0,0,0,0]),t=typeof s.pattern==`string`&&s.pattern.length>=4?s.pattern:`rgba`;return[Nm(e,t[0]),Nm(e,t[1]),Nm(e,t[2]),Nm(e,t[3])]}case`fresnel`:{let e=Em(s.center),n=J(s.power,1),r=Math.hypot(t.uv[0]-e[0],t.uv[1]-e[1])*2,i=Math.max(0,1-Math.min(1,r))**+n;return[i,i,i,i]}case`sphereMask`:{let e=Em(s.center),n=J(s.radius,.5),r=Sp(J(s.hardness,.5),0,1),i=Math.hypot(t.uv[0]-e[0],t.uv[1]-e[1]),a=n*(1-r)+1e-4,o=Sp(1-(i-(n-a))/a,0,1);return[o,o,o,o]}case`abs`:{let e=a(`in`,[0,0,0,0]);return[Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2]),Math.abs(e[3])]}case`frac`:{let e=a(`in`,[0,0,0,0]);return[Mm(e[0]),Mm(e[1]),Mm(e[2]),Mm(e[3])]}case`floor`:{let e=a(`in`,[0,0,0,0]);return[Math.floor(e[0]),Math.floor(e[1]),Math.floor(e[2]),Math.floor(e[3])]}case`ceil`:{let e=a(`in`,[0,0,0,0]);return[Math.ceil(e[0]),Math.ceil(e[1]),Math.ceil(e[2]),Math.ceil(e[3])]}case`round`:{let e=a(`in`,[0,0,0,0]);return[Math.round(e[0]),Math.round(e[1]),Math.round(e[2]),Math.round(e[3])]}case`sign`:{let e=a(`in`,[0,0,0,0]);return[Math.sign(e[0]),Math.sign(e[1]),Math.sign(e[2]),Math.sign(e[3])]}case`sqrt`:{let e=a(`in`,[0,0,0,0]);return[Math.sqrt(Math.max(0,e[0])),Math.sqrt(Math.max(0,e[1])),Math.sqrt(Math.max(0,e[2])),Math.sqrt(Math.max(0,e[3]))]}case`length`:{let e=a(`in`,[0,0,0,0]),t=Math.hypot(e[0],e[1],e[2]);return[t,t,t,t]}case`normalize`:{let e=a(`in`,[0,0,0,0]),t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t,e[3]]}case`dot`:{let e=a(`a`,[0,0,0,0]),t=a(`b`,[0,0,0,0]),n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2];return[n,n,n,n]}case`sine`:case`cosine`:{let t=a(`in`,[0,0,0,0]),n=J(s.period,1)||1,r=e.type===`sine`?Math.sin:Math.cos,i=2*Math.PI/n;return[r(t[0]*i),r(t[1]*i),r(t[2]*i),r(t[3]*i)]}case`if`:{let t=a(`a`,[0,0,0,0])[0],n=a(`b`,[0,0,0,0])[0],r=1e-6;return t>n+r?a(`aGreater`,[0,0,0,0]):t<n-r?a(`aLess`,[0,0,0,0]):e.inputs.aEqual?a(`aEqual`,[0,0,0,0]):a(`aGreater`,[0,0,0,0])}case`noise`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]),n=Bp(Op(s),e[0],e[1]);return[n,n,n,n]}case`vectorNoise`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]);return Vp(kp(s),e[0],e[1])}case`antialiasedTextureMask`:{let i=typeof s.channel==`string`?s.channel:`a`,[c,l]=o(),u=Vm(e,t,n,r),d=Nm((u.path&&!u.isMainTex&&t.samplerForPath?t.samplerForPath(u.path,[c,l],e):null)??t.source,i),f=e.inputs.Threshold?a(`Threshold`,[.5,0,0,0])[0]:J(s.threshold,.5),p=Math.max(J(s.softness,.04),1e-4),m=wp(f-p,f+p,d);return[m,m,m,m]}case`sphericalParticleOpacity`:{let n=s.center===void 0?[.5,.5,0,0]:Em(s.center),r=Math.max(J(s.radius,.5),1e-4),i=e.inputs.Density?a(`Density`,[1,0,0,0])[0]:J(s.density,1),o=Math.hypot(t.uv[0]-n[0],t.uv[1]-n[1])/r,c=Sp(Math.max(0,1-o)**+i,0,1);return[c,c,c,c]}case`particleMacroUV`:{let e=a(`Position`,[t.uv[0],t.uv[1],0,0]),n=Em(s.center),r=J(s.radius,512)||1,i=Em(s.tile),o=Em(s.offset);return[(e[0]-n[0])/r*(i[0]||1)+o[0],(e[1]-n[1])/r*(i[1]||1)+o[1],0,0]}case`gradientRamp`:return Pm([...Fm(s.stops)].sort((e,t)=>e.position-t.position),Sp(a(`t`,[t.source[0],0,0,0])[0],0,1));case`output`:return[0,0,0,0];default:return[...t.source]}}function Um(e,t,n={}){e=Sm(e);let r=new Map;for(let t of e.nodes)r.set(t.id,t);let i=new Map;for(let t of e.edges)i.set(t.id,t);let a=t=>{let n=e.outputs[t];if(!n)return null;let a=i.get(n);if(!a)return null;let o=r.get(a.source);return o?{node:o,handle:a.sourceHandle}:null},o=a(`baseColor`),s=a(`opacity`),c=a(`opacityMask`),l=a(`emissive`),u=fp(e),d=u?Lm(e,t,`Tint`,[1,1,1,1]):[1,1,1,1],f=u?Rm(e,t,`Emissive`,0):0,p=u?Rm(e,t,`Opacity`,1):1,m=(e,t,n)=>wm(zm(e.node,t,r,i,n),e.handle);return(r,i)=>{let a={graph:e,instance:t,source:r,uv:i,samplerForPath:n.samplerForPath},u=new Set,h=o?m(o,a,u):[r[0],r[1],r[2],r[3]],g=[h[0],h[1],h[2],0];if(l){let e=1+m(l,a,u)[0];g=[g[0]*e,g[1]*e,g[2]*e,0]}let _=h[3];if(s&&(_=m(s,a,u)[0]),c){let t=e.opacityMaskClipValue??.333;_=m(c,a,u)[0]<t?0:e.blend===`masked`?1:_}else if(e.blend===`masked`){let t=e.opacityMaskClipValue??.333;_=_<t?0:1}return[Sp(g[0]*d[0]*(1+Math.max(0,f)),0,1),Sp(g[1]*d[1]*(1+Math.max(0,f)),0,1),Sp(g[2]*d[2]*(1+Math.max(0,f)),0,1),Sp(_*d[3]*p,0,1)]}}function Wm(e,t,n,r,i,a={}){let o=Um(r,i,a),s=Math.max(1,t),c=Math.max(1,n);for(let t=0;t+3<e.length;t+=4){let n=t/4,r=n%s,i=Math.floor(n/s),a=o([e[t]/255,e[t+1]/255,e[t+2]/255,e[t+3]/255],[s<=1?0:r/(s-1),c<=1?0:i/(c-1)]);e[t]=a[0]*255,e[t+1]=a[1]*255,e[t+2]=a[2]*255,e[t+3]=a[3]*255}}var Gm=new Set([`sceneColor`,`sceneDepth`,`pixelDepth`,`depthFade`,`ddx`,`ddy`,`ddxy`,`parallax`,`parallaxOcclusion`,`triplanar`,`fresnelTrue`,`refraction`,`modulate`,`alphaHoldout`,`metallic`,`roughness`,`specular`,`anisotropy`,`tangent`,`normal`,`normalFromHeight`,`worldPositionOffset`,`tessellation`,`displacement`,`custom`]),Km=new Set([`particleColor`,`particleRelativeTime`,`particleSpeed`,`particleRandom`,`particleSize`,`particleDirection`,`particlePosition`,`particleMacroUV`]),qm=new Set([`particleColor`,`particleRelativeTime`,`particleRandom`]),Jm=new Set([`particleSpeed`,`particleSize`,`particleDirection`,`particlePosition`,`particleMacroUV`]),Ym=new Set([`step`,`smoothstep`,`power`,`desaturate`,`fresnel`,`sphereMask`,`noise`,`vectorNoise`,`antialiasedTextureMask`,`sphericalParticleOpacity`]);function Xm(e){return(e.type===`noise`||e.type===`vectorNoise`)&&e.params.runtime===!0}var Zm=new Set([`panner`,`rotateUV`,`tilingOffset`]);function Qm(e){let t=new Map;for(let n of e.nodes)t.set(n.id,n);let n=new Map,r=new Map;for(let t of e.edges)n.set(t.id,t),r.set(t.id,t.source);return{nodeById:t,edgeById:n,edgeSource:r}}function $m(e){let t=Object.keys(e.outputs);return e.shadingModel===`lit`?t:t.filter(e=>!Zf.includes(e))}function eh(e,t){return e.shadingModel===`lit`&&Zf.some(n=>{let r=e.outputs[n];return!!r&&t.edgeSource.has(r)})}function th(e,t){let n=new Set,r=[];for(let n of $m(e)){let i=e.outputs[n];if(!i)continue;let a=t.edgeSource.get(i);a&&r.push(a)}for(;r.length>0;){let e=r.pop();if(n.has(e))continue;n.add(e);let i=t.nodeById.get(e);if(i)for(let e of Object.values(i.inputs)){if(!e)continue;let i=t.edgeSource.get(e);i&&!n.has(i)&&r.push(i)}}return n}function nh(e,t=Qm(e)){let n=new Set(e.nodes.filter(e=>e.type===`particleColor`).map(e=>e.id)),r=th(e,t),i=!1,a=!1,o=e=>{if(!e)return;let r=t.edgeById.get(e);if(r&&n.has(r.source))switch(r.sourceHandle){case`A`:case`Param4`:a=!0;break;case`R`:case`G`:case`B`:case`RGB`:i=!0;break;default:i=!0,a=!0}};for(let t of Object.values(e.outputs))o(t);for(let e of r){let n=t.nodeById.get(e);if(n){for(let e of Object.values(n.inputs))o(e);n.type===`particleRelativeTime`?a=!0:n.type===`particleRandom`&&(i=!0)}}return{rgb:i,alpha:a}}var rh={R:0,Param1:0,G:1,Param2:1,B:2,Param3:2,A:3,Param4:3};function ih(e,t=Qm(e)){let n=e.outputs.opacity;if(!n)return!0;let r=t.edgeById.get(n),i=r?t.nodeById.get(r.source):void 0;if(!r||!i)return!0;if(i.type!==`constant`)return!1;let a=i.params.value,o=rh[r.sourceHandle]??0;return typeof a==`number`?a===1:typeof a==`boolean`?a:Array.isArray(a)?a[o]===1:!1}function ah(e,t,n=new Set){if(n.has(e.id))return!1;if(n.add(e.id),e.type===`panner`&&uh(e.params.speed)||e.type===`rotateUV`&&J(e.params.speed,0)!==0)return!0;for(let r of Object.values(e.inputs)){if(!r)continue;let e=t.edgeSource.get(r);if(!e)continue;let i=t.nodeById.get(e);if(i&&(i.type===`time`||ah(i,t,n)))return!0}return!1}function oh(e,t,n,r=new Set){if(r.has(e))return!0;r.add(e);let i=!1;for(let a of t.edges){if(a.source!==e)continue;i=!0;let o=n.nodeById.get(a.target);if(!o)return!1;if(o.type!==`textureSample`&&o.type!==`particleSubUV`||a.targetHandle!==`uv`){if(Zm.has(o.type)){if(!oh(o.id,t,n,r))return!1}else return!1}}return i}function sh(e,t){for(let n of $m(e)){let r=e.outputs[n];if(!r)continue;let i=t.edgeSource.get(r);if(!i)continue;let a=t.nodeById.get(i);if(!a||a.type!==`textureSample`&&a.type!==`particleSubUV`)return!1}return!0}function ch(e){try{e=Sm(e)}catch{return{tier:`tier3-defer`,deferredNodeIds:e.nodes.filter(e=>e.type===`subgraph`).map(e=>e.id),vertexUvNodeIds:[],perParticleNodeIds:[]}}let t=Object.values(e.outputs).every(e=>!e)||e.nodes.length===0;if(fp(e)||t)return{tier:`tier1-fixed`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]};let n=Qm(e),r=th(e,n),i=[];for(let e of r){let t=n.nodeById.get(e);t&&Gm.has(t.type)&&i.push(e)}if(i.length>0)return{tier:`tier3-defer`,deferredNodeIds:i,vertexUvNodeIds:[],perParticleNodeIds:[]};if([...r].some(e=>{let t=n.nodeById.get(e);return!!t&&ep.has(t.type)})||eh(e,n))return{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:lh(e,n,r)};let a=[];for(let t of r){let r=n.nodeById.get(t);r&&(r.type===`panner`||r.type===`rotateUV`)&&ah(r,n)&&oh(r.id,e,n)&&a.push(r.id)}let o=new Set(a),s=lh(e,n,r),c=s.length>0;if([...r].some(e=>{let t=n.nodeById.get(e);return t?.type===`twoSidedSign`||t?.type===`polarCoordinates`||t?.type===`panner`&&!!t.inputs.speed&&n.edgeSource.has(t.inputs.speed)}))return{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:s};let l=!1;for(let e of r){let t=n.nodeById.get(e);if(t){if(Zm.has(t.type)){if(ah(t,n)&&!o.has(t.id)){l=!0;break}}else if(t.type===`dynamicParameter`||Xm(t)||Ym.has(t.type)&&fh(t,n)){l=!0;break}}}let u=!0;for(let e of r){let t=n.nodeById.get(e);if(t&&!Cm.has(t.type)){u=!1;break}}return!c&&!l&&a.length===0&&u?{tier:`tier0-bake`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:sh(e,n)?{tier:`tier1-fixed`,deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:s}:!c&&!l&&u?{tier:`tier0-bake`,deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:{tier:`tier2-shader`,deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:s}}function lh(e,t,n){let r=[];for(let i of n){let n=t.nodeById.get(i);n&&(Km.has(n.type)||n.type===`dynamicParameter`||n.type===`param`&&dh(n,e))&&r.push(n.id)}return r}function uh(e){return typeof e==`number`?e!==0:Array.isArray(e)?e.some(e=>typeof e==`number`&&e!==0):!1}function dh(e,t){let n=typeof e.params.name==`string`?e.params.name:``;return t.params.find(e=>e.name===n)?.perParticle===!0}function fh(e,t,n=new Set){if(n.has(e.id))return!1;n.add(e.id);for(let r of Object.values(e.inputs)){if(!r)continue;let e=t.edgeSource.get(r);if(!e)continue;let i=t.nodeById.get(e);if(i&&(i.type===`time`||i.type===`dynamicParameter`||Km.has(i.type)||fh(i,t,n)))return!0}return!1}function ph(e){if(e.perParticleFeed)return e.perParticleFeed;if(e.sliderMin===void 0||e.sliderMax===void 0)return`spawn-color`;let t=e.clampMin??e.sliderMin??0,n=e.clampMax??e.sliderMax??1;return t===n?`spawn-color`:t>=0&&n<=1?`smuggle-8bit`:`mesh-attr`}function mh(e){return Array.isArray(e)?[e[0]??0,e[1]??0,e[2]??0,e[3]??0]:[1,1,1,1]}function hh(e,t,n,r){let i=op(e,t,n);return typeof i==`number`?i:r}function gh(e,t,n,r){let i=fp(e),a={tint:i&&e.params.find(e=>e.name===`Tint`&&e.type===`color`)?mh(op(e,t,`Tint`)):[1,1,1,1],emissive:i&&e.params.some(e=>e.name===`Emissive`)?hh(e,t,`Emissive`,0):0,opacity:i&&e.params.some(e=>e.name===`Opacity`)?hh(e,t,`Opacity`,1):1,blend:e.blend};for(let e of r){let t=n.nodeById.get(e);if(t){if(t.type===`panner`){let e=t.params.speed;a.uvPan={speed:Array.isArray(e)?[J(e[0],0),J(e[1],0)]:[J(t.params.speedX,0),J(t.params.speedY,0)]}}else if(t.type===`rotateUV`){let e=t.params.center;a.uvRotate={speed:J(t.params.speed,0),center:Array.isArray(e)?[J(e[0],.5),J(e[1],.5)]:[.5,.5]}}}}return a}function _h(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return(t>>>0).toString(16).padStart(8,`0`)}function vh(e,t,n){return _h(JSON.stringify({graph:dp(e),instance:hl(t),mainTex:n??null}))}function yh(e,t,n={}){let r=bh(e,t,n),i=!1;try{let t=Sm(e),n=Qm(t);for(let e of th(t,n)){let t=n.nodeById.get(e);if(t&&ep.has(t.type)){i=!0;break}}}catch{i=!1}return{...r,shadingModel:e.shadingModel===`lit`?`lit`:`unlit`,usesSceneLighting:i}}function bh(e,t,n){try{e=Sm(e)}catch(t){return{tier:`tier3-defer`,shaderId:dl,blend:e.blend,perParticleFeeds:{},diagnostics:[t instanceof Error?t.message:String(t)],deferredNodeIds:e.nodes.filter(e=>e.type===`subgraph`).map(e=>e.id),usesParticleColorRGB:!1,usesParticleColorAlpha:!1,opacityIsConstantOne:!1}}let r=n.mainTexUid??null,i=ch(e),a=Qm(e);if(i.tier===`tier0-bake`||i.tier===`tier1-fixed`)for(let n of th(e,a)){let r=a.nodeById.get(n);if(!r||r.type!==`textureSample`&&r.type!==`particleSubUV`&&r.type!==`antialiasedTextureMask`)continue;let o=lp(e,t,r,a.nodeById,a.edgeById);if(o.path&&!o.isMainTex){i.tier=`tier2-shader`,i.vertexUvNodeIds=[];break}}let o=nh(e,a),s=ih(e,a),c=[],l={};for(let t of e.params)t.perParticle&&(l[t.name]=ph(t));switch(i.tier){case`tier3-defer`:{let t=i.deferredNodeIds.map(e=>a.nodeById.get(e)?.type??e).join(`, `);return c.push(`Tier 3: graph reaches deferred node(s) [${t}] \u2014 not rendered in preview, exported data-only (techspec \xA74.2).`),{tier:`tier3-defer`,shaderId:dl,blend:e.blend,perParticleFeeds:l,diagnostics:c,deferredNodeIds:i.deferredNodeIds,usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s}}case`tier0-bake`:return{tier:`tier0-bake`,shaderId:dl,blend:e.blend,bakeHash:vh(e,t,r),fixed:gh(e,t,a,[]),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s};case`tier1-fixed`:return{tier:`tier1-fixed`,shaderId:dl,blend:e.blend,fixed:gh(e,t,a,i.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s};case`tier2-shader`:{let n=`mat-${_h(JSON.stringify(dp(e)))}`;for(let[e,t]of Object.entries(l))t===`mesh-attr`&&c.push(`Tier 2 custom Mesh path required: DynamicParameter "${e}" needs an independent per-particle float attribute; ParticleContainer exposes only vertex/position/rotation/uvs/color.`);let r=i.perParticleNodeIds.map(e=>a.nodeById.get(e)).filter(e=>!!e&&Jm.has(e.type));for(let e of r)c.push(`Tier 2 custom Mesh path required: ${e.type} needs a per-particle attribute that ParticleContainer does not expose.`);let u=i.perParticleNodeIds.map(e=>a.nodeById.get(e)).filter(e=>!!e&&Km.has(e.type)&&!qm.has(e.type)&&!Jm.has(e.type));for(let e of u)c.push(`Tier 2 custom Mesh path required: ${e.type} is not available on the ParticleContainer shader path.`);return{tier:`tier2-shader`,shaderId:n,blend:e.blend,fixed:gh(e,t,a,i.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:o.rgb,usesParticleColorAlpha:o.alpha,opacityIsConstantOne:s}}}}var xh=`
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
`,Sh=`
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
`;function Ch(e){return e.tier===`tier2-shader`&&!e.diagnostics.some(e=>e.includes(`custom Mesh path required`))}function wh({artifact:e,graph:t,instance:n}){if(e.tier===`tier3-defer`)return null;let r=new Th(t,n);return{fragment:r.fragmentSource(e.fixed),samplers:r.samplerBindings(),diagnostics:r.samplerDiagnostics()}}var Th=class e{constructor(e,t){q(this,`graph`,e),q(this,`instance`,t),q(this,`authoredGraph`),q(this,`nodeById`,new Map),q(this,`edgeById`,new Map),q(this,`nodeSamplerUniform`,new Map),q(this,`samplers`,[]),q(this,`samplerDiagnosticMessages`,[]),this.authoredGraph=e,e=Sm(e),this.graph=e;for(let t of e.nodes)this.nodeById.set(t.id,t);for(let t of e.edges)this.edgeById.set(t.id,t);this.collectSamplers()}samplerBindings(){return this.samplers.map(e=>({...e}))}samplerDiagnostics(){return[...this.samplerDiagnosticMessages]}collectSamplers(){let e=this.graph.nodes.filter(e=>e.type===`textureSample`||e.type===`particleSubUV`||e.type===`antialiasedTextureMask`).filter(e=>{let t=this.resolveNodeTexBinding(e);return t.path!==``&&!t.isMainTex}).sort((e,t)=>e.id<t.id?-1:+(e.id>t.id)),t=0;for(let n of e){if(t>=7){this.samplerDiagnosticMessages.push(`Material uses more than 7 per-node textures; node "${n.id}" falls back to MainTex.`);continue}let e=`uTex${t}`;t+=1,this.nodeSamplerUniform.set(n.id,e),this.samplers.push({nodeId:n.id,uniform:e,path:this.resolveNodeTexBinding(n).path})}}resolveNodeTexBinding(e){return lp(this.graph,this.instance,e,this.nodeById,this.edgeById)}header(){let e=this.graph.shadingModel===`lit`||this.graph.nodes.some(e=>ep.has(e.type)||e.type===`unpackNormal`)?`${xh}${Sh}`:xh;return this.graph.nodes.some(e=>e.type===`twoSidedSign`)?`${e}
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
`}nodePreviewFragmentSource(t,n=`out`){let r=this.authoredGraph.nodes.find(e=>e.id===t);if(r?.type===`subgraph`){let i=r.params.graph,a=n===`out`?i.subgraph?.outputs[0]?.id:n;if(!a)return null;let o=`preview:${t}`,s=Sm({...this.authoredGraph,edges:[...this.authoredGraph.edges,{id:o,source:t,sourceHandle:a,target:`preview-output`,targetHandle:`baseColor`}],outputs:{baseColor:o}}),c=s.edges.find(e=>e.id===o);return new e(s,this.instance).nodePreviewFragmentSource(c.source,c.sourceHandle)}let i=this.nodeById.get(t);if(!i)return null;let a=this.evalNode(i,new Set),o=this.select(a,Eh(i,n));return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 value = ${o};
  gl_FragColor = vec4(clamp(value.rgb, 0.0, 1.0), ${i.type===`polarCoordinates`?`1.0`:`clamp(value.a, 0.0, 1.0)`});
}
`}slotExpr(e){let t=this.graph.outputs[e];if(!t)return null;let n=this.edgeById.get(t),r=n?this.nodeById.get(n.source):void 0;return!n||!r?null:this.select(this.evalNode(r,new Set),n.sourceHandle)}slotScalarExpr(e){let t=this.slotExpr(e);return t?`((${t}).r)`:null}evalNode(e,t){if(t.has(e.id))return`vec4(0.0)`;t.add(e.id);let n=this.evalInner(e,t);return t.delete(e.id),n}evalInner(e,t){let n=e.params,r=(n,r)=>{let i=e.inputs[n];if(!i)return r;let a=this.edgeById.get(i),o=a?this.nodeById.get(a.source):void 0;return!a||!o?r:this.select(this.evalNode(o,t),a.sourceHandle)},i=(e,t)=>`(${r(e,this.scalar(t))}).r`,a=()=>e.inputs.uv?`(${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy`:`vUV`;switch(e.type){case`constant`:return this.constVec4(n.value);case`time`:return`vec4(uTime)`;case`twoSidedSign`:return`vec4(materialTwoSidedSign())`;case`param`:{let e=typeof n.name==`string`?n.name:``;return this.constVec4(op(this.graph,this.instance,e))}case`textureSample`:return this.sampleTexture(e,a());case`particleSubUV`:{let t=this.nodeSamplerUniform.get(e.id);return t?`texture2D(${t}, fract(${a()}))`:n.blend===!0?`materialSampleSubUvBlend(${a()})`:`materialSampleMain(${a()})`}case`uv`:return`vec4(vUV, 0.0, 0.0)`;case`tilingOffset`:return`vec4((${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy * (${r(`tile`,this.constVec4(n.tile,[1,1,0,0]))}).xy + (${r(`offset`,this.constVec4(n.offset))}).xy, 0.0, 0.0)`;case`panner`:return`vec4((${r(`uv`,`vec4(vUV, 0.0, 0.0)`)}).xy + (${e.inputs.time?i(`time`,0):`uTime`}) * (${r(`speed`,this.constVec4(n.speed))}).xy, 0.0, 0.0)`;case`polarCoordinates`:{let e=r(`UV`,`vec4(vUV, 0.0, 0.0)`),t=r(`Center`,this.constVec4(n.center,[.5,.5,0,0])),a=i(`Radial Scale`,this.number(n.radialScale,1)),o=i(`Length Scale`,this.number(n.lengthScale,1)),s=`((${e}).xy - (${t}).xy)`;return`vec4(length(${s}) * 2.0 * (${a}), ${`(dot(${s}, ${s}) == 0.0 ? 0.0 : atan((${s}).x, (${s}).y))`} / 6.28 * (${o}), 0.0, 0.0)`}case`rotateUV`:{let e=r(`uv`,`vec4(vUV, 0.0, 0.0)`),t=this.constVec4(n.center,[.5,.5,0,0]),i=this.number(n.speed,0);return`(vec4(((${t}).xy) + mat2(cos(${i.toFixed(8)} * uTime * 6.2831853), sin(${i.toFixed(8)} * uTime * 6.2831853), -sin(${i.toFixed(8)} * uTime * 6.2831853), cos(${i.toFixed(8)} * uTime * 6.2831853)) * ((${e}).xy - (${t}).xy), 0.0, 0.0))`}case`fresnel`:return`vec4(pow(max(0.0, 1.0 - clamp(length(vUV - (${this.constVec4(n.center,[.5,.5,0,0])}).xy) * 2.0, 0.0, 1.0)), ${Math.max(0,this.number(n.power,1)).toFixed(8)}))`;case`sphereMask`:{let e=this.constVec4(n.center,[.5,.5,0,0]),t=Math.max(1e-4,this.number(n.radius,.5)),r=t*(1-Math.max(0,Math.min(1,this.number(n.hardness,.5))))+1e-4;return`vec4(clamp(1.0 - ((length(vUV - (${e}).xy) - ${(t-r).toFixed(8)}) / ${r.toFixed(8)}), 0.0, 1.0))`}case`particleColor`:return`vColor`;case`particleRelativeTime`:return`vec4(clamp(vColor.a, 0.0, 1.0))`;case`particleRandom`:return`vec4(fract(vColor.r + vColor.g * 13.17 + vColor.b * 7.31))`;case`particleSpeed`:case`particleSize`:case`particleDirection`:case`particlePosition`:case`particleMacroUV`:return`vec4(0.0)`;case`dynamicParameter`:return`uDynamicParams`;case`sceneWorldNormal`:return`vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)`;case`sceneWorldPosition`:return`vec4(nfxWorldPosition(), 1.0)`;case`sceneViewDirection`:return`vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)`;case`mainLightDirection`:return`vec4(nfxViewToWorld(nfxMainLightDirectionView()), 0.0)`;case`mainLightColor`:return`vec4(nfxMainLightColor(), 1.0)`;case`sceneAmbientColor`:return`vec4(nfxAmbientColor(), 1.0)`;case`sceneDiffuseLighting`:return`vec4(nfxDiffuseLighting(), 1.0)`;case`unpackNormal`:{let t=e.inputs.strength?i(`strength`,1):this.number(n.strength,1).toFixed(8);return`nfxUnpackNormal(${r(`in`,`vec4(0.5, 0.5, 1.0, 1.0)`)}, ${t})`}case`multiply`:return`((${r(`a`,this.scalar(this.number(n.a,1)))}) * (${r(`b`,this.scalar(this.number(n.b,1)))}))`;case`add`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) + (${r(`b`,this.scalar(this.number(n.b,0)))}))`;case`subtract`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) - (${r(`b`,this.scalar(this.number(n.b,0)))}))`;case`divide`:return`((${r(`a`,this.scalar(this.number(n.a,0)))}) / max(abs(${r(`b`,this.scalar(this.number(n.b,1)))}), vec4(0.000001)))`;case`min`:return`min(${r(`a`,`vec4(0.0)`)}, ${r(`b`,`vec4(0.0)`)})`;case`max`:return`max(${r(`a`,`vec4(0.0)`)}, ${r(`b`,`vec4(0.0)`)})`;case`lerp`:{let t=e.inputs.t?r(`t`,`vec4(0.5)`):this.scalar(this.number(n.t,.5));return`mix(${r(`a`,this.scalar(this.number(n.a,0)))}, ${r(`b`,this.scalar(this.number(n.b,1)))}, ${t})`}case`oneMinus`:return`(vec4(1.0) - (${r(`in`,`vec4(0.0)`)}))`;case`clamp`:{let t=e.inputs.min?i(`min`,0):this.number(n.min,0).toFixed(8),a=e.inputs.max?i(`max`,1):this.number(n.max,1).toFixed(8);return`clamp(${r(`in`,`vec4(0.0)`)}, vec4(${t}), vec4(${a}))`}case`step`:return`step(vec4(${e.inputs.edge?i(`edge`,.5):this.number(n.edge,.5).toFixed(8)}), ${r(`in`,`vec4(0.0)`)})`;case`smoothstep`:return`smoothstep(vec4(${e.inputs.edge0?i(`edge0`,0):this.number(n.edge0,0).toFixed(8)}), vec4(${e.inputs.edge1?i(`edge1`,1):this.number(n.edge1,1).toFixed(8)}), ${r(`in`,`vec4(0.0)`)})`;case`power`:{let t=e.inputs.exp?r(`exp`,`vec4(1.0)`):this.scalar(this.number(n.exponent,1));return`pow(max(${r(`in`,`vec4(0.0)`)}, vec4(0.0)), ${t})`}case`remap`:{let t=r(`in`,`vec4(0.0)`),a=e.inputs.inMin?i(`inMin`,0):this.number(n.inMin,0).toFixed(8),o=e.inputs.inMax?i(`inMax`,1):this.number(n.inMax,1).toFixed(8),s=e.inputs.outMin?i(`outMin`,0):this.number(n.outMin,0).toFixed(8);return`(vec4(${s}) + (((${t}) - vec4(${a})) / max(vec4(${o}) - vec4(${a}), vec4(0.000001))) * (vec4(${e.inputs.outMax?i(`outMax`,1):this.number(n.outMax,1).toFixed(8)}) - vec4(${s})))`}case`desaturate`:{let e=r(`in`,`vec4(0.0)`);return`vec4(mix((${e}).rgb, vec3(materialLuminance((${e}).rgb)), ${Math.max(0,Math.min(1,this.number(n.fraction,1))).toFixed(8)}), (${e}).a)`}case`split`:{let e=this.channel(n.channel);return`((${r(`in`,`vec4(0.0)`)}).${e}${e}${e}${e})`}case`combine`:return`vec4((${r(`r`,`vec4(0.0)`)}).r, (${r(`g`,`vec4(0.0)`)}).r, (${r(`b`,`vec4(0.0)`)}).r, (${e.inputs.a?r(`a`,`vec4(1.0)`):`vec4(1.0)`}).r)`;case`swizzle`:{let e=String(n.pattern??`rgba`).toLowerCase().replace(/[^rgba]/g,``).padEnd(4,`a`).slice(0,4);return`((${r(`in`,`vec4(0.0)`)}).${e})`}case`abs`:return`abs(${r(`in`,`vec4(0.0)`)})`;case`frac`:return`fract(${r(`in`,`vec4(0.0)`)})`;case`floor`:return`floor(${r(`in`,`vec4(0.0)`)})`;case`ceil`:return`ceil(${r(`in`,`vec4(0.0)`)})`;case`round`:return`floor(${r(`in`,`vec4(0.0)`)} + vec4(0.5))`;case`sign`:return`sign(${r(`in`,`vec4(0.0)`)})`;case`sqrt`:return`sqrt(max(${r(`in`,`vec4(0.0)`)}, vec4(0.0)))`;case`length`:return`vec4(length((${r(`in`,`vec4(0.0)`)}).xyz))`;case`normalize`:return`vec4(normalize((${r(`in`,`vec4(0.0)`)}).xyz), (${r(`in`,`vec4(0.0)`)}).a)`;case`dot`:return`vec4(dot((${r(`a`,`vec4(0.0)`)}).xyz, (${r(`b`,`vec4(0.0)`)}).xyz))`;case`sine`:{let e=Math.max(1e-4,this.number(n.period,1));return`sin((${r(`in`,`vec4(0.0)`)}) * ${(Math.PI*2/e).toFixed(8)})`}case`cosine`:{let e=Math.max(1e-4,this.number(n.period,1));return`cos((${r(`in`,`vec4(0.0)`)}) * ${(Math.PI*2/e).toFixed(8)})`}case`if`:{let e=i(`a`,0),t=i(`b`,0);return`((${e}) > (${t}) + 0.000001 ? ${r(`aGreater`,`vec4(0.0)`)} : ((${e}) < (${t}) - 0.000001 ? ${r(`aLess`,`vec4(0.0)`)} : ${r(`aEqual`,r(`aGreater`,`vec4(0.0)`))}))`}case`noise`:{let e=r(`Position`,`vec4(vUV, 0.0, 0.0)`),t=Math.max(1e-4,this.number(n.scale,16)),i=this.number(n.seed,0),a=this.number(n.outputMin,0),o=this.number(n.outputMax,1),s=n.function===`value`?1:n.function===`voronoi`?2:0;return`vec4(materialScalarNoise((${e}).xy, ${t.toFixed(8)}, ${i.toFixed(8)}, ${a.toFixed(8)}, ${o.toFixed(8)}, ${s.toFixed(1)}))`}case`vectorNoise`:{let e=r(`Position`,`vec4(vUV, 0.0, 0.0)`),t=Math.max(1e-4,this.number(n.scale,8)),i=this.number(n.seed,0),a=n.function===`cellnoise`?1:n.function===`voronoi`?2:0;return`vec4(materialScalarNoise((${e}).xy + vec2(17.0, 31.0), ${t.toFixed(8)}, ${i.toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), materialScalarNoise((${e}).xy + vec2(73.0, 11.0), ${t.toFixed(8)}, ${(i+1).toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), materialScalarNoise((${e}).xy + vec2(5.0, 47.0), ${t.toFixed(8)}, ${(i+2).toFixed(8)}, 0.0, 1.0, ${a.toFixed(1)}), 1.0)`}case`antialiasedTextureMask`:{let t=this.sampleTexture(e,a()),r=this.channel(n.channel??`a`),o=e.inputs.Threshold?i(`Threshold`,.5):this.number(n.threshold,.5).toFixed(8),s=Math.max(1e-4,this.number(n.softness,.04));return`vec4(smoothstep((${o}) - ${s.toFixed(8)}, (${o}) + ${s.toFixed(8)}, (${t}).${r}))`}case`sphericalParticleOpacity`:{let t=this.constVec4(n.center,[.5,.5,0,0]),r=Math.max(1e-4,this.number(n.radius,.5)),a=e.inputs.Density?i(`Density`,1):this.number(n.density,1).toFixed(8);return`vec4(clamp(pow(max(0.0, 1.0 - length((vUV - (${t}).xy) / ${r.toFixed(8)})), ${a}), 0.0, 1.0))`}case`gradientRamp`:{let t=e.inputs.t?i(`t`,0):`vUV.x`;return this.gradientExpr(n.stops,t)}default:return`materialSampleMain(vUV)`}}sampleTexture(e,t){let n=this.nodeSamplerUniform.get(e.id);return n?`texture2D(${n}, fract(${t}))`:`materialSampleMain(${t})`}select(e,t){switch(t){case`R`:case`Param1`:return`((${e}).rrrr)`;case`G`:case`Param2`:return`((${e}).gggg)`;case`B`:case`Param3`:return`((${e}).bbbb)`;case`A`:case`Param4`:return`((${e}).aaaa)`;default:return`(${e})`}}constVec4(e,t=[0,0,0,0]){return`vec4(${Dh(e,t).map(e=>this.number(e,0).toFixed(8)).join(`, `)})`}scalar(e){return`vec4(${this.number(e,0).toFixed(8)})`}number(e,t){return J(e,t)}channel(e){let t=typeof e==`string`?e.toLowerCase():`r`;return t===`g`||t===`b`||t===`a`?t:`r`}gradientExpr(e,t){let n=(Array.isArray(e)?e:[]).map(e=>{let t=typeof e==`object`&&e?e:{};return{position:Math.max(0,Math.min(1,this.number(t.position,0))),color:Dh(t.color,[1,1,1,1])}}).sort((e,t)=>e.position-t.position);if(n.length===0)return`vec4(${t})`;let r=this.constVec4(n[0].color);for(let e=1;e<n.length;e++){let i=n[e-1],a=n[e],o=Math.max(1e-4,a.position-i.position),s=`clamp(((${t}) - ${i.position.toFixed(8)}) / ${o.toFixed(8)}, 0.0, 1.0)`;r=`mix(${r}, ${this.constVec4(a.color)}, ${s})`}return r}};function Eh(e,t){return t===`out`&&e.type===`dynamicParameter`?`Param1`:t}function Dh(e,t){if(typeof e==`number`)return[e,e,e,e];if(typeof e==`boolean`){let t=+!!e;return[t,t,t,t]}return Array.isArray(e)?[J(e[0],t[0]),J(e[1],t[1]),J(e[2],t[2]),J(e[3],t[3])]:[...t]}function Oh(e,t={}){let n=new Map,r=new Set,i=e=>{e&&!n.has(e)&&n.set(e,jh(e,r))};for(let n of e.emitters)if(n.enabled){i(n.render.texture);for(let e of[n.render.material,...n.modules.trails?[n.advanced.trails.material]:[]]){let n=e?t.materialGraphProvider?.(e.shaderId):void 0;if(i(e&&cp(n,e)||null),e&&n)for(let t of kh(n,e))i(t)}n.modules.trails&&i(n.advanced.trails.texture)}return[...n.values()]}function kh(e,t){let n=new Set,r=new Map(e.nodes.map(e=>[e.id,e])),i=new Map(e.edges.map(e=>[e.id,e]));for(let a of e.nodes){if(a.type!==`textureSample`&&a.type!==`particleSubUV`&&a.type!==`antialiasedTextureMask`)continue;let o=lp(e,t,a,r,i);o.path&&!o.isMainTex&&n.add(o.path)}return[...n]}function Ah(e){return{type:`texture`,id:Mh(e),path:e}}function jh(e,t){let n=Mh(e),r=n,i=2;for(;t.has(r);)r=`${n}-${i}`,i++;return t.add(r),{type:`texture`,id:r,path:e}}function Mh(e){return(e.split(`/`).pop()??e).replace(/\.[^.]+$/,``).trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`texture`}var Nh={backend:`three3d`,label:`Three World / 3D`,coordinateSpace:`world-3d`,supportsTrue3dQuads:!0,supportsMeshParticles:!0,supportsGpuDepth:!0,supportsProjectedDepthSort:!1,supportsParticleContainerTier2:!1,supportsInstancedMaterialStreams:!0,supportsRuntimeSamplerBindings:!0};function Ph(e,t){return t.length>0?`blocked`:e.length>0?`partial`:`supported`}var Fh=new Set([`subEmitters`,`lights`]);function Ih(e,t){let n=Lh(t,`three3d`),r=Bh(t);return e.emitters.forEach((e,t)=>{let i=`emitters.${t}`;e.mode===`mesh`&&e.mesh.renderMode===`pixiShard`&&n.push({code:`mode.mesh.pixiShard`,path:`${i}.mesh.renderMode`,message:`Old mesh mode is Pixi shard geometry; Three renders true mesh particles only when mesh.renderMode is meshAsset.`,emitterId:e.id,emitterIndex:t}),e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`&&(e.mesh.asset||r.push({code:`mode.meshAsset.missing`,path:`${i}.mesh.asset`,message:`Three mesh particles require a prepared mesh asset ref.`,emitterId:e.id,emitterIndex:t}));for(let[n,a]of Object.entries(e.modules))a&&Fh.has(n)&&r.push({code:`module.${n}`,path:`${i}.modules.${n}`,message:`${n} is not implemented in the Three renderer MVP yet; keep it backend-gated until the Three draw path owns it.`,emitterId:e.id,emitterIndex:t});e.render.material&&e.render.material.shaderId!==`sprite-master`&&n.push({code:`material.threeAdapter`,path:`${i}.render.material`,message:`Three MVP uses the fixed-function particle material adapter; custom graph lowering is backend-gated until the Three material compiler lands.`,emitterId:e.id,emitterIndex:t})}),{backend:Nh.backend,status:Ph(n,r),warnings:Vh(n),blockers:Vh(r),...Rh(t,`three3d`)}}function Lh(e,t){return(e?.warnings??[]).filter(e=>!e.backend||e.backend===t).map(e=>({code:e.code,path:e.path,message:e.message}))}function Rh(e,t){let n=Vh(zh(e,t));return n.length>0?{notes:n}:{}}function zh(e,t){return(e?.infos??[]).filter(e=>!e.backend||e.backend===t).map(e=>({code:e.code,path:e.path,message:e.message}))}function Bh(e){return e?.blockers.map(e=>({code:e.code,path:e.path,message:e.message}))??[]}function Vh(e){let t=new Set,n=[];for(let r of e){let e=`${r.code}:${r.path}:${r.message}`;t.has(e)||(t.add(e),n.push(r))}return n}function Hh(e){let t=e.getAttribute(`position`);if(!t||t.itemSize!==3||t.count===0)return null;let n=t.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3+0]=t.getX(e),r[e*3+1]=t.getY(e),r[e*3+2]=t.getZ(e);let i=null,a=e.getAttribute(`normal`);if(a&&a.itemSize===3&&a.count>=n){i=new Float32Array(n*3);for(let e=0;e<n;e++)i[e*3+0]=a.getX(e),i[e*3+1]=a.getY(e),i[e*3+2]=a.getZ(e)}let o=e.getIndex(),s=null;if(o&&o.count>=3){s=new Uint32Array(o.count);for(let e=0;e<o.count;e++)s[e]=o.getX(e)}return{positions:r,indices:s,normals:i}}function Uh(e,t,n,r){if(!pp(t))return{texture:null,owned:!1};if(t!==`constant`){let r=Wh(e,t,n);if(r)return{texture:r,owned:!0}}return t===`constant`||n?{texture:null,owned:!1}:{texture:e,owned:!1}}function Wh(e,t,n,r){let i=typeof document<`u`?document:void 0;if(!i)return null;let a=e.image,o=Gh(a),s=Kh(a);if(!a||o<=0||s<=0)return null;let c=i.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`,{willReadFrequently:!0});if(!l)return null;try{l.drawImage(a,0,0,o,s);let e=l.getImageData(0,0,o,s);_p(e.data,t,n),l.putImageData(e,0,0)}catch{return null}let u=new bi(c);return u.colorSpace=e.colorSpace,u.flipY=e.flipY,u.wrapS=e.wrapS,u.wrapT=e.wrapT,u.minFilter=e.minFilter,u.magFilter=e.magFilter,u.generateMipmaps=e.generateMipmaps,u.needsUpdate=!0,u}function Gh(e){return e?`naturalWidth`in e&&typeof e.naturalWidth==`number`?e.naturalWidth:`videoWidth`in e&&typeof e.videoWidth==`number`?e.videoWidth:`width`in e&&typeof e.width==`number`?e.width:0:0}function Kh(e){return e?`naturalHeight`in e&&typeof e.naturalHeight==`number`?e.naturalHeight:`videoHeight`in e&&typeof e.videoHeight==`number`?e.videoHeight:`height`in e&&typeof e.height==`number`?e.height:0:0}var qh=64,Jh=1.25,Yh=.44,Xh=.42,Zh=new Map;function Qh(e,t,n=qh){return`proc:${e}:${ig(t).toFixed(3)}:${n}`}function $h(e,t,n=qh){let r=Qh(e,t,n),i=Zh.get(r);if(i)return i;let a=eg(e,t,n);return Zh.set(r,a),a}function eg(e,t,n){let r=Math.max(4,Math.round(n)),i=new Uint8Array(r*r*4),a=r/2,o=ig(t);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let s=n+.5-a,c=t+.5-a,l=e===`square`?ng(s,c,r,o):tg(s,c,r,o),u=(t*r+n)*4;i[u+0]=255,i[u+1]=255,i[u+2]=255,i[u+3]=Math.round(l*255)}let s=new Hr(i,r,r,k);return s.colorSpace=Ue,s.magFilter=d,s.minFilter=p,s.generateMipmaps=!0,s.needsUpdate=!0,s}function tg(e,t,n,r){let i=n*Yh,a=Math.max(r*i,Jh);return rg(Math.hypot(e,t),i,a)}function ng(e,t,n,r){let i=n*Xh,a=Math.max(r*i,Jh);return rg(Math.max(Math.abs(e),Math.abs(t)),i,a)}function rg(e,t,n){let r=Math.min(1,Math.max(0,(e-(t-n))/n));return 1-r*r*(3-2*r)}function ig(e){return Math.round((Number.isFinite(e)?Math.min(1,Math.max(0,e)):0)*1e3)/1e3}function ag(e){let t=e.source.version,n=e.clone();return n.source.version=t,n}var og=new WeakMap;function sg(e){if(e.colorSpace===``)return e;let t=og.get(e);if(t)return t;let n=ag(e);return n.colorSpace=``,og.set(e,n),e.addEventListener(`dispose`,()=>{og.delete(e),n.dispose()}),n}function cg(e){let t=[];for(let n in e.uniforms){let r=e.uniforms[n].value;r?.isTexture&&(t.push([n,r]),e.uniforms[n].value=null)}let n;try{n=e.clone()}finally{for(let[n,r]of t)e.uniforms[n].value=r}for(let[e,r]of t)n.uniforms[e].value=r;return n}function lg(e){return e===`opaque`?0:e===`additive`?2:1}function ug(e,t){let n=e.advanced.trails;if(!n.material)return null;let r=dg({...e,modules:{...e.modules,textureSheetAnimation:!1},render:{...e.render,material:n.material,texture:n.texture,blend:`alpha`,shading:`unlit`,depthTest:n.depthTest,depthWrite:n.depthWrite,opacitySource:`textureAlpha`,opacityInvert:!1}},t),i=r.material;if(i.vertexColors=!0,!(i instanceof Fi)&&i.map&&(n.textureMode===`tile`||r.fixed?.uvPan||r.fixed?.uvRotate)){let e=ag(i.map);e.wrapS=a,e.wrapT=a,i.map=e,r.ownedTextures.push(e)}return i instanceof Fi&&(i.vertexShader=i.vertexShader.replace(`uniform vec4 uDynamicParams;`,`attribute vec4 trailDynamicParams;
varying vec4 uDynamicParams;`).replace(`void main() {`,`void main() {
  uDynamicParams = trailDynamicParams;`).replace(`vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);`,`vColor = vec4(color.rgb * color.a, color.a);`),i.fragmentShader=i.fragmentShader.replace(`uniform vec4 uDynamicParams;`,`varying vec4 uDynamicParams;`)),r.unsupportedFeatures=r.unsupportedFeatures.map(e=>e.replace(`.render.material`,`.advanced.trails.material`)),r}function dg(e,t){let n=e.render.material,r=n?t.materialGraphProvider?.(n.shaderId):void 0,i=fg(e,r),a=gg(e,t,r),o=a.texture,s=[],c=null,l=null,u={rgb:!0,alpha:!0},d=!0,f=null,p=!1,m=o,h=[...a.ownedTextures],g=[mg(e)??hg(e)??``,e.render.opacitySource,Number(e.render.opacityInvert),i?`lit`:`unlit`].join(`:`);if(n){if(g=`${g}:${n.shaderId}`,!r)c=n.shaderId;else{let i=yh(r,n,{mainTexUid:o?o.id:null});if(d=i.opacityIsConstantOne,f=n.shaderId!==`sprite-master`||rp(i.blend)?i.blend:null,n.shaderId!==`sprite-master`&&(u={rgb:i.usesParticleColorRGB,alpha:i.usesParticleColorAlpha}),g=`${g}:${r.side??`double`}:${i.blend}:${i.tier}:${i.bakeHash??i.shaderId}`,i.tier===`tier0-bake`&&o){let a=_g(o,r,n,t);a?(m=a,h.push(a),l=null,p=!0):(l=i.fixed??null,s.push(`${e.id}.render.material: Three could not bake the material texture yet.`))}else l=i.fixed??null;if(i.tier===`tier2-shader`){let a=vg(e,o,r,n,i,t);if(a)return m=null,l=null,h.push(...a.ownedTextures),{material:a.material,ownedTextures:h,fixed:l,particleColorUsage:u,opacityIsConstantOne:d,materialBlend:f,missingMaterialRef:c,unsupportedFeatures:s,key:g};s.push(`${e.id}.render.material: Three preview uses fixed-function material fallback for unsupported Tier-2 shader graphs.`)}i.tier===`tier3-defer`&&s.push(...i.diagnostics)}}let _=n||!m?{texture:null,owned:!1}:Uh(m,e.render.opacitySource,e.render.opacityInvert);_.owned&&_.texture&&h.push(_.texture);let v=ip(e.render.blend,f),y=rp(v),b=p?.001:Math.max(.001,r?.opacityMaskClipValue??.333),x={color:16777215,map:m??null,alphaMap:_.texture,opacity:1,transparent:!y,alphaTest:v===`masked`?b:_.texture?.001:0,depthTest:e.render.depthTest,depthWrite:y?!0:Sd({...e.render,blend:v===`additive`?`additive`:v===`premultiplied`?`premultiplied`:`alpha`}),blending:lg(v),premultipliedAlpha:v===`premultiplied`,side:yg(r)};return{material:i?new Li({...x,metalness:0,roughness:.62}):new Dr(x),ownedTextures:h,fixed:l,particleColorUsage:u,opacityIsConstantOne:d,materialBlend:f,missingMaterialRef:c,unsupportedFeatures:s,key:g}}function fg(e,t){return e.render.shading===`lit`||!!e.render.material&&t?.shadingModel===`lit`}function pg(e){return e instanceof Dr||e instanceof Li||e instanceof Fi}function mg(e,t){let n=e.render.material;return n&&cp(t,n)||e.render.texture}function hg(e,t){return e.mode!==`billboard`||e.render.material||mg(e,t)?null:Qh(e.billboard.shape,e.billboard.softness)}function gg(e,t,n){let r=mg(e,n);if(!r){if(e.render.material){let e=wg();return{texture:e,ownedTextures:e?[e]:[]}}return e.mode===`billboard`?{texture:$h(e.billboard.shape,e.billboard.softness),ownedTextures:[]}:{texture:null,ownedTextures:[]}}return{texture:t.textureProvider?.getTexture(Ah(r))??null,ownedTextures:[]}}function _g(e,t,n,r){let i=Eg(e);if(!i)return null;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;let o=a.getImageData(0,0,i.width,i.height);Wm(o.data,i.width,i.height,t,n,{samplerForPath:(e,t)=>Tg(e,t,r)??null}),a.putImageData(o,0,0);let s=new bi(i);return s.colorSpace=e.colorSpace,s.flipY=e.flipY,s.wrapS=e.wrapS,s.wrapT=e.wrapT,s.minFilter=e.minFilter,s.magFilter=e.magFilter,s.generateMipmaps=e.generateMipmaps,s.needsUpdate=!0,s}function vg(e,t,n,r,i,a){if(!Ch(i))return null;let o=wh({artifact:i,graph:n,instance:r});if(!o)return null;let s=i.fixed??{tint:[1,1,1,1],emissive:0,opacity:1,blend:n.blend},c=e=>e?sg(e):null,l={};for(let e of o.samplers)l[e.uniform]={value:c(a.textureProvider?.getTexture(Ah(e.path))??t)};let u=ip(e.render.blend,i.blend),d=rp(u),f=n.shadingModel===`lit`||!!i.usesSceneLighting;return{material:new Fi({vertexShader:f?xg:bg,fragmentShader:f?`${Sg}${o.fragment}`:o.fragment,lights:f,uniforms:{...f?Mi.clone(K.lights):{},uTexture:{value:c(t)},uTime:{value:0},uFixedTint:{value:new Pt(...s.tint)},uFixedEmissive:{value:Math.max(0,s.emissive)},uFixedOpacity:{value:s.opacity},uClipValue:{value:n.opacityMaskClipValue??.333},uSheetTiles:{value:new ht(...Cg(e))},uSubUv:{value:new Pt(0,0,1,1)},uSubUvFromAttr:{value:0},uParticleColor:{value:new Pt(1,1,1,1)},uDynamicParams:{value:new Pt(0,0,0,0)},...l},transparent:!d,depthTest:e.render.depthTest,depthWrite:d?!0:i.opacityIsConstantOne?Sd({...e.render,blend:u===`additive`?`additive`:u===`premultiplied`?`premultiplied`:`alpha`}):!1,blending:lg(u),premultipliedAlpha:u===`premultiplied`,side:yg(n),forceSinglePass:!(e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`&&!d&&u!==`additive`&&yg(n)===2)}),ownedTextures:[]}}function yg(e){return e?.side===`front`?0:e?.side===`back`?1:2}var bg=`
varying vec2 vUV;
varying vec4 vColor;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,xg=`
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
`,Sg=`#define NFX_SCENE_LIGHTS
#include <common>
#include <lights_pars_begin>
`;function Cg(e){if(!e.modules.textureSheetAnimation)return[1,1];let t=e.advanced.textureSheetAnimation;return[Math.max(1,Math.round(t.tiles[0])),Math.max(1,Math.round(t.tiles[1]))]}function wg(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=1,e.height=1;let t=e.getContext(`2d`);if(!t)return null;t.fillStyle=`#ffffff`,t.fillRect(0,0,1,1);let n=new bi(e);return n.needsUpdate=!0,n}function Tg(e,t,n){let r=n.textureProvider?.getTexture(Ah(e)),i=r?Eg(r):null;if(!i)return null;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;let o=Math.min(i.width-1,Math.max(0,Math.round(t[0]*(i.width-1)))),s=Math.min(i.height-1,Math.max(0,Math.round(t[1]*(i.height-1)))),c=a.getImageData(o,s,1,1).data;return[(c[0]??0)/255,(c[1]??0)/255,(c[2]??0)/255,(c[3]??0)/255]}function Eg(e){if(typeof document>`u`)return null;let t=e.image,n=Dg(t),r=Og(t);if(!t||n<=0||r<=0)return null;let i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});return a?(a.drawImage(t,0,0,n,r),i):null}function Dg(e){return e?`naturalWidth`in e?e.naturalWidth:`videoWidth`in e?e.videoWidth:`displayWidth`in e?e.displayWidth:`width`in e?kg(e.width):0:0}function Og(e){return e?`naturalHeight`in e?e.naturalHeight:`videoHeight`in e?e.videoHeight:`displayHeight`in e?e.displayHeight:`height`in e?kg(e.height):0:0}function kg(e){return typeof e==`number`?e:e&&typeof e==`object`&&`baseVal`in e&&typeof e.baseVal?.value==`number`?e.baseVal.value:0}function Ag(e,t,n,r){let i=zg(r);if(!n.modules.textureSheetAnimation){let n=[Fg(e,i)],r=[Fg(t,i)];return{mapFrames:n,alphaMapFrames:r,shaderMap:e,ownedTextures:i?[...Ig(n),...Ig(r)]:[]}}let a=n.advanced.textureSheetAnimation,o=Math.max(1,Math.round(a.tiles[0])),s=Math.max(1,Math.round(a.tiles[1]));if(o*s<=1){let n=[Fg(e,i)],r=[Fg(t,i)];return{mapFrames:n,alphaMapFrames:r,shaderMap:e,ownedTextures:i?[...Ig(n),...Ig(r)]:[]}}let c=Pg(e,o,s),l=Pg(t,o,s);return{mapFrames:c,alphaMapFrames:l,shaderMap:e,ownedTextures:[...Ig(c),...Ig(l)]}}function jg(e,t,n,r){return e.modules.textureSheetAnimation?hm(e.advanced.textureSheetAnimation,t,n,r).frame:0}function Mg(e,t,n,r,i){let a=Lg(t.mapFrames,n),o=Lg(t.alphaMapFrames,n),s=a.texture,c=o.texture;Rg(a,r,i),Rg(o,r,i),e.map!==s&&(e.map=s,e.needsUpdate=!0),e.alphaMap!==c&&(e.alphaMap=c,e.alphaTest=c?.001:0,e.needsUpdate=!0)}function Ng(e,t,n,r,i){let a=Lg(t.mapFrames,n);Rg(a,r,i);let o=e.uniforms.uSubUv?.value,s=a.texture;o&&(o.set(s?.offset.x??a.offsetX,s?.offset.y??a.offsetY,s?.repeat.x??a.repeatX,s?.repeat.y??a.repeatY),e.uniformsNeedUpdate=!0);let c=e.uniforms.uTexture,l=t.shaderMap??a.texture;c&&c.value!==l&&(c.value=l,e.uniformsNeedUpdate=!0)}function Pg(e,t,n){if(!e)return[Fg(null,!1)];let r=[];for(let i=0;i<t*n;i++){let a=i%t,o=Math.floor(i/t);r.push(Fg(e,!0,{offsetX:e.offset.x+a*e.repeat.x/t,offsetY:e.offset.y+(n-o-1)*e.repeat.y/n,repeatX:e.repeat.x/t,repeatY:e.repeat.y/n}))}return r}function Fg(e,t,n){let r=t&&e?ag(e):e;return{texture:r,offsetX:n?.offsetX??r?.offset.x??0,offsetY:n?.offsetY??r?.offset.y??0,repeatX:n?.repeatX??r?.repeat.x??1,repeatY:n?.repeatY??r?.repeat.y??1,centerX:r?.center.x??0,centerY:r?.center.y??0,rotation:r?.rotation??0}}function Ig(e){return e.map(e=>e.texture).filter(e=>!!e)}function Lg(e,t){return e[Bg(t,e.length)]??e[0]}function Rg(e,t,n){let r=e.texture;if(!r)return;let i=t?.uvPan,a=t?.uvRotate;r.repeat.set(e.repeatX,e.repeatY),r.offset.set(e.offsetX+(i?.speed[0]??0)*n*e.repeatX,e.offsetY+(i?.speed[1]??0)*n*e.repeatY),a?(r.center.set(e.offsetX+a.center[0]*e.repeatX,e.offsetY+a.center[1]*e.repeatY),r.rotation=a.speed*n*Math.PI*2):(r.center.set(e.centerX,e.centerY),r.rotation=e.rotation)}function zg(e){let t=e?.uvPan,n=e?.uvRotate;return!!(t&&(Math.abs(t.speed[0])>1e-6||Math.abs(t.speed[1])>1e-6)||n&&Math.abs(n.speed)>1e-6)}function Bg(e,t){return t<=0?0:(e%t+t)%t}function Vg(e){let t=e.getIndex();if(t){for(let e=0;e<t.count-2;e+=3){let n=t.getX(e+1);t.setX(e+1,t.getX(e+2)),t.setX(e+2,n)}t.needsUpdate=!0}else for(let t of Object.values(e.attributes))Hg(t,1,2);Ug(e.getAttribute(`normal`),3),Ug(e.getAttribute(`tangent`),3)}function Hg(e,t,n){if(!(e instanceof tr))return;let r=e.itemSize,i=e.array;for(let a=0;a<e.count-2;a+=3){let e=(a+t)*r,o=(a+n)*r;for(let t=0;t<r;t++){let n=i[e+t];i[e+t]=i[o+t],i[o+t]=n}}e.needsUpdate=!0}function Ug(e,t){if(!(e instanceof tr))return;let n=e.itemSize,r=e.array,i=Math.min(n,t);for(let t=0;t<e.count;t++){let e=t*n;for(let t=0;t<i;t++)r[e+t]=-(r[e+t]??0)}e.needsUpdate=!0}var Wg=65472,Gg=Math.log2(1+Wg),Kg=1.6,qg=.65;function Jg(e,t){return Yg(e,t,[0,0,0])}function Yg(e,t,n){let r=2**n_(t,-2,2),i=e[0]*r,a=e[1]*r,o=e[2]*r,s=Math.max(i,a,o);if(s<=1)return n[0]=i,n[1]=a,n[2]=o,n;let c=i*.59719+a*.35458+o*.04823,l=i*.076+a*.90834+o*.01566,u=i*.0284+a*.13383+o*.83777,d=Zg(c),f=Zg(l),p=Zg(u),m=n_(d*1.60475+f*-.53108+p*-.07367,0,1),h=n_(d*-.10208+f*1.10813+p*-.00605,0,1),g=n_(d*-.00327+f*-.07276+p*1.07602,0,1);if(i>=s){let e=n_((i-Math.max(a,o))/i,0,1),t=Math.log2(Math.max(1,s)),n=e*n_((t-1)/8,0,1);n>0&&(m=Qg(m,1,n),h=Qg(h,.92*(1-Math.exp(-t/10)),n),g=Qg(g,.62*(1-Math.exp(-t/16)),n))}return n[0]=m,n[1]=h,n[2]=g,n}function Xg(e,t,n,r=.5){let i=Jg(e,n),a=$g(e,t,r),o=Math.max(a[0],a[1],a[2]);if(o<=0)return i;let s=Math.max(e[0],e[1],e[2])>1?1/o:1,c=1+t_(o)*qg;return[Math.max(i[0],a[0]*s*c),Math.max(i[1],a[1]*s*c),Math.max(i[2],a[2]*s*c)]}function Zg(e){let t=Math.max(0,e),n=t*(t+.0245786)-90537e-9,r=t*(.983729*t+.432951)+.238081;return r>0?n/r:0}function Qg(e,t,n){return e+(t-e)*n}function $g(e,t,n){let r=Math.max(e[0],e[1],e[2]);if(r<=0)return[0,0,0];let i=e_(r,t,n);return[e[0]*i,e[1]*i,e[2]*i]}function e_(e,t,n){if(t<=0)return 1;let r=Math.max(0,t*n),i=Math.max(e-t,0);if(r<=0)return n_(i/e,0,1);let a=n_(e-t+r,0,r*2),o=a*a/(4*r);return n_(Math.max(i,o)/e,0,1)}function t_(e){let t=n_(Math.max(0,e),0,Wg);return Gg>0?(Math.log2(1+t)/Gg)**+Kg:0}function n_(e,t,n){return Math.min(n,Math.max(t,e))}var r_=`
attribute vec3 aInstanceColor;
attribute float aInstanceAlpha;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vUv = uv;
  vInstanceColor = vec4(aInstanceColor, aInstanceAlpha);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,i_=`
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
`;function a_(e,t){return!(!t||e.mode!==`billboard`||e.render.shading!==`unlit`||e.render.material||e.modules.trails||e.modules.textureSheetAnimation||e.render.opacitySource!==`textureAlpha`||e.render.opacityInvert||e.render.blend!==`alpha`&&e.render.blend!==`additive`)}var o_=class{constructor(e,t,n,r){q(this,`mesh`),q(this,`geometry`),q(this,`material`),q(this,`colors`),q(this,`alphas`),q(this,`depths`),q(this,`colorAttribute`),q(this,`alphaAttribute`),q(this,`sortScratch`,null),q(this,`depthWriteAuthored`);let i=Math.max(1,Math.floor(n));this.geometry=e.clone(),this.colors=new Float32Array(i*3),this.alphas=new Float32Array(i),this.depths=new Float32Array(i),this.colorAttribute=new Ur(this.colors,3),this.alphaAttribute=new Ur(this.alphas,1),this.colorAttribute.setUsage(Ye),this.alphaAttribute.setUsage(Ye),this.geometry.setAttribute(`aInstanceColor`,this.colorAttribute),this.geometry.setAttribute(`aInstanceAlpha`,this.alphaAttribute),this.depthWriteAuthored=Sd(r.render),this.material=new Fi({vertexShader:r_,fragmentShader:i_,uniforms:{uTexture:{value:t}},transparent:!0,depthTest:r.render.depthTest,depthWrite:this.depthWriteAuthored,blending:r.render.blend===`additive`?2:1,side:2,toneMapped:!1}),this.mesh=new Zr(this.geometry,this.material,i),this.mesh.instanceMatrix.setUsage(Ye),this.mesh.count=0,this.mesh.visible=!1,this.mesh.frustumCulled=!1}setRenderState(e){this.material.depthTest=e.render.depthTest,this.depthWriteAuthored=Sd(e.render),this.material.depthWrite=this.depthWriteAuthored,this.material.blending=e.render.blend===`additive`?2:1}write(e,t,n,r,i=0){this.mesh.setMatrixAt(e,t);let a=e*3;this.colors[a+0]=n.r,this.colors[a+1]=n.g,this.colors[a+2]=n.b,this.alphas[e]=r,this.depths[e]=i}sortByCameraDistance(e,t){if(e<=1)return;let n=this.ensureSortScratch(),r=n.order;for(let t=0;t<e;t++)r[t]=t;let i=this.depths;r.subarray(0,e).sort(t?(e,t)=>(i[t]??0)-(i[e]??0):(e,t)=>(i[e]??0)-(i[t]??0));let a=!0;for(let t=0;t<e;t++)if(r[t]!==t){a=!1;break}if(a)return;let o=this.mesh.instanceMatrix.array;n.matrices.set(o.subarray(0,e*16)),n.colors.set(this.colors.subarray(0,e*3)),n.alphas.set(this.alphas.subarray(0,e));for(let t=0;t<e;t++){let e=r[t]??t,i=e*16,a=t*16;for(let e=0;e<16;e++)o[a+e]=n.matrices[i+e]??0;let s=e*3,c=t*3;this.colors[c+0]=n.colors[s+0]??0,this.colors[c+1]=n.colors[s+1]??0,this.colors[c+2]=n.colors[s+2]??0,this.alphas[t]=n.alphas[e]??0}}ensureSortScratch(){if(!this.sortScratch){let e=this.alphas.length;this.sortScratch={order:new Uint32Array(e),matrices:new Float32Array(e*16),colors:new Float32Array(e*3),alphas:new Float32Array(e)}}return this.sortScratch}commit(e){if(this.mesh.count=e,this.mesh.visible=e>0,!(e<=0)){if(this.depthWriteAuthored){let t=!0;for(let n=0;n<e;n++)if((this.alphas[n]??0)<.999){t=!1;break}this.material.depthWrite=t}this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0}}setRenderOrder(e){this.mesh.renderOrder=e}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}},s_=2135587861,c_=1/60,l_=new Ei(1,1),u_=new H(...bp),d_=new H(...yp),f_=class{constructor(e){q(this,`options`,e),q(this,`root`,new mn),q(this,`stats`,U_()),q(this,`effect`),q(this,`runner`),q(this,`emitterViews`,[]),q(this,`debugTransforms`,[]),q(this,`emitterLayerRanks`,[]),q(this,`position`),q(this,`seed`),q(this,`timeSeconds`),q(this,`paused`,!1),q(this,`destroyed`,!1),q(this,`visible`,!0),q(this,`captureDebugTransforms`),q(this,`renderOrder`,0),q(this,`camera`),q(this,`previewBloomEnabled`),q(this,`previewBloomThreshold`),q(this,`previewExposureStops`),q(this,`scratchWorld`,new H),q(this,`scratchAlignmentAxis`,new H),q(this,`scratchRight`,new H),q(this,`scratchForward`,new H),q(this,`scratchQuaternion`,new gt),q(this,`scratchRollQuaternion`,new gt),q(this,`scratchEuler`,new Yt),q(this,`scratchMatrix`,new zt),q(this,`scratchBasisMatrix`,new zt),q(this,`scratchPivotMatrix`,new zt),q(this,`scratchScale`,new H),q(this,`scratchColor`,new W),q(this,`motionScratch`,{position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]}),q(this,`motionModuleScratch`,{seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:this.motionScratch.position,velocity:this.motionScratch.velocity}),q(this,`sampleSizeScratch`,{x:1,y:1,z:1}),q(this,`initialColorScratch`,[1,1,1,1]),q(this,`secondaryColorScratch`,[1,1,1,1]),q(this,`moduleColorScratch`,[1,1,1,1]),q(this,`hdrColorScratch`,[1,1,1]),q(this,`renderColorScratch`,[1,1,1]),q(this,`analyticVelocityScratch`,[0,0,0]),q(this,`preCollisionWorldScratch`,[0,0,0]),q(this,`effectiveAlignmentVelocity`,[0,0,0]),q(this,`emissionOverrides`,new Map),q(this,`renderGeometryOverrides`,new Map),q(this,`renderGeometryGeneration`,0),q(this,`emitterDrawParameters`,new Map),q(this,`emissionBoundSources`,new Map),q(this,`sampleScratch`,{visible:!0,position:[0,0,0],velocity:[0,0,0],speed:0,normalizedAge:0,loopAge:0,start:0,seed:0,width:1,height:1,depthScale:1,depth:0,rotation:[0,0,0],color:new W,shaderColor:[1,1,1],trailColor:[1,1,1,1],alpha:1,alignmentAxis:new H,normal:new H,emissiveStrength:0,textureFrameIndex:0}),this.effect=m_(e.effect),this.camera=e.camera,this.runner=new _f(this.effect),this.position=q_(e.position??[0,0,0]),this.captureDebugTransforms=e.captureDebugTransforms!==!1,this.seed=X_(e.seed),this.timeSeconds=Math.max(0,e.timeSeconds??0),this.previewBloomThreshold=Math.max(0,e.previewBloomThreshold??1),this.previewBloomEnabled=e.previewBloomEnabled===!0,this.previewExposureStops=Y_(e.previewExposureStops??0,-2,2),this.runner.setRuntimeParameters(e.runtimeParameters??{}),this.syncEmissionGeometries(),this.setTransform({position:this.position,rotation:e.rotation,scale:e.scale}),e.autoStart!==!1&&this.play()}get isActive(){return this.runner.isActive}play(){this.destroyed||(this.paused=!1,this.runner.isActive?this.runner.resumeEmission():this.runner.reset(this.effect,this.position,this.timeSeconds,this.seed),this.draw(this.timeSeconds))}pause(){this.paused=!0}stop(){this.runner.stop(),this.clearViews(),this.syncStats(0,0,0,0,0)}allowCompletion(){this.runner.allowCompletion()}setRuntimeParameters(e){this.runner.setRuntimeParameters(e)}setRenderOrder(e){this.renderOrder=Number.isFinite(e)?e:0,this.root.renderOrder=this.renderOrder;for(let e=0;e<this.emitterViews.length;e++){let t=this.emitterViews[e];if(!t)continue;let n=this.emitterLayerRanks[e]??e;t.instanced?.setRenderOrder(this.renderOrder+n),t.trailMesh.renderOrder=this.renderOrder+n}}seek(e){if(this.destroyed)return;let t=Math.max(0,Number.isFinite(e)?e:0);this.timeSeconds=0,this.runner.reset(this.effect,this.position,0,this.seed);let n=0;for(;n<t;){let e=Math.min(c_,t-n);n+=e,this.runner.update(e,n)}this.timeSeconds=t,this.draw(t)}update(e){if(this.destroyed||this.paused)return;let t=Math.max(0,Number.isFinite(e)?e:0);this.timeSeconds+=t,this.syncEmissionGeometries(),t>0&&this.runner.update(t,this.timeSeconds),this.draw(this.timeSeconds)}setEmitterRuntimeParameters(e,t){if(this.destroyed)return;let{sizeMultiplier:n,colorTint:r,sizeMultiplierValue:i,colorOverLifetimeGradient:a,...o}=t;if((o.emissionRateMultiplier!==void 0||o.initialVelocityMultiplier!==void 0)&&this.runner.setEmitterRuntimeParameters(e,o),n===void 0&&r===void 0&&i===void 0&&a===void 0)return;let s=this.emitterDrawParameters.get(e)??{sizeMultiplier:1,colorTint:[1,1,1,1],sizeMultiplierValue:null,colorOverLifetimeGradient:null};n!==void 0&&(s.sizeMultiplier=Number.isFinite(n)?Math.max(0,n):1),r!==void 0&&(s.colorTint=[J_(r[0]),J_(r[1]),J_(r[2]),J_(r[3])]),i!==void 0&&(s.sizeMultiplierValue=i?Vd(Bd(i,1,0,100)):null),a!==void 0&&(s.colorOverLifetimeGradient=a?Wd(a,[1,1,1,1],[1,1,1,1]):null),this.emitterDrawParameters.set(e,s)}emitBurst(e,t={}){return this.destroyed?0:(this.paused=!1,this.runner.isActive||this.play(),this.syncEmissionGeometries(),this.runner.emitBurst(e,t))}restart(){this.destroyed||(this.paused=!1,this.seek(0))}setRenderGeometry(e,t){if(!this.destroyed){if(t)this.renderGeometryOverrides.set(e,{geometry:t,generation:++this.renderGeometryGeneration});else{if(!this.renderGeometryOverrides.has(e))return;this.renderGeometryOverrides.delete(e)}this.ensureViews()}}setEmissionGeometry(e,t){this.destroyed||(t?this.emissionOverrides.set(e,t):this.emissionOverrides.delete(e),this.emissionBoundSources.delete(e),this.syncEmissionGeometries())}syncEmissionGeometries(){for(let e of this.effect.emitters){if(e.spawn.shape!==`mesh`)continue;let t=this.emissionOverrides.get(e.id),n=!t&&e.spawn.meshAsset?this.options.meshProvider?.getMeshGeometry(e.spawn.meshAsset)??null:null,r=t??n;if(this.emissionBoundSources.get(e.id)===r&&this.emissionBoundSources.has(e.id))continue;let i=r?Hh(r):null;this.runner.setEmissionGeometry(e.id,i),this.emissionBoundSources.set(e.id,r)}}setTransform(e){e.position&&(this.position[0]=e.position[0],this.position[1]=e.position[1],this.position[2]=e.position[2],this.runner.setPosition(this.position),this.root.position.set(e.position[0],e.position[1],e.position[2])),e.rotation&&this.root.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),e.scale&&this.root.scale.set(e.scale[0],e.scale[1],e.scale[2])}setVisible(e){this.visible=e,this.root.visible=e}setCamera(e){this.camera=e,this.draw(this.timeSeconds)}setPreviewBloomOptions(e){typeof e.enabled==`boolean`&&(this.previewBloomEnabled=e.enabled),this.previewBloomThreshold=Math.max(0,e.threshold??this.previewBloomThreshold),this.previewExposureStops=Y_(e.exposureStops??this.previewExposureStops,-2,2),this.draw(this.timeSeconds)}updateDefinition(e,t={}){return this.effect=m_(e),this.runner.updateDefinition(this.effect),this.emissionBoundSources.clear(),this.syncEmissionGeometries(),t.preserveViews||this.rebuildViews(),this.effect}getParticleDebugTransforms(e=[]){return e.push(...this.debugTransforms),e}destroy(){this.destroyed||(this.destroyed=!0,this.stop(),this.rebuildViews(),this.root.removeFromParent())}draw(e){if(!this.visible)return;this.ensureViews(),this.debugTransforms.length=0,E_(this.runner.definition.emitters,this.emitterLayerRanks);let t=0,n=0,r=0,i=0,a=0;for(let o=0;o<this.effect.emitters.length;o++){let s=this.runner.definition.emitters[o],c=this.runner.states[o],l=this.emitterViews[o];if(!s||!c||!l||!s.enabled){l&&(V_(l,0),l.instanced?.commit(0),S_(l),l.trailMesh.removeFromParent());continue}let u=this.drawEmitter(l,s,c,o,e);t+=u.visibleParticles,n+=u.bloomSourceParticles,r+=u.drawCalls,i+=u.instancedDrawCalls,a+=u.legacyParticleDrawCalls}this.syncStats(t,n,r,i,a)}drawEmitter(e,t,n,r,i){if(t.mode===`mesh`&&t.mesh.renderMode===`meshAsset`&&!this.renderGeometryOverrides.has(t.id)&&(!t.mesh.asset||!this.options.meshProvider?.getMeshGeometry(t.mesh.asset)))return V_(e,0),e.instanced?.commit(0),S_(e),e.trailMesh.removeFromParent(),W_();let a=ip(t.render.blend,e.materialBlend),o=rp(a);e.material.depthTest=t.render.depthTest;let s=o?!0:Sd({...t.render,blend:a===`additive`?`additive`:a===`premultiplied`?`premultiplied`:`alpha`}),c=lg(a),l=a===`premultiplied`;e.material.depthWrite=s,e.material.blending=c,e.material.premultipliedAlpha=l,e.instanced?.setRenderState(t),e.trailResolution||(e.trailMaterial.depthTest=t.render.depthTest,e.trailMaterial.depthWrite=s,e.trailMaterial.blending=c,e.trailMaterial.premultipliedAlpha=l,o&&(e.trailMaterial.transparent=!1)),o&&(e.material.transparent=!1),b_(e,t,this.position);let u=0,d=0,f=0,p=0;e.instanced&&L_(n,t.render.sortMode,e.particleOrder);for(let a=0;a<n.activeCount;a++){let o=e.instanced?e.particleOrder[a]??a:a,s=this.sampleParticle(t,n,o,i,e.materialFixed,e.materialParticleColorUsage);if(s?.visible){if(e.instanced){let n=this.applySampleToInstanced(e.instanced,s,e,t,r,o,u);f+=n,p+=s.start}else{let n=this.acquireMesh(e,u);this.applySampleToMesh(n,s,e,t,r,o,i)}u++,y_(e,t,s,i),s.emissiveStrength>this.previewBloomThreshold&&d++}}V_(e,u),e.instanced&&u>1&&(t.render.sortMode===`distanceFarFirst`?e.instanced.sortByCameraDistance(u,!0):t.render.sortMode===`distanceNearFirst`&&e.instanced.sortByCameraDistance(u,!1)),e.instanced?.commit(u),e.instanced?.setRenderOrder(D_(this.renderOrder+(this.emitterLayerRanks[r]??r),t.render.sortMode,u>0?f/u:0,u>0?p/u:0));let m=0;return t.modules.trails?(e.trailMesh.parent||this.root.add(e.trailMesh),e.trailMesh.renderOrder=this.renderOrder+(this.emitterLayerRanks[r]??r),x_(e,t,this.camera,i),m=+!!e.trailMesh.visible):(S_(e),e.trailMesh.removeFromParent()),{visibleParticles:u,bloomSourceParticles:d,drawCalls:(u>0?e.instanced?1:u:0)+m,instancedDrawCalls:u>0&&e.instanced?1:0,legacyParticleDrawCalls:e.instanced?0:u}}sampleParticle(e,t,n,r,i,a){let o=t.instanceData,s=n*18,c=o[s+3]??0,l=Math.max(.001,o[s+7]??.001),u=r-c,d=u/l;if(d<-1e-6||d>1.000001)return;let f=Y_(d,0,1),p=Math.max(0,u),m=Y_(t.age/Math.max(.001,e.duration),0,1),h=o[s+8]??.5,g=bf(e,t,n,p,f,this.position,this.motionScratch,this.runner.effectiveInitialVelocityMultiplier(e.id)),_=g.velocity,v=g.position,y=Math.hypot(_[0],_[1],_[2]),b=e.render.alignAxis===`velocity`;b&&(this.analyticVelocityScratch[0]=_[0],this.analyticVelocityScratch[1]=_[1],this.analyticVelocityScratch[2]=_[2]);let x=this.motionModuleScratch;if(x.seed=h,x.normalizedAge=f,x.loopAge=m,x.ageSeconds=p,x.timeSeconds=r,x.world=v,x.velocity=_,Zp(e,x),Tf(e,t,n,v,_,this.position),b&&(Sf(e,t,n,this.analyticVelocityScratch),this.preCollisionWorldScratch[0]=v[0],this.preCollisionWorldScratch[1]=v[1],this.preCollisionWorldScratch[2]=v[2]),e.modules.collision&&!cm(e,x))return;let S=R_(e,t,n,f,y,h,m,this.sampleSizeScratch),C=(o[s+13]??0)+p*(o[s+15]??0),w=(o[s+14]??0)+p*(o[s+16]??0),T=xp(o[s+9]??0,o[s+10]??0,p,pm(e,y,p,h,m)),E=ed(e.initializeParticle.color,h,f,m,this.initialColorScratch,this.secondaryColorScratch),D=Math.max(0,Y(e.initializeParticle.color.intensity,f,h,m)),O=this.emitterDrawParameters.get(e.id),k=O?.colorOverLifetimeGradient?z_(O.colorOverLifetimeGradient,f,this.moduleColorScratch):!e.modules.colorBySpeed&&!e.modules.lights?B_(e,f,this.moduleColorScratch):dm(e,f,y,h,void 0,m),A=i?.tint??[1,1,1,1],ee=i?1+Math.max(0,i.emissive):1,te=i?.opacity??1,j=a.rgb?E[0]*D*k[0]:1,M=a.rgb?E[1]*D*k[1]:1,ne=a.rgb?E[2]*D*k[2]:1,re=a.alpha?E[3]*k[3]:1,ie=this.hdrColorScratch;ie[0]=Math.max(0,j*A[0]*ee),ie[1]=Math.max(0,M*A[1]*ee),ie[2]=Math.max(0,ne*A[2]*ee);let ae=this.previewBloomEnabled?Xg(ie,this.previewBloomThreshold,this.previewExposureStops):Yg(ie,this.previewExposureStops,this.renderColorScratch),oe=this.scratchColor.setRGB(ae[0],ae[1],ae[2],Ue),se=Y_(re*A[3]*te,0,1),ce=_,le=y;if(b){let i=lm(e,t,n,p,l,r,h,m,this.position,this.runner.effectiveInitialVelocityMultiplier(e.id),this.preCollisionWorldScratch,this.effectiveAlignmentVelocity);i[0]+=_[0]-this.analyticVelocityScratch[0],i[1]+=_[1]-this.analyticVelocityScratch[1],i[2]+=_[2]-this.analyticVelocityScratch[2],ce=i,le=Math.hypot(i[0],i[1],i[2])}let ue=this.resolveParticleAlignmentAxis(e,t,n,ce,le),N=this.sampleScratch;N.visible=!0,N.position[0]=v[0],N.position[1]=v[1],N.position[2]=v[2],N.velocity[0]=_[0],N.velocity[1]=_[1],N.velocity[2]=_[2],N.speed=y,N.normalizedAge=f,N.loopAge=m,N.start=c,N.seed=h;let de=xf(t,n);if(N.width=S.x*(de?e.spawn.scale[0]:1),N.height=S.y*(de?e.spawn.scale[1]:1),N.depthScale=S.z*(de?e.spawn.scale[2]:1),N.depth=v[2],N.rotation[0]=C,N.rotation[1]=w,N.rotation[2]=T+(de&&e.render.alignAxis===`screen`?e.spawn.rotation[2]*Math.PI/180:0),N.color.copy(oe),N.shaderColor[0]=ae[0],N.shaderColor[1]=ae[1],N.shaderColor[2]=ae[2],N.alpha=se,e.modules.trails&&e.advanced.trails.material&&(N.trailColor[0]=E[0]*D*k[0],N.trailColor[1]=E[1]*D*k[1],N.trailColor[2]=E[2]*D*k[2],N.trailColor[3]=E[3]*k[3]),N.alignmentAxis.copy(ue),N.normal.copy(ue),N.emissiveStrength=Math.max(ie[0],ie[1],ie[2]),N.textureFrameIndex=jg(e,f,h,m),O){let e=O.sizeMultiplier;O.sizeMultiplierValue&&(e*=Math.max(0,Hd(O.sizeMultiplierValue,f,h))),N.width*=e,N.height*=e,N.depthScale*=e;let t=O.colorTint;N.color.r*=t[0],N.color.g*=t[1],N.color.b*=t[2],N.shaderColor[0]*=t[0],N.shaderColor[1]*=t[1],N.shaderColor[2]*=t[2],N.alpha*=t[3];for(let e=0;e<4;e++)N.trailColor[e]*=t[e]}return N}resolveParticleAlignmentAxis(e,t,n,r,i){let a=this.scratchAlignmentAxis;if(e.render.alignAxis===`screen`)return a.copy(d_).applyQuaternion(this.camera.quaternion),G_(a,d_);if(e.render.alignAxis===`velocity`){if(a.set(r[0],r[1],r[2]),i>1e-6)return G_(a,u_);let o=n*3;a.set(t.spawnDirectionData[o+0]??0,t.spawnDirectionData[o+1]??1,t.spawnDirectionData[o+2]??0);let s=[a.x,a.y,a.z];return Sf(e,t,n,s),a.set(...s),G_(a,u_)}if(e.render.alignAxis===`spawnDirection`){let r=n*3;a.set(t.spawnDirectionData[r+0]??0,t.spawnDirectionData[r+1]??1,t.spawnDirectionData[r+2]??0);let i=[a.x,a.y,a.z];return Sf(e,t,n,i),a.set(...i),G_(a,u_)}return a.set(e.render.alignmentVector[0],e.render.alignmentVector[1],e.render.alignmentVector[2]),G_(a,d_)}applySampleOrientation(e,t){if(t.render.alignAxis===`screen`&&t.render.facing===`cameraPlane`){this.scratchQuaternion.copy(this.camera.quaternion),this.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1),e.normal.copy(G_(this.scratchForward,u_));return}let n=G_(this.scratchAlignmentAxis.copy(e.alignmentAxis),d_);if(t.render.facing===`off`){this.scratchQuaternion.setFromUnitVectors(u_,n),e.normal.copy(n);return}t.render.facing===`cameraPosition`?this.scratchForward.set(this.camera.position.x-e.position[0],this.camera.position.y-e.position[1],this.camera.position.z-e.position[2]):(this.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1));let r=G_(this.scratchForward,u_),i=this.scratchRight.crossVectors(n,r);i.lengthSq()<=1e-6?(K_(n,i),r.crossVectors(i,n)):(i.normalize(),r.crossVectors(i,n)),G_(r,u_),this.scratchBasisMatrix.makeBasis(i,n,r),this.scratchQuaternion.setFromRotationMatrix(this.scratchBasisMatrix),e.normal.copy(r)}applySampleToMesh(e,t,n,r,i,a,o){let s=Array.isArray(e.material)?e.material[0]:e.material;if(!s||!pg(s))return;if(s instanceof Fi)__(s,r,n.textureFrames,t,t.textureFrameIndex,n.materialFixed,n.materialBlend,n.materialOpacityIsConstantOne,o);else{Mg(s,n.textureFrames,t.textureFrameIndex,n.materialFixed,o);let e=ip(r.render.blend,n.materialBlend);s.depthTest=r.render.depthTest,s.color.copy(t.color),rp(e)?(s.depthWrite=!0,s.blending=lg(e),s.opacity=e===`opaque`?1:t.alpha,s.transparent=!1):(s.depthWrite=Sd({...r.render,blend:e===`additive`?`additive`:e===`premultiplied`?`premultiplied`:`alpha`},t.alpha),s.blending=lg(e),s.premultipliedAlpha=e===`premultiplied`,s.opacity=t.alpha,s.transparent=t.alpha<1||e===`additive`||e===`premultiplied`||g_(s,r)),`emissive`in s&&(s.emissive.copy(t.color),s.emissiveIntensity=Math.max(0,t.emissiveStrength-1)),s.needsUpdate=!0}this.scratchWorld.set(t.position[0],t.position[1],t.position[2]),e.renderOrder=D_(this.renderOrder+(this.emitterLayerRanks[i]??i),r.render.sortMode,this.scratchWorld.distanceToSquared(this.camera.position),t.start);let c=this.writeSampleMatrix(t,n,r,i,a);e.matrixAutoUpdate=!1,e.matrix.copy(c),e.matrixWorldNeedsUpdate=!0,e.visible=!0}applySampleToInstanced(e,t,n,r,i,a,o){let s=this.writeSampleMatrix(t,n,r,i,a),c=t.position[0]-this.camera.position.x,l=t.position[1]-this.camera.position.y,u=t.position[2]-this.camera.position.z,d=c*c+l*l+u*u;return e.write(o,s,t.color,t.alpha,d),d}writeSampleMatrix(e,t,n,r,i){this.applySampleOrientation(e,n),this.scratchEuler.set(e.rotation[0],e.rotation[1],e.rotation[2]),this.scratchRollQuaternion.setFromEuler(this.scratchEuler),this.scratchQuaternion.multiply(this.scratchRollQuaternion),this.scratchScale.set(e.width,e.height,n.mode===`mesh`&&n.mesh.renderMode===`meshAsset`?e.depthScale:1),this.scratchWorld.set(e.position[0]-this.position[0],e.position[1]-this.position[1],e.position[2]-this.position[2]),this.scratchMatrix.compose(this.scratchWorld,this.scratchQuaternion,this.scratchScale);let a=n.mode===`mesh`?n.mesh.pivot[0]*t.pivotBoundsSize[0]:n.billboard.pivot[0]*t.pivotBoundsSize[0],o=n.mode===`mesh`?n.mesh.pivot[1]*t.pivotBoundsSize[1]:n.billboard.pivot[1]*t.pivotBoundsSize[1],s=n.mode===`mesh`?n.mesh.pivot[2]*t.pivotBoundsSize[2]:0;return(a!==0||o!==0||s!==0)&&(this.scratchPivotMatrix.makeTranslation(-a,-o,-s),this.scratchMatrix.multiply(this.scratchPivotMatrix)),this.captureDebugTransforms&&this.debugTransforms.push({emitterId:n.id,emitterIndex:r,particleIndex:i,mode:n.mode===`billboard`?`billboard`:n.mesh.renderMode===`meshAsset`?`meshAsset`:`pixiShard`,position:[...e.position],normal:[e.normal.x,e.normal.y,e.normal.z],width:e.width,height:e.height,depth:e.depth,localBounds:t.debugBounds,matrix:this.scratchMatrix.toArray()}),this.scratchMatrix}acquireMesh(e,t){let n=e.meshes[t];if(n)return n;let r=e.material instanceof Fi?cg(e.material):e.material.clone();return n=new zr(e.geometry,r),n.frustumCulled=!1,e.meshes[t]=n,this.root.add(n),n}ensureViews(){for(let e=0;e<this.effect.emitters.length;e++){let t=this.effect.emitters[e],n={effect:this.effect,renderGeometryOverride:this.renderGeometryOverrides.get(t.id)??null},r=F_(t,this.options,n);if(this.emitterViews[e]?.staticKey===r)continue;this.emitterViews[e]&&H_(this.emitterViews[e]);let i=h_(t,this.options,n);this.emitterViews[e]=i,i.instanced&&this.root.add(i.instanced.mesh)}for(;this.emitterViews.length>this.effect.emitters.length;){let e=this.emitterViews.pop();e&&H_(e)}}rebuildViews(){for(let e of this.emitterViews)H_(e);this.emitterViews.length=0}clearViews(){for(let e of this.emitterViews)V_(e,0),e.instanced?.commit(0)}syncStats(e,t,n,r,i){this.stats.activeParticles=this.runner.stats.activeParticles,this.stats.visibleParticles=e,this.stats.capacity=this.runner.stats.capacity,this.stats.emittedLastFrame=this.runner.stats.emittedLastFrame,this.stats.bloomSourceParticles=t,this.stats.drawCalls=n,this.stats.instancedDrawCalls=r,this.stats.legacyParticleDrawCalls=i,this.stats.missingMeshRefs=this.collectMissingMeshRefs(),this.stats.missingMaterialRefs=this.collectMissingMaterialRefs();let a=this.emitterViews.flatMap(e=>e.unsupportedFeatures);this.stats.unsupportedFeatures=[...Ih(this.effect).blockers.map(e=>`${e.path}: ${e.message}`),...a]}collectMissingMeshRefs(){let e=[];for(let t of this.effect.emitters)t.mode===`mesh`&&t.mesh.renderMode===`meshAsset`&&t.mesh.asset&&!this.renderGeometryOverrides.has(t.id)&&!this.options.meshProvider?.getMeshGeometry(t.mesh.asset)&&e.push(t.mesh.asset),t.spawn.shape===`mesh`&&t.spawn.meshAsset&&!this.emissionOverrides.has(t.id)&&!this.options.meshProvider?.getMeshGeometry(t.spawn.meshAsset)&&e.push(t.spawn.meshAsset);return e}collectMissingMaterialRefs(){let e=new Set;for(let t of this.emitterViews)t.missingMaterialRef&&e.add(t.missingMaterialRef),t.trailResolution?.missingMaterialRef&&e.add(t.trailResolution.missingMaterialRef);return[...e]}},p_=class{constructor(e){q(this,`options`,e),q(this,`backendId`,`three3d`),q(this,`capabilities`,Nh),q(this,`root`,new mn),q(this,`stats`,{...U_(),effectCount:0}),q(this,`instances`,new Set),q(this,`camera`),q(this,`previewBloomEnabled`),q(this,`previewBloomThreshold`),q(this,`previewExposureStops`),q(this,`destroyed`,!1),this.camera=e.camera,this.previewBloomThreshold=Math.max(0,e.previewBloomThreshold??1),this.previewBloomEnabled=e.previewBloomEnabled===!0,this.previewExposureStops=Y_(e.previewExposureStops??0,-2,2);let t=e.parent??e.scene;t&&this.mount(t)}mount(e){this.root.parent!==e&&e.add(this.root)}unmount(){this.root.removeFromParent()}createEffect(e,t={}){if(this.destroyed)throw Error(`ThreeVfxRenderer is destroyed.`);let n=new f_({effect:e,camera:this.camera,textureProvider:this.options.textureProvider,meshProvider:this.options.meshProvider,materialProvider:this.options.materialProvider,materialGraphProvider:this.options.materialGraphProvider,position:t.position,rotation:t.rotation,scale:t.scale,seed:t.seed,timeSeconds:t.timeSeconds,autoStart:t.autoStart,runtimeParameters:t.runtimeParameters,previewBloomEnabled:this.previewBloomEnabled,previewBloomThreshold:this.previewBloomThreshold,previewExposureStops:this.previewExposureStops,captureDebugTransforms:this.options.captureDebugTransforms});return this.instances.add(n),this.root.add(n.root),this.refreshStats(),n}removeEffect(e,t=!0){this.instances.delete(e)&&(this.root.remove(e.root),t&&e.destroy(),this.refreshStats())}update(e){for(let t of this.instances)t.update(e);this.refreshStats()}getSupport(e){return Ih(e)}setCamera(e){this.camera=e;for(let t of this.instances)t.setCamera(e)}setPreviewBloomOptions(e){typeof e.enabled==`boolean`&&(this.previewBloomEnabled=e.enabled),this.previewBloomThreshold=Math.max(0,e.threshold??this.previewBloomThreshold),this.previewExposureStops=Y_(e.exposureStops??this.previewExposureStops,-2,2);for(let e of this.instances)e.setPreviewBloomOptions({enabled:this.previewBloomEnabled,threshold:this.previewBloomThreshold,exposureStops:this.previewExposureStops});this.refreshStats()}destroy(){if(!this.destroyed){this.destroyed=!0;for(let e of[...this.instances])this.removeEffect(e,!0);this.unmount()}}refreshStats(){let e=U_();for(let t of this.instances)e.activeParticles+=t.stats.activeParticles,e.visibleParticles+=t.stats.visibleParticles,e.capacity+=t.stats.capacity,e.emittedLastFrame+=t.stats.emittedLastFrame,e.bloomSourceParticles+=t.stats.bloomSourceParticles,e.drawCalls+=t.stats.drawCalls,e.instancedDrawCalls+=t.stats.instancedDrawCalls,e.legacyParticleDrawCalls+=t.stats.legacyParticleDrawCalls,e.missingMeshRefs.push(...t.stats.missingMeshRefs),e.missingMaterialRefs.push(...t.stats.missingMaterialRefs),e.unsupportedFeatures.push(...t.stats.unsupportedFeatures);Object.assign(this.stats,e,{effectCount:this.instances.size})}};function m_(e){return Z_(e)?td({app:`vfx-editor`,kind:`particle-effect`,version:1,targetProfile:e.targetProfile,id:e.id,name:e.name,timeline:e.timeline,emitters:e.emitters}):td(e)}function h_(e,t,n){let r=e.mode===`mesh`&&e.mesh.renderMode===`meshAsset`,i=r?e.mesh.asset:null,a=(r?n.renderGeometryOverride?.geometry??(i?t.meshProvider?.getMeshGeometry(i):null):null)??l_,o=r&&(e.mesh.flipWinding||e.mesh.recomputeNormals)?a.clone():null,s=o??a;o&&e.mesh.flipWinding&&Vg(o),o&&e.mesh.recomputeNormals&&o.computeVertexNormals();let c=O_(s),l=k_(s),u=t.materialProvider?.getParticleMaterial?.(n.effect,e.id)??null,d=u&&pg(u)?u:null,f=dg(e,t);d&&f.material.dispose();let p=d?null:f.material instanceof Fi?T_(f.material,`uTexture`):f.material.map,m=Ag(p,d||f.material instanceof Fi?null:f.material.alphaMap,e,d?null:f.fixed),h=!d&&a_(e,p)?new o_(s,p,e.maxParticles,e):null,g=new gr,_=ug(e,t),v=_?.material??new Dr({transparent:!0,vertexColors:!0,depthTest:e.render.depthTest,depthWrite:Sd(e.render),blending:e.render.blend===`additive`?2:1,premultipliedAlpha:e.render.blend===`premultiplied`,side:2}),y=_&&!(v instanceof Fi)?Ag(v.map,v.alphaMap,{...e,modules:{...e.modules,textureSheetAnimation:!1}},_.fixed):null,b=new zr(g,v);return b.frustumCulled=!1,b.visible=!1,{key:I_(e,d?`host`:f.key),staticKey:F_(e,t,n),meshes:[],instanced:h,particleOrder:new Uint32Array(Math.max(1,e.maxParticles)),geometry:s,ownedGeometry:o,pivotBoundsSize:c,debugBounds:l,trailMesh:b,trailGeometry:g,trailMaterial:v,trailResolution:_,trailTextureFrames:y,trailHistories:new Map,trailEmitterPosition:[0,0,0],material:d??f.material,ownedTextures:[...f.ownedTextures,...m.ownedTextures,..._?.ownedTextures??[],...y?.ownedTextures??[]],textureFrames:m,materialFixed:d?null:f.fixed,materialParticleColorUsage:d?{rgb:!0,alpha:!0}:f.particleColorUsage,materialOpacityIsConstantOne:!d&&f.opacityIsConstantOne,materialBlend:d?null:f.materialBlend,missingMaterialRef:d?null:f.missingMaterialRef,unsupportedFeatures:[...f.unsupportedFeatures,..._?.unsupportedFeatures??[]],hostMaterial:d!==null}}function g_(e,t){return e.alphaMap!==null||e.map!==null&&t.render.opacitySource===`textureAlpha`}function __(e,t,n,r,i,a,o,s,c){Ng(e,n,i,a,c),(e.uniforms.uParticleColor?.value)?.set(r.shaderColor[0],r.shaderColor[1],r.shaderColor[2],r.alpha);let l=ip(t.render.blend,o);e.depthTest=t.render.depthTest,rp(l)?(e.transparent=!1,e.depthWrite=!0,e.blending=lg(l)):(e.transparent=!s||r.alpha<1||l===`additive`||l===`premultiplied`,e.depthWrite=Sd({...t.render,blend:l===`additive`?`additive`:l===`premultiplied`?`premultiplied`:`alpha`},s?r.alpha:0),e.blending=lg(l),e.premultipliedAlpha=l===`premultiplied`),e.needsUpdate=!0;let u=e.uniforms.uDynamicParams?.value,d=v_(t,r);u?.set(d[0],d[1],d[2],d[3]),e.uniforms.uTime&&(e.uniforms.uTime.value=c),e.uniformsNeedUpdate=!0}function v_(e,t){if(!e.modules.customData)return[0,0,0,0];let n=e.advanced.customData.channels;return[Y(n[0],t.normalizedAge,t.seed,t.loopAge),Y(n[1],t.normalizedAge,t.seed,t.loopAge),Y(n[2],t.normalizedAge,t.seed,t.loopAge),Y(n[3],t.normalizedAge,t.seed,t.loopAge)]}function y_(e,t,n,r){if(!t.modules.trails)return;let i=t.advanced.trails;if(n.seed>=i.ratio)return;let a=Math.max(.001,Y(i.lifetime,n.normalizedAge,n.seed,n.loopAge)),o=Math.max(0,Y(i.length,n.normalizedAge,n.seed,n.loopAge)),s=Math.max(.001,Y(i.width,n.normalizedAge,n.seed,n.loopAge)),c=`${n.start.toFixed(6)}:${n.seed.toFixed(6)}`,l=e.trailHistories.get(c);l||(l={points:[],lastSeenFrame:r},e.trailHistories.set(c,l));let u=new H(n.position[0],n.position[1],n.position[2]),d=e.trailResolution?n.trailColor:[n.color.r,n.color.g,n.color.b,n.alpha],f=l.points,p=f[f.length-1];!p||p.position.distanceTo(u)>=i.minVertexDistance?f.push({dynamicParams:e.trailResolution?v_(t,n):null,position:u,timeSeconds:r,lifetimeSeconds:a,distanceFromHead:0,color:[d[0],d[1],d[2]],alpha:d[3],width:s,maxLength:o>0?o:void 0,seed:n.seed}):(p.dynamicParams=e.trailResolution?v_(t,n):null,p.position.copy(u),p.timeSeconds=r,p.lifetimeSeconds=a,p.color=[d[0],d[1],d[2]],p.alpha=d[3],p.width=s,p.maxLength=o>0?o:void 0,p.seed=n.seed),l.lastSeenFrame=r,w_(f,o>0?o:void 0,r)}function b_(e,t,n){let r=e.trailEmitterPosition;if(t.modules.trails&&!t.advanced.trails.worldSpace&&e.trailHistories.size>0){let t=n[0]-r[0],i=n[1]-r[1],a=n[2]-r[2];if(t!==0||i!==0||a!==0)for(let n of e.trailHistories.values())for(let e of n.points)e.position.x+=t,e.position.y+=i,e.position.z+=a}r[0]=n[0],r[1]=n[1],r[2]=n[2]}function x_(e,t,n,r){if(!t.modules.trails){S_(e);return}let i=[],a=[],o=[],s=[],c=[],l=[],u=t.advanced.trails,d=[1,1,1,1],f=e.trailResolution,p=e.trailMaterial instanceof Fi;e.trailMaterial instanceof Fi&&e.trailMaterial.uniforms.uTime&&(e.trailMaterial.uniforms.uTime.value=r),e.trailTextureFrames&&!(e.trailMaterial instanceof Fi)&&Mg(e.trailMaterial,e.trailTextureFrames,0,f?.fixed??null,r);let m=new W;for(let[t,h]of e.trailHistories){if(w_(h.points,void 0,r),h.points.length<2){h.points.length===0&&e.trailHistories.delete(t);continue}let g=h.points,_=Math.max(g[0]?.distanceFromHead??1,1),v=i.length/3;for(let e=0;e<g.length;e++){let t=g[e],l=g[Math.min(e+1,g.length-1)]??t,h=g[Math.max(e-1,0)]??t,v=t.maxLength;if(v!==void 0&&t.distanceFromHead>v)continue;let y=Y_(t.distanceFromHead/(v??_),0,1),b=1-Y_((r-t.timeSeconds)/t.lifetimeSeconds,0,1),x=t.color[0],S=t.color[1],C=t.color[2],w=t.alpha;if(!u.inheritColor){let e=vp(u,1-b,y,d);m.setRGB(e[0],e[1],e[2],f?void 0:Ue),x=m.r,S=m.g,C=m.b,w=e[3]}else if(u.color){let e=Kd(u.color,y);m.setRGB(e[0],e[1],e[2],f?void 0:Ue),x=m.r,S=m.g,C=m.b,w=Zd(u.color,y)}if(f&&(f.particleColorUsage.rgb||(x=1,S=1,C=1),f.particleColorUsage.alpha||(w=1)),f&&!p){let e=f.particleColorUsage,t=f.fixed,n=t?.tint??[1,1,1,1],r=1+Math.max(0,t?.emissive??0);m.setRGB((e.rgb?x:1)*n[0]*r,(e.rgb?S:1)*n[1]*r,(e.rgb?C:1)*n[2]*r,Ue),x=m.r,S=m.g,C=m.b,w=(e.alpha?w:1)*n[3]*(t?.opacity??1)}w*=(1-y)*b;let T=t.width*Math.max(0,Y(u.widthOverTrail,y,t.seed));if(w<=.01||T<=1e-4)continue;let E=new H().subVectors(l.position,h.position);E.lengthSq()<=1e-7&&E.set(0,1,0),E.normalize();let D=new H().subVectors(n.position,t.position);D.lengthSq()<=1e-7&&D.set(0,0,1),D.normalize();let O=new H().crossVectors(E,D);if(O.lengthSq()<=1e-7&&O.copy(d_),O.normalize().multiplyScalar(T*.5),i.push(t.position.x-O.x,t.position.y-O.y,t.position.z-O.z,t.position.x+O.x,t.position.y+O.y,t.position.z+O.z),a.push(x,S,C,w,x,S,C,w),f){let e=u.textureMode===`tile`?t.distanceFromHead:t.distanceFromHead/Math.max(g[0].distanceFromHead,1e-6);o.push(e,0,e,1),t.dynamicParams&&c.push(...t.dynamicParams,...t.dynamicParams),s.push(D.x,D.y,D.z,D.x,D.y,D.z)}}let y=i.length/3-v;for(let e=0;e<y/2-1;e++){let t=v+e*2;l.push(t,t+1,t+2,t+1,t+3,t+2)}}i.length===0||l.length===0?C_(e):(e.trailGeometry.setAttribute(`position`,new ir(i,3)),e.trailGeometry.setAttribute(`color`,new ir(a,4)),f&&(e.trailGeometry.setAttribute(`trailDynamicParams`,new ir(c,4)),e.trailGeometry.setAttribute(`uv`,new ir(o,2)),e.trailGeometry.setAttribute(`normal`,new ir(s,3))),e.trailGeometry.setIndex(l),e.trailGeometry.computeBoundingSphere(),e.trailMesh.visible=!0)}function S_(e){e.trailHistories.clear(),C_(e)}function C_(e){e.trailMesh.visible=!1,e.trailGeometry.setIndex([]),e.trailGeometry.deleteAttribute(`position`),e.trailGeometry.deleteAttribute(`color`),e.trailGeometry.deleteAttribute(`trailDynamicParams`),e.trailGeometry.deleteAttribute(`uv`),e.trailGeometry.deleteAttribute(`normal`)}function w_(e,t,n){let r=0;for(let t=e.length-1;t>=0;t--){let n=e[t],i=e[t+1];i&&(r+=n.position.distanceTo(i.position)),n.distanceFromHead=r}for(;e.length>0&&(t!==void 0&&e[0].distanceFromHead>t&&e.length>1||n-e[0].timeSeconds>e[0].lifetimeSeconds);)e.shift()}function T_(e,t){let n=e.uniforms[t]?.value;return n&&n instanceof Nt?n:null}function E_(e,t){t.length=e.length;let n=e.map((e,t)=>({index:t,orderInLayer:e.render.orderInLayer}));n.sort((e,t)=>e.orderInLayer-t.orderInLayer||e.index-t.index);let r=-1,i=null;for(let e of n)(i===null||e.orderInLayer!==i)&&(r+=1,i=e.orderInLayer),t[e.index]=r}function D_(e,t,n,r){let i=e;switch(t){case`distanceNearFirst`:return i+Math.min(.999999,Math.max(0,n)/(1+Math.max(0,n)));case`oldestFirst`:return i+.5-.499999*Math.tanh(r);case`youngestFirst`:return i+.5+.499999*Math.tanh(r);default:return i}}function O_(e){e.boundingBox||e.computeBoundingBox();let t=e.boundingBox;return t?[Math.max(0,t.max.x-t.min.x),Math.max(0,t.max.y-t.min.y),Math.max(0,t.max.z-t.min.z)]:[1,1,0]}function k_(e){e.boundingBox||e.computeBoundingBox();let t=e.boundingBox;return t?{min:[t.min.x,t.min.y,t.min.z],max:[t.max.x,t.max.y,t.max.z]}:{min:[-.5,-.5,0],max:[.5,.5,0]}}var A_=new WeakMap;function j_(e){if(!e)return``;let t=A_.get(e);return t===void 0&&(t=JSON.stringify(e),A_.set(e,t)),t}var M_=new WeakMap,N_=1;function P_(e){if(!e)return 0;let t=M_.get(e);return t===void 0&&(t=N_++,M_.set(e,t)),t}function F_(e,t,n){let r=e.render.material?t.materialGraphProvider?.(e.render.material.shaderId):void 0,i=t.materialProvider?.getParticleMaterial?.(n.effect,e.id);return[e.mode,e.maxParticles,e.mesh.renderMode,e.mesh.asset?.path??``,n.renderGeometryOverride?`hostgeo:${n.renderGeometryOverride.generation}`:``,i?`hostmat:${i.uuid}`:``,Number(e.mesh.flipWinding),Number(e.mesh.recomputeNormals),mg(e)??hg(e)??``,e.render.material?.shaderId??``,j_(e.advanced.trails.material),e.advanced.trails.material?JSON.stringify([e.advanced.trails.texture,e.advanced.trails.textureMode,e.advanced.trails.depthTest,e.advanced.trails.depthWrite,P_(t.materialGraphProvider?.(e.advanced.trails.material.shaderId))]):``,r?.side??`double`,r?.blend??`normal`,e.render.shading,e.render.blend,Number(e.render.depthTest),Number(Sd(e.render))].join(`|`)}function I_(e,t){return[e.mode,e.maxParticles,e.mesh.renderMode,e.mesh.asset?.path??``,Number(e.mesh.flipWinding),Number(e.mesh.recomputeNormals),t,e.render.shading,e.render.blend,Number(e.render.depthTest),Number(Sd(e.render))].join(`|`)}function L_(e,t,n){let r=Math.min(e.activeCount,n.length);for(let e=0;e<r;e++)n[e]=e;if(t!==`oldestFirst`&&t!==`youngestFirst`)return;let i=t===`oldestFirst`?(e,t)=>e>t:(e,t)=>e<t,a=e.instanceData;for(let e=1;e<r;e++){let t=n[e]??e,r=a[t*18+3]??0,o=e;for(;o>0;){let e=n[o-1]??o-1;if(!i(a[e*18+3]??0,r))break;n[o]=e,--o}n[o]=t}}function R_(e,t,n,r,i,a,o,s){let c=n*18,l=Math.max(0,t.instanceData[c+11]??1),u=Math.max(0,t.instanceData[c+12]??l),d=e.mode===`mesh`?Math.max(0,t.instanceData[c+17]??l):l,f=e.mode===`billboard`?e.billboard.sizeValue:e.mesh.sizeValue,p=e.mode===`billboard`?e.billboard.separateAxes?e.billboard.sizeValueY:f:e.mesh.separateAxes?e.mesh.sizeValueY:f,m=e.mode===`mesh`&&e.mesh.separateAxes?e.mesh.sizeValueZ:f,h=e.modules.size?Math.max(0,Y(f,r,a,o)):1,g=e.modules.size?Math.max(0,Y(p,r,a,o)):1,_=e.modules.size?Math.max(0,Y(m,r,a,o)):1,v=fm(e,i,a,o);return s.x=Math.max(1e-4,l*h*v),s.y=Math.max(1e-4,u*g*v),s.z=Math.max(1e-4,d*_*v),s}function z_(e,t,n){return Kd(e,t,n),n[3]=Zd(e,t),n}function B_(e,t,n){return e.modules.color?(Kd(e.color.gradient,t,n),n[3]=Zd(e.color.gradient,t),n):(n[0]=1,n[1]=1,n[2]=1,n[3]=1,n)}function V_(e,t){for(let n=t;n<e.meshes.length;n++){let t=e.meshes[n];t&&(t.visible=!1)}}function H_(e){for(let t of e.meshes)if(t.removeFromParent(),Array.isArray(t.material))for(let e of t.material)e.dispose();else t.material.dispose();e.meshes.length=0,e.instanced?.dispose(),e.trailMesh.removeFromParent(),e.trailGeometry.dispose(),e.trailMaterial.dispose(),e.trailHistories.clear(),e.hostMaterial||e.material.dispose(),e.ownedGeometry?.dispose();for(let t of e.ownedTextures)t.dispose();e.ownedTextures.length=0}function U_(){return{activeParticles:0,visibleParticles:0,capacity:0,emittedLastFrame:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0,missingMeshRefs:[],missingMaterialRefs:[],unsupportedFeatures:[]}}function W_(){return{visibleParticles:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0}}function G_(e,t){return e.lengthSq()>1e-6?e.normalize():e.copy(t)}function K_(e,t){return Math.abs(e.y)<.9?t.set(0,1,0):t.set(1,0,0),t.cross(e).normalize()}function q_(e){return[e[0],e[1],e[2]]}function J_(e){return Number.isFinite(e)?Math.min(8,Math.max(0,e)):1}function Y_(e,t,n){return Math.min(n,Math.max(t,e))}function X_(e){return Number.isFinite(e)?Math.floor(e):s_}function Z_(e){return!!(e&&typeof e==`object`&&e.kind===`vfx-effect`)}var Q_=class{constructor(e){q(this,`options`,e),q(this,`loader`),q(this,`textures`,new Map),q(this,`pending`,new Map),q(this,`generation`,0),q(this,`destroyed`,!1),this.loader=new oa(e.loadingManager)}preload(e){return this.destroyed?Promise.reject(Error(`ThreeVfxTextureStore is destroyed.`)):Promise.all(e.map(e=>this.load(e))).then(()=>void 0)}preloadEffect(e,t={}){return this.preload(Oh(e,t))}getTexture(e){return this.textures.get(e.path)}resolveUrl(e){if(!this.destroyed)return this.options.resolveUrl(e.path)}release(){this.generation+=1;for(let e of this.textures.values())e.dispose();this.textures.clear(),this.pending.clear()}destroy(){this.destroyed||=(this.release(),!0)}load(e){let t=this.textures.get(e.path);if(t)return Promise.resolve(t);let n=this.pending.get(e.path);if(n)return n;let r=this.generation,i;try{if(i=this.options.resolveUrl(e.path),!i.trim())throw Error(`No URL resolved for "${e.path}".`)}catch(e){return Promise.reject(e)}let a=this.loader.loadAsync(i).then(t=>{if(this.destroyed||r!==this.generation)throw t.dispose(),Error(`Texture load was released: "${e.path}".`);return t.name=e.path,t.colorSpace=Ue,this.options.configureTexture?.(t,e),t.needsUpdate=!0,this.textures.set(e.path,t),t}).finally(()=>{this.pending.get(e.path)===a&&this.pending.delete(e.path)});return this.pending.set(e.path,a),a}};function $_(e){return`fnv1a32:${tv(ev(e))}`}function ev(e){if(typeof e!=`object`||!e)return JSON.stringify(e)??`null`;if(Array.isArray(e))return`[${e.map(e=>ev(e)).join(`,`)}]`;let t=e;return`{${Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${JSON.stringify(e)}:${ev(t[e])}`).join(`,`)}}`}function tv(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function nv(e,t={}){let n=rv(e.manifest);sv(n);let r=e.assetPaths?new Set([...e.assetPaths].map(dv)):null;if(t.requireEveryAsset&&!r)throw Error(`Official VFX export asset paths are required for this load operation.`);let i=new Map,a=new Map,o=new Set,s=new Set,c=new Set,l=new Set;for(let e of n.assets)fv(c,e.path,`duplicate asset path "${e.path}"`),fv(l,`${e.type}:${e.id}`,`duplicate asset identity "${e.type}:${e.id}"`);for(let r of n.effects){if(fv(o,r.id,`duplicate effect id "${r.id}"`),fv(s,r.path,`duplicate effect path "${r.path}"`),cv(r,t.requiredBackend),!(r.path in e.effectsByPath))throw Error(`Official VFX export is missing ${r.path}.`);let c=iv(e.effectsByPath[r.path]);lv(c,r,n.generatedAt);for(let e of c.assets)if(!uv(n.assets,e))throw Error(`Effect "${c.id}" references asset absent from the manifest: ${e.path}.`);i.set(c.id,c),a.set(r.path,c)}let u=$_(n.effects.map(e=>({path:e.path,sourceHash:e.sourceHash})));if(n.sourceHash!==u)throw Error(`Official VFX manifest source hash is stale: expected ${u}, received ${n.sourceHash}.`);for(let e of t.requiredEffectIds??[])if(!i.has(e))throw Error(`Official VFX export is missing required effect "${e}".`);if(r){for(let e of n.assets)if(!r.has(e.path))throw Error(`Official VFX export is missing asset ${e.path}.`)}return{manifest:n,effectsById:i,effectsByPath:a}}function rv(e){let t=mv(e,`VFX export manifest`);if(t.kind!==`vfx-manifest`)throw Error(`VFX export manifest kind must be "vfx-manifest".`);pv(t.version,`VFX export manifest`),gv(t.generatedAt,`VFX export manifest generatedAt`),gv(t.sourceHash,`VFX export manifest sourceHash`);let n=hv(t.effects,`VFX export manifest effects`),r=hv(t.assets,`VFX export manifest assets`),i=mv(t.validation,`VFX export manifest validation`);if(typeof i.valid!=`boolean`)throw Error(`VFX export manifest validation.valid must be boolean.`);hv(i.errors,`VFX export manifest validation errors`),hv(i.warnings,`VFX export manifest validation warnings`),hv(i.blockers,`VFX export manifest validation blockers`);for(let[e,t]of n.entries())av(t,e);for(let[e,t]of r.entries())ov(t,e);return e}function iv(e){let t=mv(e,`VFX exported effect`);if(t.kind!==`vfx-effect`)throw Error(`VFX exported effect kind must be "vfx-effect".`);pv(t.version,`VFX exported effect`),gv(t.generatedAt,`VFX exported effect generatedAt`),gv(t.id,`VFX exported effect id`),gv(t.sourceEffectId,`VFX exported effect sourceEffectId`),gv(t.sourceHash,`VFX exported effect sourceHash`),hv(t.emitters,`VFX exported effect emitters`);let n=hv(t.assets,`VFX exported effect assets`);mv(t.support,`VFX exported effect support`);for(let[e,t]of n.entries())ov(t,e);return e}function av(e,t){let n=mv(e,`VFX manifest effect ${t}`);return gv(n.id,`VFX manifest effect ${t} id`),gv(n.name,`VFX manifest effect ${t} name`),dv(gv(n.path,`VFX manifest effect ${t} path`)),gv(n.sourceEffectId,`VFX manifest effect ${t} sourceEffectId`),gv(n.sourceHash,`VFX manifest effect ${t} sourceHash`),mv(n.support,`VFX manifest effect ${t} support`),e}function ov(e,t){let n=mv(e,`VFX manifest asset ${t}`);if(gv(n.id,`VFX manifest asset ${t} id`),n.type!==`texture`&&n.type!==`material`&&n.type!==`mesh`)throw Error(`VFX manifest asset ${t} has unsupported type.`);return dv(gv(n.path,`VFX manifest asset ${t} path`)),e}function sv(e){if(!e.validation.valid||e.validation.blockers.length>0)throw Error(`Official VFX export is blocked by validation errors.`)}function cv(e,t){if(!t)return;let n=e.support.backends[t];if(!n||n.status===`blocked`||n.blockers.length>0)throw Error(`Effect "${e.id}" is blocked on required backend "${t}".`)}function lv(e,t,n){let r=[];if(e.id!==t.id&&r.push(`id`),e.sourceEffectId!==t.sourceEffectId&&r.push(`sourceEffectId`),e.sourceHash!==t.sourceHash&&r.push(`sourceHash`),e.generatedAt!==n&&r.push(`generatedAt`),r.length>0)throw Error(`Official VFX effect ${t.path} does not match its manifest entry (${r.join(`, `)}).`)}function uv(e,t){return e.some(e=>e.type===t.type&&e.id===t.id&&e.path===t.path)}function dv(e){let t=e.replace(/\\/g,`/`);if(t.length===0||t.startsWith(`/`)||t===`.`||t===`..`||t.startsWith(`../`)||t.includes(`/../`)||t.includes(`//`))throw Error(`Unsafe VFX export path "${e}".`);return t.replace(/^\.\//,``)}function fv(e,t,n){if(e.has(t))throw Error(`Official VFX manifest has ${n}.`);e.add(t)}function pv(e,t){if(e!==1)throw Error(`${t} version must be 1; received ${String(e)}.`)}function mv(e,t){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`${t} must be an object.`);return e}function hv(e,t){if(!Array.isArray(e))throw Error(`${t} must be an array.`);return e}function gv(e,t){if(typeof e!=`string`||e.length===0)throw Error(`${t} must be a non-empty string.`);return e}var _v=nv({manifest:{kind:`vfx-manifest`,version:1,generatedAt:`2026-10-14T10:57:50.891Z`,sourceHash:`fnv1a32:57f1d0e6`,effects:[{id:`atlas-frames`,name:`atlas-frames`,path:`effects/atlas-frames.json`,sourceEffectFile:`atlas-frames.json`,sourceEffectId:`atlas-frames`,sourceHash:`fnv1a32:3114a4f9`,support:{status:`partial`,overall:`partial`,targetProfile:`portable`,portableSubset:!1,backends:{pixi2d:{backend:`pixi2d`,status:`partial`,warnings:[{code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`partial`,warnings:[{code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],blockers:[]}},unsupportedModules:[],partialModules:[`emitters.0.modules.textureSheetAnimation`],warnings:[`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[{severity:`warning`,code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`campfire-embers`,name:`campfire-embers`,path:`effects/campfire-embers.json`,sourceEffectFile:`campfire-embers.json`,sourceEffectId:`campfire-embers`,sourceHash:`fnv1a32:d26847f3`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`rain-impact`,name:`rain-impact`,path:`effects/rain-impact.json`,sourceEffectFile:`rain-impact.json`,sourceEffectId:`rain-impact`,sourceHash:`fnv1a32:9c093399`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`seed-burst`,name:`seed-burst`,path:`effects/seed-burst.json`,sourceEffectFile:`seed-burst.json`,sourceEffectId:`seed-burst`,sourceHash:`fnv1a32:b021c3a4`,support:{status:`supported`,overall:`supported`,targetProfile:`portable`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},{id:`wall-sparks`,name:`wall-sparks`,path:`effects/wall-sparks.json`,sourceEffectFile:`wall-sparks.json`,sourceEffectId:`wall-sparks`,sourceHash:`fnv1a32:5901e087`,support:{status:`supported`,overall:`supported`,targetProfile:`three-world-3d`,preferredBackend:`three3d`,portableSubset:!0,backends:{pixi2d:{backend:`pixi2d`,status:`supported`,warnings:[],blockers:[],notes:[{code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`}]},three3d:{backend:`three3d`,status:`supported`,warnings:[],blockers:[]}},unsupportedModules:[],partialModules:[],warnings:[],notes:[`[pixi2d] depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`]},validation:{valid:!0,errors:[],warnings:[],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}}],assets:[{id:`atlas-4`,type:`texture`,path:`atlas-4.png`}],validation:{valid:!0,errors:[],warnings:[{severity:`warning`,code:`unsupported-module`,path:`emitters.0.modules.textureSheetAnimation`,message:`textureSheetAnimation has partial runtime export support; validate authored subfields before shipping.`}],infos:[{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`},{severity:`info`,code:`unsupported-module`,path:`emitters.0.render.depthTest`,message:`depthTest exports as deterministic Pixi 2.5D draw-order/ink semantics, not GPU depth-buffer rendering.`,backend:`pixi2d`}],blockers:[]}},effectsByPath:Object.fromEntries(Object.entries(Object.assign({"../vfx-project/out/vfx/effects/atlas-frames.json":e,"../vfx-project/out/vfx/effects/campfire-embers.json":t,"../vfx-project/out/vfx/effects/rain-impact.json":n,"../vfx-project/out/vfx/effects/seed-burst.json":r,"../vfx-project/out/vfx/effects/wall-sparks.json":i})).map(([e,t])=>[e.split(`/out/vfx/`)[1],t]))},{requiredBackend:`three3d`}),vv=document.body.dataset.mode||new URLSearchParams(location.search).get(`mode`)||`embers`,yv={embers:[`Campfire embers with authored wind`,`A fixed camera and seed isolate the wind change. Replay starts the same effect from zero.`,`Wind is an initial velocity bias. No fluid solver, live force field or collision response runs here.`],rain:[`Rain impacts emitted by the host`,`The host chooses floor positions and triggers small splashes. The particle runtime draws only the impact effect.`,`The timer imitates impact events. No raycast, rain collision or authored sub-emitter detection runs here.`],laser:[`Laser impact sparks on a wall`,`A burst points along the wall normal. Change the normal, replay, then dispose the scene.`,`The host supplies the impact point and orientation. This example does not implement a laser beam, raycast, collision or surface material response.`],atlas:[`A four-frame texture atlas`,`Four instances show the same exported effect with frame selection 0, 1, 2 and 3.`,`A uniform 2 × 2 grid has equal cells. This example does not interpret arbitrary packed or rotated atlas rectangles.`],seeds:[`Repeated effects with different seeds`,`The same effect samples at 0.35 seconds: seed 42, seed 42 again, and seed 99. Local transforms are compared before layout translation.`,`The equality check covers one effect at one fixed simulation time in this Three.js setup. Cross-backend pixel equality is not measured.`]};document.querySelector(`#title`).textContent=yv[vv][0],document.querySelector(`#intro`).textContent=yv[vv][1],document.querySelector(`#limits`).textContent=yv[vv][2];for(let e of[`wind`,`normal`])document.querySelector(`#`+e).parentElement.hidden=!(e===`wind`&&vv===`embers`||e===`normal`&&vv===`laser`);var bv=document.querySelector(`#stage`),xv=new Sn;xv.background=new W(1386032);var Sv=new ma(45,1,.1,50),Cv=new Zc({antialias:!0,preserveDrawingBuffer:!0});Cv.setPixelRatio(Math.min(devicePixelRatio,2)),bv.append(Cv.domElement);var wv=new Q_({resolveUrl:e=>new URL(`day10-`+e,document.baseURI).href}),Tv=new p_({scene:xv,camera:Sv,captureDebugTransforms:!0,textureProvider:wv}),Ev=[],Dv=!1,Ov,kv=performance.now(),Av=0,jv=0,Mv={},Nv=new zr(new wi(10,.05,8),new Dr({color:3163985}));Nv.position.y=-.06,xv.add(Nv);var Pv=new Ma(8,16,5732225,3427928);Pv.position.y=-.03,xv.add(Pv);var Fv;if(vv===`laser`&&(Fv=new zr(new Ei(5,3),new Dr({color:3492176,side:2})),Fv.position.y=1.4,xv.add(Fv)),vv===`embers`){let e=new zr(new Ti(.35,.4,.16,12),new Dr({color:9986627}));e.position.y=.05,xv.add(e)}(vv===`seeds`||vv===`atlas`)&&(xv.remove(Nv),xv.remove(Pv));function Iv(){Sv.position.set(...vv===`seeds`||vv===`atlas`?[0,0,7]:document.querySelector(`#camera`).value===`front`?[0,2,7]:[4,3.5,5]),Sv.lookAt(0,vv===`seeds`||vv===`atlas`?0:1,0),Sv.updateMatrixWorld()}function Lv(){for(let e of Ev)Tv.removeEffect(e,!0);Ev=[]}function Rv(e){return e.getParticleDebugTransforms().map(e=>({position:e.position,normal:e.normal,size:e.size,matrix:e.matrix}))}function zv(e,t={}){let n=Tv.createEffect(_v.effectsById.get(e),t);return Ev.push(n),n}async function Bv(){if(Lv(),Mv={},Av=0,jv=0,vv===`embers`){let e=structuredClone(_v.effectsById.get(`campfire-embers`)),t=document.querySelector(`#wind`).value===`right`;e.emitters[0].initializeParticle.velocity.min[0]=t?.22:-.62,e.emitters[0].initializeParticle.velocity.max[0]=t?.62:-.22,Ev.push(Tv.createEffect(e,{position:[0,.16,0],seed:42})),Mv.wind=t?`right`:`left`}if(vv===`laser`){let e=new H(...document.querySelector(`#normal`).value===`angled`?[Math.SQRT1_2,0,Math.SQRT1_2]:[0,0,1]),t=new gt().setFromUnitVectors(new H(0,0,1),e),n=new Yt().setFromQuaternion(t);Fv.quaternion.copy(t),zv(`wall-sparks`,{position:[e.x*.025,1.4,e.z*.025],rotation:[n.x,n.y,n.z],seed:42}),Mv.normal=e.toArray()}if(vv===`seeds`){for(let[e,t]of[[-2,42],[0,42],[2,99]]){let e=zv(`seed-burst`,{position:[0,0,0],seed:t});e.seek(.35),e.pause()}let e=Ev.map(e=>Rv(e).map(e=>({position:e.position,size:e.size})));Mv={time:.35,seeds:[42,42,99],sameSeedEqual:JSON.stringify(e[0])===JSON.stringify(e[1]),differentSeedEqual:JSON.stringify(e[0])===JSON.stringify(e[2]),samples:e,firstParticles:e.map(e=>e[0])},Ev.forEach((e,t)=>e.setTransform({position:[(t-1)*2,0,0]}))}if(vv===`atlas`){let e=_v.effectsById.get(`atlas-frames`);await wv.preload(e.assets.filter(e=>e.type===`texture`));for(let t=0;t<4;t++){let n=structuredClone(e),r=n.emitters[0].advanced.textureSheetAnimation;r.frameOverTime={...r.frameOverTime,mode:`constant`,value:t,min:t,max:t};let i=Tv.createEffect(n,{position:[(t-1.5)*1.3,0,0],seed:42});Ev.push(i),i.seek(.1),i.pause()}Mv={frames:[0,1,2,3],texture:`atlas-4.png`,tiles:[2,2]}}document.querySelector(`#status`).textContent=`Ready`}function Vv(){if(Ev=Ev.filter(e=>e.isActive?!0:(Tv.removeEffect(e,!0),!1)),Av>=jv){let e=Math.round(jv/.3);zv(`rain-impact`,{position:[Math.sin(e*2.3)*2,.015,Math.cos(e*1.7)*1.5],seed:e+42}),jv+=.3}}var Hv=()=>{Cv.setSize(bv.clientWidth,bv.clientHeight),Sv.aspect=bv.clientWidth/bv.clientHeight,Sv.updateProjectionMatrix()},Uv=new ResizeObserver(Hv);Uv.observe(bv),Hv(),Iv(),document.querySelector(`#action`).onclick=()=>Bv().catch(e=>document.querySelector(`#status`).textContent=e.message),document.querySelector(`#wind`).onchange=document.querySelector(`#normal`).onchange=()=>Bv(),document.querySelector(`#camera`).onchange=Iv;function Wv(){if(!Dv){Dv=!0,cancelAnimationFrame(Ov),Uv.disconnect(),Tv.destroy(),wv.destroy(),xv.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}),Cv.dispose(),document.querySelector(`#status`).textContent=`Disposed`,window.recipeState={mode:vv,disposed:Dv,evidence:Mv};for(let e of document.querySelectorAll(`button,select`))e.disabled=!0}}document.querySelector(`#capture`).onclick=()=>{Ev.forEach(e=>{e.seek(vv===`embers`?1:.18),e.pause()}),Mv.inspectionTime=vv===`embers`?1:.18,Mv.meanX=Ev.map(e=>{let t=Rv(e);return t.reduce((e,t)=>e+t.position[0],0)/t.length})},document.querySelector(`#dispose`).onclick=Wv,window.addEventListener(`pagehide`,Wv,{once:!0}),await Bv();function Gv(e){if(Dv)return;Ov=requestAnimationFrame(Gv);let t=Math.min((e-kv)/1e3,.05);kv=e,document.hidden||(Av+=t,vv===`rain`&&Vv(),Tv.update(t)),Cv.render(xv,Sv),window.recipeState={mode:vv,disposed:Dv,elapsed:Av,evidence:Mv,stats:{...Tv.stats},positions:Ev.map(Rv)},document.querySelector(`#stats`).textContent=JSON.stringify({mode:vv,...Mv,samples:void 0,stats:Tv.stats},null,2)}Ov=requestAnimationFrame(Gv);