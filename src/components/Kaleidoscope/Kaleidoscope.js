// from https://codepen.io/roboshoes/pen/edbYwb

// some stuff we are gonna need
import * as THREE from "three"
import fragmentShader from "./fragment-shader.glsl"
import vertexShader from "./vertex-shader.glsl"
import glsl from "glslify"
import "./kaleidoscope.css"

const TAU = Math.PI * 2
const PI_HALF = Math.PI * 0.5

const settings = {
  slices: 32,
  radius: 600,
  seperation: 600,
}

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()

const camera = new THREE.PerspectiveCamera(
  90,
  window.innwerWidth / window.innerHeight,
  1,
  10000
)

// The plane that the shader draws on

function getTriangleSide() {
  const angle = PI_HALF - TAU / settings.slices / 2
  const side = 2 * settings.radius * Math.cos(angle)

  return side
}

class KaleidoPlane extends THREE.Mesh {
  constructor(canvas, renderer) {
    const texture = new THREE.Texture(canvas)

    texture.anistropy = renderer.getMaxAnisotropy()
    texture.needsUpdate = true

    const geometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        image: { value: texture },
        imageSize: { value: new THREE.Vector2(canvas.width, canvas.height) },
        resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        radius: { value: settings.radius },
        slices: { value: settings.slices },
        maxSize: { value: getTriangleSide() },
        seperation: { value: settings.seperation },
      },

      fragmentShader: glsl(fragmentShader),
      vertexShader: glsl(vertexShader),
    })

    super(geometry, material)

    this.texture = texture

    window.addEventListener("resize", function () {
      material.uniforms.resolution.value.set(
        window.innerWidth,
        window.innerHeight
      )
      material.needsUpdate = true
    })
  }

  update() {
    this.texture.needsUpdate = true
  }
}

// Texture shenanigans

class Shape {
  constructor() {
    this.x = Math.random() * 1024
    this.y = Math.random() * 512
    // this.x = 690
    // this.y = 500
    // console.log(this.x, this.y)
    this.width = 10 + Math.random() * 40
    this.height = 10 + Math.random() * 40
    // this.width = 10
    // this.height = 10
    this.rotation = Math.random() * TAU
    // this.rotation = 10
    // this.color =
    //   "#" +
    //   Math.round(Math.random() * 15).toString(16) +
    //   Math.round(Math.random() * 15).toString(16) +
    //   "0000"
    this.color = "rgba(" + Math.round(Math.random() * 250) + ",0,0," + 0.5 + ")"

    this.rotate = (-Math.PI + TAU * Math.random()) / TAU / 20
  }

  update() {
    this.rotation += this.rotate
  }
}

class Pattern {
  constructor() {
    this.canvas = document.createElement("canvas")
    this.context = this.canvas.getContext("2d")

    this.canvas.width = 1024
    this.canvas.height = 512

    this.shapes = []

    this.randomCanvas()
  }

  getCanvas() {
    return this.canvas
  }

  update() {
    this.context.fillStyle = "#ffe5dd"
    // this.context.fillStyle = "#DBB7B7"
    this.context.fillRect(0, 0, 1024, 512)

    var shape

    for (var i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i]
      shape.update()

      this.context.save()
      this.context.translate(shape.x, shape.y)
      this.context.rotate(shape.rotation)
      this.context.strokeStyle = shape.color
      this.context.strokeRect(0, 0, shape.width, shape.height)
      this.context.restore()
    }
  }

  randomCanvas() {
    for (var i = 0; i < 80; i++) {
      this.shapes.push(new Shape())
    }

    this.update()
  }
}

// let's get this jazz setup

onResize()
renderer.domElement.className = "kaleidoscope-canvas"
document.body.appendChild(renderer.domElement)

window.addEventListener("resize", onResize)

const pattern = new Pattern()
const plane = new KaleidoPlane(pattern.getCanvas(), renderer)

scene.add(plane)

render()

// callbacks

function onResize() {
  const { innerWidth, innerHeight } = window

  renderer.setSize(innerWidth, innerHeight)

  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
}

function render() {
  pattern.update()
  plane.update()

  renderer.render(scene, camera)

  requestAnimationFrame(render)
}
