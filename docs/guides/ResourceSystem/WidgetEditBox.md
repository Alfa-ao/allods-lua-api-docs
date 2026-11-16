```xml
<?xml version="1.0" encoding="UTF-8" ?>
<WidgetEditBox>
	<Name>SimpleName</Name><!-- Имя описателя. -->
	<Priority>0</Priority><!-- number (integer) - Приоритет видимости окна. 
	По умолчанию: 0 -->
	<Children><!-- Опционально. Список подключаемых дочерних виджетов -->
		<Item href="Panel.(WidgetPanel).xdb" />
		<Item href="Panel2.(WidgetPanel).xdb" />
	</Children>
	<Placement><!-- Опционально. Параметры размера, позиции, масштаб -->
		<QuantumScale>false</QuantumScale><!-- Опционально. 
		boolean - скалировать ли виджет стипенчато при изменении размеров окна. 
        Поскольку шрифты могут быть четкими только при отображении пиксель в пиксель, 
            их размер можно менять только дискретно, по целым числам. 
            Соответственно, для сохранения пропорций контролов последние также должны менять свои размеры дискретно. 
        По умолчанию: false. -->
		<sizingWidget href="Panel.(WidgetPanel).xdb" /><!-- Опционально. 
		Виджет, по которому считается размер (используется в случае WIDGET_SIZING_CHILD) -->
		<sizingWidgets><!-- Опционально. 
		Аналогично sizingWidget. 
        Размер наибольшего из них будет влиять на размер родителя (используется в случае WIDGET_SIZING_CHILD). -->
			<Item href="Panel.(WidgetPanel).xdb" />
			<Item href="Panel2.(WidgetPanel).xdb" />
		</sizingWidgets>
		<X><!-- Пояснение https://alfa-ao.github.io/allods-lua-api-docs/api/types/WidgetPlacementLua -->
			<Align>WIDGET_ALIGN_LOW</Align>
			<Sizing>WIDGET_SIZING_DEFAULT</Sizing>
			<Pos>0</Pos>
			<HighPos>0</HighPos>
			<Size>0</Size>
		</X>
		<Y>
			<Align>WIDGET_ALIGN_LOW</Align>
			<Sizing>WIDGET_SIZING_DEFAULT</Sizing>
			<Pos>0</Pos>
			<HighPos>0</HighPos>
			<Size>0</Size>
		</Y>
	</Placement>
    <Visible>true</Visible><!-- Опционально. Видимость виджета
	По умолчанию: true -->
	<Enabled>true</Enabled><!-- Опционально. Включение виджета.
	По умолчанию: true -->
	<TabOrder>0</TabOrder><!-- Опционально. Порядок обхода виджетов по нажатию клавиши Tab
	По умолчанию: 0 -->
	<TransparentInput>false</TransparentInput><!-- Опционально. 
	Устанавливает, является ли виджет прозрачным для ввода.
	По умолчанию: false -->
    <PickChildrenOnly>false</PickChildrenOnly><!-- Опционально. 
	Указывает, необходимо ли обрабатывать мышиные реакции только для дочерних виджетов, игнорируя сам виджет.
	По умолчанию: false -->
	<IgnoreDblClick>false</IgnoreDblClick><!-- Опционально. 
	Устанавливает, будет ли игнорироваться двойное нажатие левой кнопоки мыши.
	По умолчанию: false -->
	<fade>1</fade><!-- Опционально. 
	Степень прозрачности виджета в диапазоне от 0 до 1, где 1.0 означает полную непрозрачность.
	По умолчанию: 1 -->
	<Cursor1Layer href="Cursor1Layer.(WidgetLayerSimpleTexture).xdb" /><!-- текстурный слой для показа курсора в состоянии 1 -->
	<Cursor2Layer href="Cursor2Layer.(WidgetLayerSimpleTexture).xdb" /><!-- текстурный слой для показа курсора в состоянии 2 -->
	<CursorWidth>2</CursorWidth><!-- Опционально. number (integer) - ширина курсора. 
    По умолчанию: 2 -->
	<CursorChangeTimeMs>500</CursorChangeTimeMs><!-- Опционально. 
    number (integer) - время переключения состояний курсора в миллисекундах. 
    По умолчанию: 500 -->
	<maxSymbolsCount>-1</maxSymbolsCount><!-- Опционально. 
    number (integer) - максимальное количество символов в строке. 
    По умолчанию: -1 - количество не ограниченно -->
    <canPaste>true</canPaste><!-- Опционально. 
    boolean - если false, то в строку ввода невозможно вставить текст из буфера обмена. 
    По умолчанию: true -->
	<TextStyle><!-- Опционально. Стиль текста в виджете -->
		<multiline>false</multiline><!-- boolean - многострочный текст. 
		По умолчанию: false -->
		<wrapText>true</wrapText><!-- boolean - переносить текст на следующую строку, если он не влезает в размеры виджета. 
		Для многострочного текста. 
		По умолчанию: true -->
		<showClippedSymbol>false</showClippedSymbol><!-- boolean - показывать частично видимый символ, если он вылез за границы виджета по ширине. 
		По умолчанию: false -->
		<showClippedLine>true</showClippedLine><!-- boolean - показывать частично видимый символ, если он вылез за границы виджета по высоте. 
		По умолчанию: true -->
		<lineSpacing>0</lineSpacing><!-- number (integer) - фиксированное в пикселах расстояние между строками текста. 
		По умолчанию: 0 - не фиксированное расстояние -->
		<ellipsis>true</ellipsis><!-- boolean - показывать многоточие в конце строки, если текст не влезает по горизонтали. 
		По умолчанию: true -->
        <allowSpacesInLineBegin>false</allowSpacesInLineBegin><!-- boolean - убирать пробельные символы в начале текста.
        По умолчанию: false -->
		<Align>ALIGNY_DEFAULT</Align><!-- number (enum AlignY) - выравнивание текста по вертикали. 
		По умолчанию: ALIGNY_DEFAULT 
		Значения:
			ALIGNY_DEFAULT - по умолчанию (по верхнему краю). Может быть переопределено в тексте с помощью aligny
			ALIGNY_TOP - по верхнему краю
			ALIGNY_MIDDLE - посередине
			ALIGNY_BOTTOM - по нижнему краю -->
        <blendEffect>BLEND_EFFECT_ALPHABLND</blendEffect><!-- number (enum BLEND_EFFECT_...) - Определяет способ наложения текстур.
        По умолчанию: BLEND_EFFECT_ALPHABLND
        Значения:
            BLEND_EFFECT_ALPHABLND - Альфа-смешивание.
            BLEND_EFFECT_HIGHLIGHT - Подсветка.
            BLEND_EFFECT_ADD - Добавление.
            BLEND_EFFECT_MUL - Умножение.
            BLEND_EFFECT_REPLACE - Замена. -->
	</TextStyle>
	<filterAlias></filterAlias><!-- Опционально. 
    string - название фильтра (UITextFilter), разрешающего только буквы, перечисленные в нём. 
    Значения: "RUSSIAN", "NUMBERS", "INTEGER". См. EditBaseTextFilter -->
	<globalClassName></globalClassName><!-- Опционально. 
    string - стиль оформления основного текста (один из Name в WidgetCss). -->
	<selectionClassName></selectionClassName><!-- Опционально. 
    string - стиль оформления текста выделения (один из Name в WidgetCss). -->
	<selectionLayer href="SelectionLayer.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. 
    WidgetLayer - текстурный слой для отрисовки подложки выделения -->
	<scrollBar href="Scrollbar.(WidgetGlideScrollBar).xdb" /><!-- Опционально. 
    плавный скроллбар для скролирования теста по вертикали (не обязательный), отнимает часть внутреннего пространства виджета -->
	<!-- IMPORTANT: Scrollbar must be assigned! -->
	<ReactionEsc>reaction_esc</ReactionEsc><!-- Опционально. string - нажатие Esc -->
	<ReactionChanged>reaction_changed</ReactionChanged><!-- Опционально. string - в поле ввода изменилось значение -->
	<reactionPaste>reaction_paste</reactionPaste><!-- Опционально. 
    string - был вставлен текст, в случае canPaste == false можно оповестить о невозможности вставки текста -->
	<reactionFocusChanged>reaction_focus_changed</reactionFocusChanged><!-- Опционально. 
    string - изменился фокус (поле реакции active = true - появился, false - исчез) -->
	<reactionCapsLock>reaction_caps_lock</reactionCapsLock><!-- Опционально. 
    string - реакция на смену состояния клавиши Caps Lock (поле реакции active состояние CapsLock (true - включен, false - выключен) ) -->
</WidgetEditBox>
```