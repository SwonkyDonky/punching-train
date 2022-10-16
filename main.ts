function slash () {
    if (input.isGesture(Gesture.TiltLeft)) {
        sword = game.createSprite(player.get(LedSpriteProperty.X) - 1, 3)
    } else if (input.isGesture(Gesture.TiltRight)) {
        sword = game.createSprite(player.get(LedSpriteProperty.X) + 1, 3)
    } else {
        sword = game.createSprite(player.get(LedSpriteProperty.X), 2)
    }
    sword.set(LedSpriteProperty.Brightness, 200)
    if (sword.isTouching(enemy)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        enemy.set(LedSpriteProperty.X, randint(0, 4))
        enemy.set(LedSpriteProperty.Y, 0)
        score += 5
        basic.pause(speed)
    }
    basic.pause(200)
    sword.delete()
}
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    slash()
})
function obstackles () {
    randomTime = randint(1000, 5000)
    obstackle = game.createSprite(randint(-1, 0), 0)
    obstackle2 = game.createSprite(randint(1, 3), 0)
    obstackle3 = game.createSprite(randint(4, 5), 0)
    obstackle.set(LedSpriteProperty.Brightness, 100)
    obstackle2.set(LedSpriteProperty.Brightness, 100)
    obstackle3.set(LedSpriteProperty.Brightness, 100)
    obstackle.turn(Direction.Right, 90)
    obstackle2.turn(Direction.Right, 90)
    obstackle3.turn(Direction.Right, 90)
}
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
function jump () {
    player.set(LedSpriteProperty.Y, 2)
    player.set(LedSpriteProperty.Brightness, 200)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.pause(400)
    player.set(LedSpriteProperty.Y, 3)
    player.set(LedSpriteProperty.Brightness, 255)
}
input.onGesture(Gesture.Shake, function () {
    jump()
})
function ropeSender () {
    rope = game.createSprite(0, 0)
    rope2 = game.createSprite(1, 0)
    rope3 = game.createSprite(2, 0)
    rope4 = game.createSprite(3, 0)
    rope5 = game.createSprite(4, 0)
    rope.turn(Direction.Right, 90)
    rope2.turn(Direction.Right, 90)
    rope3.turn(Direction.Right, 90)
    rope4.turn(Direction.Right, 90)
    rope5.turn(Direction.Right, 90)
    rope.set(LedSpriteProperty.Brightness, 150)
    rope2.set(LedSpriteProperty.Brightness, 150)
    rope3.set(LedSpriteProperty.Brightness, 150)
    rope4.set(LedSpriteProperty.Brightness, 150)
    rope5.set(LedSpriteProperty.Brightness, 150)
}
function makeEnemy () {
    enemy = game.createSprite(randint(0, 4), 0)
    enemy.turn(Direction.Right, 90)
    enemy.set(LedSpriteProperty.Blink, 200)
    basic.pause(speed)
}
let rope5: game.LedSprite = null
let rope4: game.LedSprite = null
let rope3: game.LedSprite = null
let rope2: game.LedSprite = null
let rope: game.LedSprite = null
let obstackle3: game.LedSprite = null
let obstackle2: game.LedSprite = null
let obstackle: game.LedSprite = null
let enemy: game.LedSprite = null
let sword: game.LedSprite = null
let speed = 0
let player: game.LedSprite = null
let randomTime = 0
let score = 0
game.setScore(score)
music.setVolume(200)
let life = 3
let ropeObstackle = 0
randomTime = randint(1000, 5000)
player = game.createSprite(2, 3)
makeEnemy()
let speedObstackles = 1000
speed = 750
obstackles()
loops.everyInterval(speedObstackles, function () {
    if (player.isTouching(obstackle)) {
        obstackle.delete()
        life += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 789, 254, 255, 98, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (player.isTouching(obstackle2)) {
        obstackle2.delete()
        life += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 789, 254, 255, 98, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (player.isTouching(obstackle3)) {
        obstackle3.delete()
        life += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 789, 254, 255, 98, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    obstackle.move(1)
    obstackle2.move(1)
    obstackle3.move(1)
    speedObstackles += -1
    music.changeTempoBy(1)
})
basic.forever(function () {
    if (ropeObstackle == 1) {
        ropeSender()
        music.playTone(698, music.beat(BeatFraction.Half))
        basic.pause(speed)
        music.playTone(698, music.beat(BeatFraction.Half))
        for (let index = 0; index < 5; index++) {
            rope.move(1)
            rope2.move(1)
            rope3.move(1)
            rope4.move(1)
            rope5.move(1)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            if (player.isTouching(rope)) {
                life += -1
            } else if (player.isTouching(rope) && player.get(LedSpriteProperty.Y) == 3) {
                score += 10
            }
            if (player.isTouching(rope2)) {
                life += -1
            } else if (player.isTouching(rope2) && player.get(LedSpriteProperty.Y) == 3) {
                score += 10
            }
            if (player.isTouching(rope3)) {
                life += -1
            } else if (player.isTouching(rope3) && player.get(LedSpriteProperty.Y) == 3) {
                score += 10
            }
            if (player.isTouching(rope4)) {
                life += -1
            } else if (player.isTouching(rope4) && player.get(LedSpriteProperty.Y) == 3) {
                score += 10
            }
            if (player.isTouching(rope5)) {
                life += -1
            } else if (player.isTouching(rope5) && player.get(LedSpriteProperty.Y) == 3) {
                score += 10
            }
            if (player.isTouching(rope) || (player.isTouching(rope2) || (player.isTouching(rope3) || (player.isTouching(rope4) || player.isTouching(rope5))))) {
                music.playTone(175, music.beat(BeatFraction.Quarter))
            }
            basic.pause(200)
        }
        rope.delete()
        rope2.delete()
        rope3.delete()
        rope4.delete()
        rope5.delete()
        ropeObstackle = 0
    }
})
basic.forever(function () {
    if (life == 0) {
        game.pause()
        game.addScore(score)
        game.gameOver()
    }
})
basic.forever(function () {
    if (obstackle.get(LedSpriteProperty.Y) == 4) {
        basic.pause(speedObstackles)
        obstackle.delete()
        obstackle2.delete()
        obstackle3.delete()
        basic.pause(randomTime)
        obstackles()
    } else if (enemy.isTouching(obstackle)) {
        obstackle.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    } else if (enemy.isTouching(obstackle2)) {
        obstackle2.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    } else if (enemy.isTouching(obstackle3)) {
        obstackle3.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
})
loops.everyInterval(speed, function () {
    enemy.move(1)
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        basic.pause(speed)
        life += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 504, 1, 255, 52, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        enemy.set(LedSpriteProperty.X, randint(0, 4))
        enemy.set(LedSpriteProperty.Y, 0)
        basic.pause(speed)
    }
    if (player.isTouching(enemy)) {
        enemy.delete()
        life += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 504, 1, 255, 52, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        makeEnemy()
    }
    ropeObstackle = randint(0, 15)
    speed += -1
    score += 1
})
