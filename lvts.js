QkNNL0JDTUVSLmpz,const toArray = (str) => new TextDecoder().decode(new Uint8Array([...atob(str)].map(c => c.charCodeAt(0))));
