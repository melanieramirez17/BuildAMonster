class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowF.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX + 80, this.bodyY + 70, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 80, this.bodyY + 70, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;  // flip the left arm horizontally to mirror the right arm
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 160, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 160, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg.flipX = true;  // flip the left leg horizontally to mirror the right leg
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.mouthClosed = this.add.sprite(this.bodyX, this.bodyY + 35, "monsterParts", "mouth_closed_happy.png");
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 70, this.bodyY - 120, "monsterParts", "detail_red_eye.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX - 70, this.bodyY - 120, "monsterParts", "detail_red_eye.png");
        my.sprite.leftHorn.flipX = true;  // flip the left horn horizontally to mirror the right horn
        my.sprite.mouthOpen = this.add.sprite(this.bodyX, this.bodyY + 35, "monsterParts", "mouthC.png") // this is the smile
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 35, "monsterParts", "mouthB.png") // this is the fangs
        my.sprite.mouthOpen.visible = false;  // start with the smile hidden
        my.sprite.fangs.visible = false;  // start with the fangs hidden
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.keyA.isDown) {
            my.sprite.body.x -= 2;
            my.sprite.rightArm.x -= 2;
            my.sprite.leftArm.x -= 2;
            my.sprite.rightLeg.x -= 2;
            my.sprite.leftLeg.x -= 2;
            my.sprite.eye.x -= 2;
            my.sprite.mouthClosed.x -= 2;
            my.sprite.rightHorn.x -= 2;
            my.sprite.leftHorn.x -= 2;
        }
        if (this.keyD.isDown) {
            my.sprite.body.x += 2;
            my.sprite.rightArm.x += 2;
            my.sprite.leftArm.x += 2;
            my.sprite.rightLeg.x += 2;
            my.sprite.leftLeg.x += 2;
            my.sprite.eye.x += 2;
            my.sprite.mouthClosed.x += 2;
            my.sprite.rightHorn.x += 2;
            my.sprite.leftHorn.x += 2;
        }

       
    }

}