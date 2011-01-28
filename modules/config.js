load('lib/config');

config.setDefault('extensions.restartless@piro.sakura.ne.jp.testBoolean', true);
config.setDefault('extensions.restartless@piro.sakura.ne.jp.testInteger', 10);

var bundle = require('lib/locale')
				.get('locale/messages.properties', location.href);

config.register('resource://restartless/config', <>

<prefwindow id="restartless-config"
	xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
	title={bundle.getString('config.title')}>

	<prefpane id="prefpane-general" label={bundle.getString('config.general')}>
		<preferences>
			<preference id="testBoolean"
				name="extensions.restartless@piro.sakura.ne.jp.testBoolean"
				type="bool"/>
		</preferences>


		<checkbox id="testBoolean-checkbox"
			label={bundle.getString('config.testBoolean')}
			preference="testBoolean"/>

	</prefpane>

	<prefpane id="prefpane-appearance" label={bundle.getString('config.appearance')}>
		<preferences>
			<preference id="testInteger"
				name="extensions.restartless@piro.sakura.ne.jp.testInteger"
				type="int"/>
		</preferences>


		<hbox align="center">
			<label id="testInteger-label"
				control="testInteger-textbox"
				value={bundle.getString('config.testInteger')}/>
			<textbox id="testInteger-textbox"
				type="number"
				preference="testInteger"/>
		</hbox>

	</prefpane>

</prefwindow>

</>);
