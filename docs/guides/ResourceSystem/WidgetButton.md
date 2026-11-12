```xml
<?xml version="1.0" encoding="UTF-8" ?>
<WidgetButton>
	<Name>Name_WidgetButton</Name><!-- Название описателя -->
	<Priority>0</Priority><!-- (number:int) - Приоритет видимости окна. 
	По умолчанию: 0 -->
	<Children><!-- Опционально. Список подключаемых дочерних виджетов -->
		<Item href="Panel.(WidgetPanel).xdb" />
		<Item href="Panel2.(WidgetPanel).xdb" />
	</Children>
	<BackLayer href="../Textures/Background/Background.(WidgetLayerTiledTexture).xdb" /><!-- Опционально.
	Текстура заднего фона -->
	<FrontLayer href="../Textures/Foreground/Foreground.(WidgetLayerTiledTexture).xdb" /><!-- Опционально.
	Текстура переднего фона -->
	<textureMask href="../Textures/TextureMask/TextureMask.(UISimpleTexture).xdb" /><!-- Опционально.
	Маска прозрачности виджета -->
	<pickMask href="../Textures/PickMask/PickMask.(UISimpleTexture).xdb" /><!-- Опционально.
	Маска прокликивания виджета -->
	<Placement><!-- Опционально. Параметры размера, позиции, масштаб -->
		<QuantumScale>false</QuantumScale><!-- Опционально. 
		Масштабирование виджета при изменении размеров. Cкачкообразно или плавно.
		По умолчанию: false - виджет масштабируется плавно. -->
		<sizingWidget href="Panel.(WidgetPanel).xdb" /><!-- Опционально. 
		Ссылка на дочерний виджет, при изменении размеров которого будут менять размеры родительского виджета. -->
		<sizingWidgets><!-- Опционально. 
		Аналогично sizingWidget. Размер наибольшего из них будет влиять на размер родителя.  -->
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
	<bindSections><!-- Опционально. Блоки клавиатурных реакций -->
		<Item>
			<bindSection>mission_actions</bindSection><!-- Служебное название идентификатора из секции настроек. 
			https://alfa-ao.github.io/allods-lua-api-docs/api/category/binding/function.binding.GetSections -->
			<bindedReactions>
				<Item>action_01</Item><!-- Идентификатор бинда данной секции. 
				https://alfa-ao.github.io/allods-lua-api-docs/api/category/binding/function.binding.GetSection -->
			</bindedReactions>
		</Item>
	</bindSections>
	<TransparentInput>false</TransparentInput><!-- Опционально. 
	Устанавливает, является ли виджет прозрачным для ввода.
	По умолчанию: false -->
	<PickChildrenOnly>false</PickChildrenOnly><!-- Опционально. 
	Указывает, необходимо ли обрабатывать мышиные реакции только для дочерних виджетов, игнорируя сам виджет.
	По умолчанию: false -->
	<IgnoreDblClick>false</IgnoreDblClick><!-- Опционально. 
	Устанавливает, будет ли игнорироваться двойное нажатие левой кнопоки мыши
	По умолчанию: false -->
	<fade>1</fade><!-- Опционально. 
	Степень прозрачности виджета в диапазоне от 0 до 1, где 1.0 означает полную непрозрачность.
	По умолчанию: 1 -->
	<TextTag>button_label</TextTag><!-- Опционально. 
	(string) - Название текстового тэга в строке форматирования текущего варианта, 
		в который будет подставляться текст из выбранного варианта при вызове:
		https://alfa-ao.github.io/allods-lua-api-docs/api/category/widget/Button/method.SetVariant -->
	<pushingBindSections /><!-- Реакции, 
		которые кнопка будет переводить в нажатия для текущего варианта (независимо от bindedReactions).
	В пользовательских аддонах "не работает". -->
	<Variants><!-- Опционально. Описание вариантов кнопки. -->
		<Item><!-- Вариант -->
			<TextFileRef href="SimpleButtonLabel.txt" /><!-- Опционально. 
			Локализуемый текст надписи на кнопке, ссылка на текстовый файл. Кодировка "UTF-16 LE". -->
			<LayerHighlight href="Highlight.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. 
			Слой с текстурой подсветки, накладываемый на кнопку при наведении на нее курсора мыши. -->
			<PushedOffset x="0" y="0" /><!-- Опционально. 
			Параметр задает смещение надписи на кнопке в нажатом состоянии. -->
			<StateNormal><!-- Опционально. Параметры для нормального состояния кнопки. -->
				<LayerMain href="Normal.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. -->
				<FormatFileRef href="Normal.txt" /><!-- Опционально. Кодировка "UTF-16 LE". -->
			</StateNormal>
			<StatePushed><!-- Опционально. Параметры для нажатого состояния кнопки. -->
				<LayerMain href="Pushed.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. -->
				<FormatFileRef href="Pushed.txt" /><!-- Опционально. -->
			</StatePushed>
			<StateHighlighted><!-- Опционально. Параметры при наведении курсора. -->
				<LayerMain href="Highlighted.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. -->
				<FormatFileRef href="Highlighted.txt" /><!-- Опционально. -->
			</StateHighlighted>
			<StatePushedHighlighted><!-- Опционально. 
			Параметры при наведении курсора для нажатого состояния кнопки. -->
				<LayerMain href="PushedHighlighted.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. -->
				<FormatFileRef href="PushedHighlighted.txt" /><!-- Опционально. -->
			</StatePushedHighlighted>
			<StateDisabled><!-- Опционально. 
			Параметры для отключенного состояния кнопки (виджет деактивирован). -->
				<LayerMain href="Disabled.(WidgetLayerSimpleTexture).xdb" /><!-- Опционально. -->
				<FormatFileRef href="Disabled.txt" /><!-- Опционально. -->
			</StateDisabled>
			<Reaction>mouse_left_click</Reaction><!-- Опционально. 
			Идентификатор реакции на нажатие левой кнопки мыши. -->
			<ReactionRightClick>mouse_right_click</ReactionRightClick><!-- Опционально. 
			Идентификатор реакции на нажатие правой кнопки мыши. -->
			<reactionDblClick>mouse_dbl_click</reactionDblClick><!-- Опционально. 
			Идентификатор реакции на двойное нажатие левой кнопки мыши. -->
			<ReactionOnUp>false</ReactionOnUp><!-- Опционально. 
			Устанавливает, будет ли реакция только при отпускании кнопки.
			По умолчанию: false -->
			<soundOver href="" /><!-- Опционально. (HELP) -->
			<soundPress href="" /><!-- Опционально. (HELP) -->
		</Item>
	</Variants>
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
		<Align>ALIGNY_DEFAULT</Align><!-- number (enum AlignY) - выравнивание текста по вертикали. 
		По умолчанию: ALIGNY_DEFAULT 
		Значения:
			ALIGNY_DEFAULT - по умолчанию (по верхнему краю). Может быть переопределено в тексте с помощью aligny
			ALIGNY_TOP - по верхнему краю
			ALIGNY_MIDDLE - посередине
			ALIGNY_BOTTOM - по нижнему краю -->
	</TextStyle>
	<useDefaultSounds>true</useDefaultSounds><!-- Опционально. 
	Устанавливает, использовать ли звуки по умолчанию при нажатии или отпускании кнопки
	По умолчанию: true -->
</WidgetButton>
```