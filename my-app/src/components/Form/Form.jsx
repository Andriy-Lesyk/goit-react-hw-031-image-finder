import React, { Component } from 'react'


export default class Form extends Component {
    state={
        image: ''
    }

    handleImageChange=e=>{
        this.setState({image: e.currentTarget.value.toLowerCase()})
        
    }

    handleSubmit=e=>{
        e.preventDefault();
        if(this.state.image.trim()===''){
            alert('Введите запрос');
            return;
        }
        this.props.onSubmit(this.state.image);
        this.setState({image: ''})
    }

    render() {
        return (
            <div>
               <header className="Searchbar">
               <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    onChange={this.handleImageChange}
                    value={this.state.image}
                />
                </form>
                </header> 
            </div>
        )
    }
}
