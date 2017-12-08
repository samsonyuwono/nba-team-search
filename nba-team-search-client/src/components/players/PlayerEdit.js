import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class PlayerEdit extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            name="name"
            label="name"
            value={this.props.player.name}
            onChange={this.props.onChange}/>

          <input
            name="height"
            label="height"
            value={this.props.player.height}
            onChange={this.props.onChange}/>

          <input
            name="weight"
            label="weight"
            value={this.props.player.weight}
            onChange={this.props.onChange}/>

          <input
            name="image_url"
            label="image_url"
            value={this.props.player.image_url}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

PlayerEdit.propTypes = {
  player: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default PlayerEdit;
