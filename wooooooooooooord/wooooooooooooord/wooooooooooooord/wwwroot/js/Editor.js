window.applyStyles = (element, fontFamily, fontSize, isBold, isItalic, isUnderline, textAlignment) = > {
    const styles = element.style;
    styles .fontFamily = fontFamily;
    styles .fontSize = fontSize + "px";
    styles .fontWeight = isBold ? 'bold' : 'normal';
    styles .fontStyle = isItalic ? 'italic' : 'normal';
    styles .textDecoration = isUnderline ? 'underline' : 'none';
    styles .textAlign = textAlignment;
}

;

window.getEditorContent = (element) = > {
    return element.innerHTML;
}

;

window.setEditorContent = (element, content) = > {
    element .innerHTML = content;
}

;

window.saveFile = (filename, content) = > {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link .href = url;
    link .download = filename;
    document .body.appendChild(link);
    link .click();
    document .body.removeChild(link);
    URL .revokeObjectURL(url);
}

;
