const PubSub = {
  // channel: to what channel to publish to, payload: what info is being send
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  //channel: channel to subscribe to, callback: what to listen out for
  subscribe: function(channel, callback){
    document.addEventListener(channel, callback)
  }
};
// event is when this happens --> do this
// channel is what to listen out for (a click, or scroll, so which event)

module.exports = PubSub;
