// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    editMessage: "Edit",
    editingStatus: false,
    updateContent: '',
    currentCard: 0,
    titleInput:'',
    contentInput:'',
    cards: [

    ]
  },
  methods: {
    newCard: function() {
      this.cards.push({
        title: this.titleInput,
        content: this.contentInput
      });
      this.titleInput='';
      this.contentInput='';
    },
    editing: function(card) {
      var cardIndex = this.cards.indexOf(card);
      this.currentCard=cardIndex;
      if (!this.editingStatus) {
        this.updateContent = this.cards[cardIndex].content;
        this.editingStatus = true;
        this.editMessage = "Update"
      }
      else {
        this.cards[cardIndex].content = this.updateContent;
        this.editingStatus = false;
        this.editMessage = "Edit"
      }


    },
    cancel: function() {
      this.titleInput='';
      this.contentInput='';
    },
    remove: function(thisOne) {
      var cardIndex=this.cards.indexOf(thisOne);
      this.cards.splice(cardIndex,1);
    }
  }
});
