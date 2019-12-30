
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 0,

            name: "",
            email: "",
            password: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            nameonCard: "",
            cardNum: "",
            expMonth: "",
            expYear: "",
            cvv: ""

        };
        this.handleClicks = this.handleClicks.bind(this);
        this.nextClicks = this.nextClicks.bind(this);
        this.complete = this.complete.bind(this);
        this.F1change = this.F1change.bind(this);
    }

    handleClicks(e) {
        e.preventDefault();
        this.setState({
            button: 1
        });
    }
    nextClicks(e) {
        e.preventDefault();
        this.setState({
            button: this.state.button += 1
        });
    }
    complete(e) {
        e.preventDefault();
        this.setState({
            button: 0
        });

        axios.post('/', this.state).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log("failed");
        });
    }
    F1change(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Please enter your information"
            ),
            React.createElement(
                "button",
                { onClick: this.handleClicks },
                "Check Out"
            ),
            React.createElement(
                "button",
                { onClick: this.nextClicks },
                "next"
            ),
            this.state.button === 1 && React.createElement(F1, { F1change: this.F1change }),
            this.state.button === 2 && React.createElement(F2, { F1change: this.F1change }),
            this.state.button === 3 && React.createElement(F3, { F1change: this.F1change }),
            this.state.button > 3 && React.createElement(Last, { complete: this.complete })
        );
    }
}

class F1 extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement("input", { type: "text", name: "name", placeholder: "name...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "email", placeholder: "E-mail...", onChange: this.props.F1change }),
                React.createElement("input", { type: "password", name: "password", placeholder: "account password...", onChange: this.props.F1change })
            )
        );
    }
}

class F2 extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "ship to address"
            ),
            React.createElement(
                "form",
                null,
                React.createElement("input", { type: "text", name: "line1", placeholder: "line 1...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "line2", placeholder: "line 2...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "city", placeholder: "city...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "state", placeholder: "state...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "zipCode", placeholder: "zip code...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "phone", placeholder: "phone number...", onChange: this.props.F1change })
            )
        );
    }
}

