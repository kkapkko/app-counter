import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const App = () => {
	const [count, setCount] = useState(0);

	const addCount = () => {
		setCount(count + 1);
	};

	const delCount = () => {
		count ? setCount(count - 1) : setCount(0);
	};

	const resetCount = () => {
		setCount(0);
	};

	return (
		<div className="body">
			<div className="counter">
				<div className="counter_num">
					<h1
						className={count > 9999 ? "counter_num-small" : "counter_num-big"}>
						{count}
					</h1>
				</div>
				<div className="counter_buttons">
					<button onClick={delCount}>
						<RemoveIcon />
					</button>
					<button onClick={addCount}>
						<AddIcon />
					</button>
					<button onClick={resetCount}>
						<RestartAltIcon className="reset" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
