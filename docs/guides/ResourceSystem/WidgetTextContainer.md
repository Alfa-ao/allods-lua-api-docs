```xml
<?xml version="1.0" encoding="UTF-8" ?>
<WidgetTextContainer>
	<Name>SimpleName</Name><!-- Имя описателя. -->
	<Priority>0</Priority><!-- number (integer) - Приоритет видимости окна. 
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
    
    
    <!-- Контейнер не имеет никаких дополнительных реакций. -->
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
	Устанавливает, будет ли игнорироваться двойное нажатие левой кнопоки мыши.
	По умолчанию: false -->
	<fade>1</fade><!-- Опционально. 
	Степень прозрачности виджета в диапазоне от 0 до 1, где 1.0 означает полную непрозрачность.
	По умолчанию: 1 -->
	<border href="Border.(WidgetPanel).xdb" /><!-- Опционально. 
    WidgetPanel - Окно, в котором отображаются добавленные элементы. 
    Если не задан - создается автоматически по размеру контейнера. -->
	<widgetsArrangement>WIDGETS_ARRANGEMENT_T2B</widgetsArrangement><!-- Опционально. 
    WidgetsArrangement - Порядок добавления элементов.
    По умолчанию: WIDGETS_ARRANGEMENT_T2B
    Значения:
        WIDGETS_ARRANGEMENT_T2B - сверху вниз
        WIDGETS_ARRANGEMENT_L2R - слева направо
        WIDGETS_ARRANGEMENT_B2T - снизу вверх
        WIDGETS_ARRANGEMENT_R2L - справа налево -->
	<scrollBar href="ScrollBar.(WidgetGlideScrollBar).xdb" /><!-- Опционально. 
    WidgetGlideScrollBar - Скроллбар для прокрутки содержимого. 
    Если не задан, то контейнер нельзя прокручивать (но он может ресайзится автоматически при WIDGET_SIZING_INTERNAL) -->
	<elementsInterval>0</elementsInterval><!-- Опционально. 
    number (float) - Интервал между соседними элементами.
    По умолчанию 0 -->
    <elementsLimit>0</elementsLimit><!-- Опционально. number (int) - Максимальное число элементов в контейнере. 
    Если не задано (или задано <= 0), то не ограничено. -->
    <elementFixedSize></elementFixedSize><!-- Опционально. 
    number (float) - Фиксированный размер элемента по оси роста контейнера (widgetsArrangement). 
    Опционально, если задано, то контейнер использует данное значение для всех элементов, 
        если нет - вычисляет динамически для каждого элемента. 
        Если при заданном значении фактический размер элементов будет отличаться, то отображение будет некорректным. -->
	<formatFileRef href="TextContainerFormat.txt" /><!-- Опционально. 
    TextFileRef - Ссылка на файл, содержащий формат добавляемых WString. 
    Если не задана, то нельзя добавлять WString
    ! Не путать с (F)ormatFileRef -->
	<defaultTag>value</defaultTag><!-- Опционально. 
    defaultTag: string - Название тега в форматной строке formatFileRef для добавляемого WString. 
    Если не задано, то нельзя добавлять WString.
    ! Не путать с (D)efaultTag -->
	<pickObjectsOnly>false</pickObjectsOnly><!-- Опционально. 
    boolean - В тексте кликабельны только объекты ValuedObject, сам текст прозрачен для ввода.
    ! НЕ Путать с PickChildrenOnly.
    По умолчанию: false -->
    <rotateOnLimit>false</rotateOnLimit><!-- Опционально. 
    boolean - При добавлении текста сверх лимита (смотри WidgetContainer->elementsLimit) 
        автоматически удалять текст с противоположной стороны контейнера. 
    По умолчанию false. 
    true - нельзя добавлять текст в середину контейнера (метод InsertText) -->
</WidgetTextContainer>
```