class F3 extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "please enter you credit card information"
            ),
            React.createElement(
                "form",
                null,
                React.createElement("input", { type: "text", name: "nameonCard", placeholder: "Name on Card...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "cardNum", placeholder: "Credit card number...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "expMonth", placeholder: "Exp Month...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "expYear", placeholder: "Exp Year...", onChange: this.props.F1change }),
                React.createElement("input", { type: "text", name: "cvv", placeholder: "CVV...", onChange: this.props.F1change })
            )
        );
    }
}
class Last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "ty for your trust your item will be shipped in 14 day"
            ),
            React.createElement(
                "button",
                { onClick: this.props.complete },
                "Purchase"
            )
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiYnV0dG9uIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcENvZGUiLCJwaG9uZSIsIm5hbWVvbkNhcmQiLCJjYXJkTnVtIiwiZXhwTW9udGgiLCJleHBZZWFyIiwiY3Z2IiwiaGFuZGxlQ2xpY2tzIiwiYmluZCIsIm5leHRDbGlja3MiLCJjb21wbGV0ZSIsIkYxY2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwiRjEiLCJGMiIsIkYzIiwiTGFzdCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWlDO0FBQzdCQyxnQkFBWUMsS0FBWixFQUFrQjtBQUNkLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQVc7QUFDUEMsb0JBQVMsQ0FERjs7QUFHSEMsa0JBQUssRUFIRjtBQUlIQyxtQkFBTSxFQUpIO0FBS0hDLHNCQUFTLEVBTE47QUFNSEMsbUJBQU0sRUFOSDtBQU9IQyxtQkFBTSxFQVBIO0FBUUhDLGtCQUFLLEVBUkY7QUFTSFAsbUJBQU0sRUFUSDtBQVVIUSxxQkFBUSxFQVZMO0FBV0hDLG1CQUFNLEVBWEg7QUFZSEMsd0JBQVcsRUFaUjtBQWFIQyxxQkFBUSxFQWJMO0FBY0hDLHNCQUFTLEVBZE47QUFlSEMscUJBQVEsRUFmTDtBQWdCSEMsaUJBQUk7O0FBaEJELFNBQVg7QUFvQkEsYUFBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtC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S2xDLEtBQUwsQ0FBV29CLFFBQXpGLEdBREE7QUFFQSwrQ0FBTyxNQUFLLE1BQVosRUFBb0IsTUFBTSxTQUExQixFQUFvQyxhQUFZLHVCQUFoRCxFQUF3RSxVQUFVLEtBQUtwQixLQUFMLENBQVdvQixRQUE3RixHQUZBO0FBR0EsK0NBQU8sTUFBSyxNQUFaLEVBQW9CLE1BQU0sVUFBMUIsRUFBcUMsYUFBWSxjQUFqRCxFQUFnRSxVQUFVLEtBQUtwQixLQUFMLENBQVdvQixRQUFyRixHQUhBO0FBSUEsK0NBQU8sTUFBSyxNQUFaLEVBQW9CLE1BQU0sU0FBMUIsRUFBb0MsYUFBWSxhQUFoRCxFQUE4RCxVQUFVLEtBQUtwQixLQUFMLENBQVdvQixRQUFuRixHQUpBO0FBS0EsK0NBQU8sTUFBSyxNQUFaLEVBQW9CLE1BQU0sS0FBMUIsRUFBZ0MsYUFBWSxRQUE1QyxFQUFxRCxVQUFVLEtBQUtwQixLQUFMLENBQVdvQixRQUExRTtBQUxBO0FBRkosU0FEQTtBQVlIO0FBZjJCO0FBaUJoQyxNQUFNa0IsSUFBTixTQUFtQnpDLE1BQU1DLFNBQXpCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFrQjtBQUNkLGNBQU1BLEtBQU47QUFDSDs7QUFFRGtDLGFBQVE7QUFDSixlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBUSxTQUFTLEtBQUtsQyxLQUFMLENBQVdtQixRQUE1QjtBQUFBO0FBQUE7QUFGSixTQURKO0FBTUg7QUFaNkI7O0FBZWxDb0IsU0FBU0wsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXVCTSxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXZCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgYnV0dG9uIDogMCxcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOlwiXCIsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6XCJcIixcbiAgICAgICAgICAgICAgICBsaW5lMTpcIlwiLFxuICAgICAgICAgICAgICAgIGxpbmUyOlwiXCIsXG4gICAgICAgICAgICAgICAgY2l0eTpcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOlwiXCIsXG4gICAgICAgICAgICAgICAgemlwQ29kZTpcIlwiLFxuICAgICAgICAgICAgICAgIHBob25lOlwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZW9uQ2FyZDpcIlwiLFxuICAgICAgICAgICAgICAgIGNhcmROdW06XCJcIixcbiAgICAgICAgICAgICAgICBleHBNb250aDpcIlwiLFxuICAgICAgICAgICAgICAgIGV4cFllYXI6XCJcIixcbiAgICAgICAgICAgICAgICBjdnY6XCJcIixcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja3MgPSB0aGlzLmhhbmRsZUNsaWNrcy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubmV4dENsaWNrcyA9IHRoaXMubmV4dENsaWNrcy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5GMWNoYW5nZT10aGlzLkYxY2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cblxuICAgIGhhbmRsZUNsaWNrcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ1dHRvbjogMVxuICAgICAgICB9KVxuICAgIH1cbiAgICBuZXh0Q2xpY2tzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnV0dG9uOiB0aGlzLnN0YXRlLmJ1dHRvbis9MVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wbGV0ZShlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnV0dG9uIDogMFxuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIGF4aW9zLnBvc3QoJy8nLHRoaXMuc3RhdGUpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxlZFwiKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgRjFjaGFuZ2UoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgXG4gICAgICAgIHJldHVybihcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+UGxlYXNlIGVudGVyIHlvdXIgaW5mb3JtYXRpb248L2gxPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrc30+Q2hlY2sgT3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubmV4dENsaWNrc30+bmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnV0dG9uID09PSAxICYmIDxGMSBGMWNoYW5nZSA9IHt0aGlzLkYxY2hhbmdlfS8+fVxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnV0dG9uID09PSAyICYmPEYyIEYxY2hhbmdlID0ge3RoaXMuRjFjaGFuZ2V9Lz59XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b24gPT09IDMgJiYgPEYzIEYxY2hhbmdlID0ge3RoaXMuRjFjaGFuZ2V9Lz59XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b24gPiAzICYmIDxMYXN0IGNvbXBsZXRlPXt0aGlzLmNvbXBsZXRlfSAvPn1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIG5hbWUgPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cImFjY291bnQgcGFzc3dvcmQuLi5cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5GMWNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4gXG5jbGFzcyBGMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+c2hpcCB0byBhZGRyZXNzPC9oMT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJsaW5lMVwiIHBsYWNlaG9sZGVyPVwibGluZSAxLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJsaW5lMlwiIHBsYWNlaG9sZGVyPVwibGluZSAyLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJjaXR5Li4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJzdGF0ZVwiIHBsYWNlaG9sZGVyPVwic3RhdGUuLi5cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5GMWNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lID1cInppcENvZGVcIiBwbGFjZWhvbGRlcj1cInppcCBjb2RlLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwicGhvbmUgbnVtYmVyLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBGMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+cGxlYXNlIGVudGVyIHlvdSBjcmVkaXQgY2FyZCBpbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lPVwibmFtZW9uQ2FyZFwiIHBsYWNlaG9sZGVyPVwiTmFtZSBvbiBDYXJkLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJjYXJkTnVtXCIgcGxhY2Vob2xkZXI9XCJDcmVkaXQgY2FyZCBudW1iZXIuLi5cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5GMWNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lID1cImV4cE1vbnRoXCIgcGxhY2Vob2xkZXI9XCJFeHAgTW9udGguLi5cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5GMWNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lID1cImV4cFllYXJcIiBwbGFjZWhvbGRlcj1cIkV4cCBZZWFyLi4uXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuRjFjaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZSA9XCJjdnZcIiBwbGFjZWhvbGRlcj1cIkNWVi4uLlwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLkYxY2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmNsYXNzIExhc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnR5IGZvciB5b3VyIHRydXN0IHlvdXIgaXRlbSB3aWxsIGJlIHNoaXBwZWQgaW4gMTQgZGF5PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGUgfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKSJdfQ==