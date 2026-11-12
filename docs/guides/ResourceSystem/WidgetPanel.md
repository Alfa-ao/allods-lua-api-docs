```xml
<?xml version="1.0" encoding="UTF-8" ?>
<WidgetPanel>
	<Name>SimpleName</Name><!-- Имя описателя.
	Важно: Имя обязано быть уникальным везде.
	 -->
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
	<clipContent>true</clipContent><!-- Опционально.
	Устанавливает режим обрезки дочерних виджетов по размерам текущего виджета.
	По умолчанию: true - обрезать дочерние виджеты по размерам текущего виджета. -->
	<reactionOnPointing>mouse_over</reactionOnPointing><!-- Опционально.
	(string) - Идентификатор реакции при наведение курсора мыши на виджет -->
</WidgetPanel>
```