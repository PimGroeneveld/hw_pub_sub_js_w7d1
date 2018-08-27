const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    document.addEventListener(channel, callback)
  }
};
// event is when this happens --> do this
// channel is what to listen out for (a click, or scroll, so which event)

module.exports = PubSub;
