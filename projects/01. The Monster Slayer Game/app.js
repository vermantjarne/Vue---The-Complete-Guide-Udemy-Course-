// Retrieves a random value between a min and max value (inclusive)
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCooldown: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.specialAttackCooldown !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      // Draw
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      }
      // Player lost
      else if (value <= 0) {
        this.winner = "monster";
        this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      // Draw
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      }
      // Monster lost
      else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    // Converts a string to capital case
    toCapitalCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCooldown = 0;
      this.winner = null;
      this.logMessages = [];
    },
    endPlayerTurn() {
      // Other methods can also be retrieved with the 'this' keyword
      this.reduceSpecialAttackCooldown();
      this.attackPlayer();
    },
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.endPlayerTurn();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.specialAttackCooldown = 3;
      this.addLogMessage("player", "special-attack", attackValue);
      this.endPlayerTurn();
    },
    reduceSpecialAttackCooldown() {
      if (this.specialAttackCooldown > 0) {
        this.specialAttackCooldown--;
      }
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      this.playerHealth = Math.min(this.playerHealth + healValue, 100);
      this.addLogMessage("player", "heal", healValue);
      this.endPlayerTurn();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      // Adds a new log message to the beginning of the array
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
